import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import nodemailer from "nodemailer";

// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sellorablogs@gmail.com", // Using the provided email
    pass: process.env.EMAIL_PASSWORD // Password should be set as an environment variable
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  // POST /api/contact - Create a new contact submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const contact = await storage.createContact(validatedData);
      
      // Try to send email notification
      try {
        const mailOptions = {
          from: '"Shopify Expert Website" <sellorablogs@gmail.com>',
          to: "sellorablogs@gmail.com",
          subject: `New Contact Form: ${validatedData.subject}`,
          html: `
            <h1>New Contact Form Submission</h1>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
          `
        };
        
        if (process.env.EMAIL_PASSWORD) {
          await transporter.sendMail(mailOptions);
          console.log('Email notification sent');
        } else {
          console.log('Email notification skipped - no email password configured');
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
        // Continue with the response even if email fails
      }
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Contact form submitted successfully",
        data: contact
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message
        });
      }
      
      // Handle unexpected errors
      return res.status(500).json({
        success: false,
        message: "An unexpected error occurred"
      });
    }
  });

  // GET /api/contacts - Get all contact submissions (for admin purposes)
  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getContacts();
      return res.status(200).json({
        success: true,
        data: contacts
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while fetching contacts"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
