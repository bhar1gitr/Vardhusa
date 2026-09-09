import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Make sure an 'uploads' directory exists in your backend folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      message,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and email are required.",
      });
    }

    await transporter.sendMail({
      from: `"Vardhusa Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email,
      subject: `New Project Enquiry - ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f5f5f5;padding:30px;">
          <div style="max-width:650px;margin:auto;background:#fff;border:1px solid #e5e5e5;">
            
            <div style="background:#202020;padding:24px 28px;border-bottom:4px solid #F6C62E;">
              <div style="color:#F6C62E;font-size:12px;font-weight:bold;letter-spacing:1.5px;text-transform:uppercase;">
                Vardhusa Website
              </div>

              <h2 style="color:#fff;margin:8px 0 0;">
                New Project Enquiry
              </h2>
            </div>

            <div style="padding:28px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Company:</strong> ${company || "Not provided"}</p>
              <p><strong>Requirement:</strong> ${projectType || "Not selected"}</p>

              <div style="margin-top:20px;background:#f7f7f7;border-left:4px solid #F6C62E;padding:18px;">
                <strong>Project Details</strong>

                <p style="line-height:1.7;color:#555;">
                  ${message || "No message provided"}
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Enquiry sent successfully.",
    });
  } catch (error) {
    console.error("Mail error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
});

app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email address is required.",
      });
    }

    // Optional: Send an email notification to admin about the new subscription
    await transporter.sendMail({
      from: `"Vardhusa Website" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      subject: `New Newsletter Subscription - ${email}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;background:#f5f5f5;">
          <h2 style="color:#202020;">New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
        </div>
      `,
    });

    res.json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process subscription.",
    });
  }
});

app.post("/api/careers/apply", upload.single("resume"), async (req, res) => {
  try {
    const { role, fullName, email, phone, experience, coverNote } = req.body;
    const resumeFile = req.file;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all mandatory fields.",
      });
    }

    // Send notification email to admin via Zoho SMTP
    await transporter.sendMail({
      from: `"Vardhusa Careers" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      subject: `New Job Application: ${role} - ${fullName}`,
      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;background:#f5f5f5;">
          <h2 style="color:#202020;">New Application Received</h2>
          <p><strong>Position:</strong> ${role}</p>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Experience:</strong> ${experience || "Not specified"}</p>
          <p><strong>Cover Note:</strong> ${coverNote || "None"}</p>
          <p><strong>Resume:</strong> ${resumeFile ? resumeFile.filename : "No file attached"}</p>
        </div>
      `,
      attachments: resumeFile
        ? [
            {
              filename: resumeFile.originalname,
              path: resumeFile.path,
            },
          ]
        : [],
    });

    res.json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Career application error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while processing application.",
    });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});