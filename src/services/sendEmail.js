const { config } = require("../config/config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "tatoos.julia2018@gmail.com",
    pass: config.oauthGmailPass,
  },
});

const sendEmail = async ( email ) => {

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"No-reply" <canchila.jhoan@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Tattos Julia", // Subject line
    html: `<section><h1>Tattos Julia</h1></br><p>Gracias por ponerte en contacto con nosotros , en breve atenderemos tú inquietud la cual será respondida por medio de alguno de los canales suministrados.</p></br><strong>Hasta pronto!!</strong></section>`, // html body
  });
  
};
const sendEmailToBussines = async ( email, message, name ) => {

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: email, // sender address
    to: "tatoos.julia2018@gmail.com", // list of receivers
    subject: `Contacto: ${ name }`, // Subject line
    html: message
  });
  
};

module.exports= {
  sendEmail,
  sendEmailToBussines
}