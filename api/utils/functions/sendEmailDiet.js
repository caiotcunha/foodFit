const nodemailer = require('nodemailer');

async function sendEmailDiet(email, subject, textEmail, diet) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `${subject}`,
        html: `
            <h1> FoodFit</h1>
            <br/>
            <p style = "font-size: 18px">${textEmail}</p>
            <br/>
            <div>
                <p style="color:black ; font-size: 18px;"> ${diet}</p>
            </div>
            <br/>
            <p style = "font-size: 16px">Escreva o código na área solicitada no aplicativo para definir uma nova senha</p> 
        `
    };

    var mail = transporter.sendMail(mailOptions);

    let response = await mail.then(
        function(res) {
          return true;
        }).catch(
          function(err) {
          return false;
        });

    return response; 
};

module.exports = sendEmailDiet;