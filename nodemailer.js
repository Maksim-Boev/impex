const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  auth: {
    user: 'info@impexgroup.com.ua',
    pass: 'ghjnjrjk7',
  },
});

function sendMail(message) {
  transporter.sendMail(message);
}

module.exports = sendMail;
