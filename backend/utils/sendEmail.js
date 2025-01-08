const nodeMailer = require("nodemailer");

const sendEmail = async(options)=>{
//whenever we use mail then we use tester but they are not good so we will use gmail
  const transporter = nodeMailer.createTransport({
    host:process.env.SMPT_HOST,
    port:process.env.SMPT_PORT,
    service:process.env.SMPT_SERVICE,
    auth:{
        user:process.env.SMPT_MAIL, //simple mail transfer protocol
        pass:process.env.SMPT_PASSWORD,
    },
  });

  const mailOptions = {
    from:process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;