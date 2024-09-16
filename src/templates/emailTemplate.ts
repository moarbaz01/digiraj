interface EmailTypes {
  name: string;
  phone?: string;
  email: string;
  projectType: string;
  message: string;
}
export function generateEmailTemplate({
  name,
  phone,
  email,
  projectType,
  message,
}: EmailTypes) {
  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: white;
              color: black;
              padding: 20px;
            }
            h1 {
              color: #7e22ce;
            }
            .container {
              border: 1px solid #7e22ce;
              border-radius: 8px;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .info {
              margin-bottom: 20px;
            }
            .info strong {
              color: #7e22ce;
            }
            .message-box {
              padding: 15px;
              border-left: 4px solid #7e22ce;
              background-color: #fff;
            }
            .footer {
              margin-top: 30px;
              font-size: 12px;
              color: #7e22ce;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>New Project Information</h1>
            <div class="info">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${
                phone
                  ? `<p><strong>Phone (Optional):</strong> ${phone}</p>`
                  : ""
              }
              <p><strong>Project Type:</strong> ${projectType}</p>
            </div>
            <div class="message-box">
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on your website.</p>
          </div>
        </body>
      </html>
    `;
}
