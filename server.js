const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mailer = require('./nodemailer');

app.use(cors());
const jsonParser = bodyParser.json();
const port = process.env.port || 3004;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.post('/post', jsonParser, (request, response) => {
  console.log('POST');
  console.log(request.body);

  const message = {
    from: 'Support <info@impexgroup.com.ua>',
    to: 'boev.maksim@outlook.com',

    // Subject of the message
    subject: 'Тест',

    // plaintext body

    text:
      `
      Имя: ${request.body.firstName}` +
      `
      EMail: ${request.body.EMail} ` +
      `
      Телефон: ${request.body.telephone} ` +
      `
      Описание: ${request.body.description} ` +
      `
      Откуда: ${request.body.from} ` +
      `
      Куда: ${request.body.to} `,

    attachments: request.body.file.map((file) => ({
      filename: Object.keys(file)[0],
      content: Object.values(file)[0],
      encoding: 'base64',
    })),
  };
  mailer(message);
  response.send('Заявка отправлена');
});

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port - ' + port);
});
