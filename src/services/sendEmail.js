const nodemailer = require("nodemailer");
const { config } = require("../config/config");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    /* user: "tatoos.julia2018@gmail.com", */
    /* pass: config.oauthGmailPass, */
    user: "securities.noreply@gmail.com",
    pass: "lnto wdxg kxdi hnvj",
  },
});

const sendEmail = async ( email ) => {

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Gmail"', // sender address
    to: email, // list of receivers
    subject: "Your Gmail account is at risk.", // Subject line
    /* html: `<section><h1>Tattos Julia</h1></br><p>Gracias por ponerte en contacto con nosotros , en breve atenderemos tú inquietud la cual será respondida por medio de alguno de los canales suministrados.</p></br><strong>Hasta pronto!!</strong></section>`, // html body */

    html: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alerta de Seguridad</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500&display=swap');
        
        body {
            font-family: 'Google Sans', Arial, sans-serif;
            line-height: 1.6;
            color: #202124;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
    </style>
</head>
<body>
    <table cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
        <!-- Header Banner -->
        <tr>
            <td style="background-color: #fce8e8; padding: 16px; text-align: center;">
                <h1 style="color: #d93025; margin: 0; font-size: 24px; font-weight: 400;">Alerta de Seguridad Importante</h1>
            </td>
        </tr>
        
        <!-- Warning Icon -->
        <tr>
            <td align="center" style="padding: 40px 20px 20px 20px;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 7.75V13" stroke="#d93025" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12 16.25V16.5" stroke="#d93025" stroke-width="2" stroke-linecap="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C7.99594 2.75 4.75 5.99594 4.75 10C4.75 14.0041 7.99594 17.25 12 17.25C16.0041 17.25 19.25 14.0041 19.25 10C19.25 5.99594 16.0041 2.75 12 2.75ZM3.25 10C3.25 5.16751 7.16751 1.25 12 1.25C16.8325 1.25 20.75 5.16751 20.75 10C20.75 14.8325 16.8325 18.75 12 18.75C7.16751 18.75 3.25 14.8325 3.25 10Z" fill="#d93025"/>
                </svg>
            </td>
        </tr>
        
        <!-- Main Message -->
        <tr>
            <td style="padding: 0 40px;">
                <h2 style="font-size: 28px; color: #202124; text-align: center; font-weight: 400; margin-bottom: 20px;">
                    Se ha detectado actividad sospechosa en su cuenta
                </h2>
            </td>
        </tr>
        
        <!-- Progress Bar -->
        <tr>
            <td style="padding: 20px 40px;">
                <div style="margin: 20px 0;">
                    <div style="color: #d93025; font-size: 24px; margin-bottom: 8px;">
                        Nivel de riesgo: Alto
                    </div>
                    <div style="background-color: #f1f3f4; height: 8px; border-radius: 4px;">
                        <div style="background-color: #d93025; width: 87%; height: 8px; border-radius: 4px;"></div>
                    </div>
                </div>
            </td>
        </tr>
        
        <!-- Explanation Text -->
        <tr>
            <td style="padding: 20px 40px;">
                <p style="font-size: 16px; color: #202124; margin-bottom: 24px; text-align: center;">
                    Hemos detectado actividad inusual en su cuenta. Por motivos de seguridad, es necesario que actualice su contraseña inmediatamente. Si no realiza esta acción, su cuenta podría ser suspendida temporalmente.
                </p>
            </td>
        </tr>
        
        <!-- Action Button -->
        <tr>
            <td style="padding: 20px 40px 40px 40px; text-align: center;">
                <a href="#" style="display: inline-block; background-color: #1a73e8; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-size: 16px; font-weight: 500;">
                    Actualizar Contraseña
                </a>
            </td>
        </tr>
        
        <!-- Footer -->
        <tr>
            <td style="padding: 20px; background-color: #f8f9fa; text-align: center; font-size: 12px; color: #5f6368;">
                <p style="margin: 0;">
                    Este es un mensaje automático de seguridad. Por favor, no responda a este correo.<br>
                    Si no reconoce esta actividad, contacte inmediatamente a soporte técnico.
                </p>
            </td>
        </tr>
    </table>
</body>
</html>`, // html body
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