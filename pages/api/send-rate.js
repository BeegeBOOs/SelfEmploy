import sendEmail from '../../lib/mail';


export default async function handler(req, res) {
  const message = {
    to: 'vitaliknb@gmail.com',
    subject: `Лист з ставкою від ${req.body.userEmail}`,
    text: `
      Заголовок: ${req.body.title},
      Ставка: ${req.body.price},
      E-mail: ${req.body.userEmail},
      Пропозиція:${req.body.description}
      `,
  };
  sendEmail(message);
  console.log(message);
  res.send(`Дякуєм, завдання відправлене , чекайте дзвінка оператора , ${req.body.name}!`);
}