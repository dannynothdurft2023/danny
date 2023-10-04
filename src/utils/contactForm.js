import nodemailer from "nodemailer";

module.exports = async (mailObj, emailSubject) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_APP_PASSWORD,
    },
  });

  const emailContent = `
  <table style="width: 100%;">
    <tr>
        <td align="center">
            <img src="https://res.cloudinary.com/dca67w0ia/image/upload/v1685865168/logo192_i4z5s7.png" alt="Logo" style="width: 100px"/>
        </td>
    </tr>
    <tr>
        
        <td align="center">
        <table style="max-width: 760px;">
            <tr>
            <td>
                <h1>${emailSubject}</h1>
                <p>Diese Nachricht wurde von <b>${mailObj.firma}</b> mit der E-Mail <b>${mailObj.email}</b> versenden</p>
                <p><b>${mailObj.firma}</b> hat dir folgende Nachricht hinterlassen:</p>
            </td>
            </tr>
            <tr>
            <td>
                <table style="width: 100%; border: 1px solid #eee; padding: 20px;">
                <tr>
                    <td>
                    ${mailObj.nachricht}
                    </td>
                </tr>
                </table>
            </td>
            </tr>
        </table>
        </td>
    </tr>
  </table>
`;

  const mailOptions = {
    from: mailObj.email,
    to: "danny.nothdurft@icloud.com",
    subject: emailSubject,
    content: "Kontakt Formular",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);
};
