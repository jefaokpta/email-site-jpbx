import { createTransport } from "nodemailer";

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(emailForm) {
  // create reusable transporter object using the default SMTP transport
  let transporter = createTransport({
    host: 'h42.servidorhh.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${emailForm.name} 👻 <${emailForm.email}>`, // sender address
    to: 'jefaokpta@hotmail.com, jefferson.reis@vipsolutions.com.br', // list of receivers
    subject: "Mensagem do Site JPBX", // Subject line
    //text: emailForm.message, // plain text body
    html: `<b>${emailForm.message}</b>`, // html body
  });

  console.log(info);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
}
