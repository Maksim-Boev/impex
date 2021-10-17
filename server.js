const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const mailer = require('./nodemailer');
// const uploads = multer({ dest: 'uploads' }).array('file');
app.use(cors());
const jsonParser = bodyParser.json();
const port = 3001;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/jpg' ||
//     file.mimetype === 'image/jpeg'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//     console.log('Не правильный тип файла');
//   }
// };

app.use(express.static(__dirname));

const uploads = multer({
  storage: storageConfig,
}).array('file', 10);

// app.use(
//   multer({ storage: storageConfig, fileFilter: fileFilter }).array('files', 10)
// );

app.post('/upload', uploads, function (req, res) {
  // uploads(req, res, function (err) {
  //   if (err instanceof multer.MulterError) {
  //     console.log('Случилась ошибка Multer при загрузке');
  //     // Случилась ошибка Multer при загрузке.
  //   } else {
  //     console.log('При загрузке произошла неизвестная ошибка');
  //     // При загрузке произошла неизвестная ошибка.
  //   }
  // });

  let filedata = req.body;
  console.log('filedata');
  console.log(req.body);
  console.log(req.files);
  if (!filedata) res.send('Ошибка при загрузке файла');
  else res.send('Файл загружен');
});

// app.get('/post', (request, response) => {
//   console.log('GET');
//   console.log(request.body);
//   console.log(request.query);
//   response.send('<h2>Привет Express!</h2>');
// });

app.post('/post', jsonParser, (request, response) => {
  console.log('POST');
  console.log(request.body);

  const message = {
    from: 'Support <info@impexgroup.com.ua>',
    to: 'boev.maksim@outlook.com',

    // Subject of the message
    subject: 'Тест',

    // plaintext body

    text: 'Hello to myself!',
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
