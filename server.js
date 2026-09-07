import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
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

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});