/**
 * Simple script to create a deployable version of the site
 * This avoids complex build configurations that might fail on Netlify
 */

import { execSync } from 'child_process';
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// HTML content for a static version of the site
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shopify Expert - Custom Development Services</title>
  <meta name="description" content="Expert Shopify development services including custom store creation, theme customization, and e-commerce optimization.">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="static-content">
    <header>
      <div class="container">
        <div class="brand">Shopify Expert</div>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
    <main>
      <section id="hero">
        <div class="container">
          <h1>Custom Shopify Development</h1>
          <p>Expert solutions for your e-commerce business</p>
          <a href="#contact" class="button">Get in Touch</a>
        </div>
      </section>
      
      <section id="services">
        <div class="container">
          <h2>Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <h3>Custom Shopify Stores</h3>
              <p>Tailor-made online stores that perfectly match your brand identity and business requirements.</p>
            </div>
            <div class="service-card">
              <h3>Theme Customization</h3>
              <p>Modifications to existing Shopify themes to enhance functionality and appearance.</p>
            </div>
            <div class="service-card">
              <h3>Shopify App Development</h3>
              <p>Custom applications that extend your store's capabilities and streamline operations.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about">
        <div class="container">
          <h2>About Me</h2>
          <p>With over 2 years of specialized experience in Shopify development, I help businesses create exceptional online shopping experiences.</p>
          <p>My expertise includes Liquid, JavaScript, HTML, CSS, and API integrations.</p>
        </div>
      </section>
      
      <section id="contact">
        <div class="container">
          <h2>Get in Touch</h2>
          <p>Ready to elevate your Shopify store? Let's discuss your project.</p>
          
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact">
            
            <div class="form-row">
              <div class="form-group">
                <label for="name">Your Name</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required>
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input type="text" id="subject" name="subject" required>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            
            <button type="submit" class="button">Send Message</button>
          </form>
          
          <div class="contact-info">
            <div>
              <h3>Email</h3>
              <a href="mailto:sellorablogs@gmail.com">sellorablogs@gmail.com</a>
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+917001875324">+91 7001875324</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2025 Shopify Expert. All rights reserved.</p>
      </div>
    </footer>
  </div>
</body>
</html>
`;

// Basic CSS for the static site
const cssContent = `
:root {
  --primary: #008060;
  --secondary: #4A154B;
  --light: #f5f5f7;
  --dark: #1d1d1f;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: #fff;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

a {
  color: var(--primary);
  text-decoration: none;
}

.button {
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: 0.3s ease;
}

.button:hover {
  background-color: #006c52;
}

/* Header */
header {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  padding: 20px 0;
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--primary);
  background-color: rgba(0, 128, 96, 0.1);
  padding: 8px 16px;
  border-radius: 4px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  color: var(--dark);
  font-weight: 500;
  transition: 0.3s ease;
}

nav ul li a:hover {
  color: var(--primary);
}

/* Hero Section */
#hero {
  background: linear-gradient(to right, var(--light), #fff);
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 120px 0 60px;
  text-align: center;
}

#hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

#hero p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: #555;
}

/* Sections */
section {
  padding: 80px 0;
}

section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  padding: 30px;
  transition: 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.service-card h3 {
  color: var(--primary);
  margin-bottom: 15px;
}

/* Contact Form */
form {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin-bottom: 40px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 2px rgba(0, 128, 96, 0.2);
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  text-align: center;
}

.contact-info h3 {
  margin-bottom: 10px;
  color: var(--dark);
}

/* Footer */
footer {
  background-color: var(--dark);
  color: white;
  padding: 30px 0;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  #hero h1 {
    font-size: 2.5rem;
  }
  
  #hero p {
    font-size: 1.2rem;
  }
}
`;

try {
  console.log('Creating a simple static version of your site for Netlify...');
  
  // Ensure dist directory exists and is empty
  if (existsSync(join(__dirname, 'dist'))) {
    execSync('rm -rf dist/*', { stdio: 'inherit' });
  } else {
    mkdirSync(join(__dirname, 'dist'));
  }
  
  // Create the HTML file
  console.log('Creating index.html...');
  writeFileSync(join(__dirname, 'dist/index.html'), htmlContent.trim());
  
  // Create the CSS file
  console.log('Creating styles.css...');
  writeFileSync(join(__dirname, 'dist/styles.css'), cssContent.trim());
  
  console.log('\nStatic site created successfully in the "dist" folder!');
  console.log('\nTo deploy to Netlify:');
  console.log('1. Go to Netlify (app.netlify.com)');
  console.log('2. Drag and drop the "dist" folder onto the Netlify dashboard');
  console.log('3. Your site will be deployed immediately\n');
  
} catch (error) {
  console.error('Error creating static site:', error);
}