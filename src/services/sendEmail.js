const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "canchila.jhoan@gmail.com",
    pass: "xgpx hmss tfik uqdy",
  },
});

const sendEmail = async ( email ) => {

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Tattos Julia" <canchila.jhoan@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "No-reply", // Subject line
    html: `<section><h1>Tattos Julia</h1></br><p>Gracias por ponerte en contacto con nosotros , en breve atenderemos tú inquietud la cual será respondida por medio de alguno de los canales suministrados.</p></br><strong>Hasta pronto!!</strong></section>`, // html body
  });
  
};

module.exports= {
  sendEmail
}