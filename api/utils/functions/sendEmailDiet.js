const nodemailer = require('nodemailer');

async function sendEmailDiet(email, subject, textEmail, diet) {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    diet = diet.replace(/(?:\r\n|\r|\n)/g, '<br>');

    var mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `${subject}`,
        html: `
            <h1> FoodFit</h1>
            <br/>
            <p style = "font-color:black; font-size: 18px">${textEmail}</p>
            <br/>
            <div>
                <p style="color:black; font-size: 18px;"> ${diet}</p>
            </div>
            <br/>
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