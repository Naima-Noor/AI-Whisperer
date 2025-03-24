const nodemailer = require("nodemailer");

(async () => {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: "gmail", // or another email service (e.g., Yahoo, Outlook)
        auth: {
            user: process.env.EMAIL_USER, // Replace with your email
            pass: process.env.EMAIL_PASS,      // Replace with your password or app password
        },
    });

    // Email options
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email address
        to: process.env.EMAIL_USER, // Replace with recipient email
        subject: "Test Email from NodeMailer",
        text: "Hello! this is test email.", // Plain text content
    };

    try {
        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
    } catch (error) {
        console.error("Error sending email:", error);
    }
})();
