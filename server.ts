import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProduction = process.env.NODE_ENV === 'production';

  app.use(express.json());

  // Real API Contact Route with Resend Email Integration
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, service, details } = req.body;
      
      if (!name || !email || !details) {
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields: Name, email, and project details are required.' 
        });
      }

      // Email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide a valid email address.' 
        });
      }

      const resendApiKey = process.env.RESEND_API_KEY;
      const recipientEmail = 'syedazainab3344@gmail.com';

      if (!resendApiKey) {
        return res.status(500).json({
          success: false,
          message: 'Server configuration error: RESEND_API_KEY is not configured in production environment variables.'
        });
      }

      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Syeda Zainab Portfolio <onboarding@resend.dev>',
          to: [recipientEmail],
          replyTo: email,
          subject: `New Project Inquiry: ${service} - ${name}`,
          html: `
            <div style="font-family: sans-serif; padding: 24px; background: #071321; color: #F4F3EA; border-radius: 12px; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #8F2D56; border-bottom: 1px solid #23364A; padding-bottom: 12px; margin-top: 0;">New Portfolio Project Inquiry</h2>
              <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 8px 0;"><strong>Service Requested:</strong> ${service || 'General Inquiry'}</p>
              <div style="margin-top: 20px; padding: 16px; background: #0D1E30; border-radius: 8px; border: 1px solid #23364A;">
                <p style="margin-top: 0; color: #8F2D56; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Project Details & Goals:</p>
                <p style="margin-bottom: 0; white-space: pre-wrap; line-height: 1.6; color: #F4F3EA;">${details}</p>
              </div>
              <p style="margin-top: 24px; font-size: 11px; color: #8191A3; border-top: 1px solid #23364A; padding-top: 12px;">Sent securely from Syeda Zainab Portfolio Contact System.</p>
            </div>
          `
        })
      });

      const resendData = await resendResponse.json();
      if (!resendResponse.ok) {
        console.error('Resend API error:', resendData);
        return res.status(500).json({
          success: false,
          message: resendData.message || 'Failed to send email notification via Resend. Please verify RESEND_API_KEY.'
        });
      }

      return res.json({ 
        success: true, 
        message: 'Your inquiry has been successfully sent to Syeda Zainab!' 
      });
    } catch (err: any) {
      console.error('Contact submission error:', err);
      return res.status(500).json({ 
        success: false, 
        message: 'Server error while submitting your inquiry. Please try again or chat via WhatsApp.' 
      });
    }
  });

  if (isProduction) {
    // Serve static files from the Vite build directory
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));

    // SPA fallback: send index.html for all non-API routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    // Create Vite server in middleware mode for development
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running in ${isProduction ? 'production' : 'development'} mode on http://localhost:${PORT}`);
  });
}

startServer();
