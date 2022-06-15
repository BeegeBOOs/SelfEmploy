import sendEmail from '../../lib/mail';


export default async function handler(req, res) {
  const message = {
    to: 'vitaliknb@gmail.com',
    subject: `Лист з оформленним завданням для ${req.body.surname} ${req.body.name}`,
    text: `
      Ім'я: ${req.body.name},
      Телефон: ${req.body.phone},
      E-mail: ${req.body.email},
      Пропозиція:${req.body.description}
      `,
  };
  sendEmail(message);
  console.log(message);
  res.send(`Дякуєм, ставка відправлена , чекайте дзвінка оператора , ${req.body.email}!`);
}