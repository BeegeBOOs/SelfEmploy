import Layout from '../components/Layout';
import hero from '../public/hero.svg';

import Link from 'next/link';

import { animate, motion } from 'framer-motion';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { styled } from '@stitches/react';
import { maxHeight } from '@mui/system';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { useRouter } from 'next/router';

const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInRight = {
    initial: {
      x: -160,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 160,
      opacity: 0,
      transition: { duration: 0.3, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const Container = styled('div', {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '1160px',
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
  });

  const router = useRouter();

  return (
    <Layout>
      <motion.div variants={stagger} style={{ padding: '6rem 0px' }}>
        <section
          style={{
            backgroundColor: '#fbfbfd',
            paddingBottom: '2rem',
          }}>
          <Container>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1, sm: 2, md: 4 }}>
              <Image src={hero} />

              <motion.div variants={fadeInRight} style={{ padding: '0px 10px' }}>
                <Typography
                  variant='h3'
                  style={{
                    fontSize: '2.5rem',
                    lineHeight: '2.7rem',
                    margin: '10px 0px',
                  }}>
                  SelfEmploy проект що знайде найбільш кваліфікованих фрілансерів для
                  виконання ваших проектів
                </Typography>
                <Typography variat='body1'>
                  Працюйте без небезпеки, заощаджуючи час і гроші.
                </Typography>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={{ xs: 1, sm: 2, md: 4 }}
                  style={{ padding: '10px 0px' }}>
                  <Button
                    onClick={() => router.push('/createRate')}
                    variant='contained'
                    style={{ backgroundColor: '#397367' }}>
                    Розмістити завдання
                  </Button>
                  <Button
                    onClick={() => router.push('/auth/register')}
                    variant='text'
                    style={{ color: '#397367' }}>
                    Стати фрилансером
                  </Button>
                </Stack>
              </motion.div>
            </Stack>
          </Container>
        </section>
        <motion.section
          style={{ paddingTop: '2rem' }}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}>
          <Container style={{ backgroundColor: '#397367' }}>
            <Link href='/createRate'>
              <div style={{ padding: '10px' }}>
                <Typography
                  variant='h2'
                  style={{
                    fontSize: '2.5rem',
                    lineHeight: '2.7rem',
                    margin: '10px 0px',
                    color: '#fff',
                  }}>
                  Допоможіть фрілансерам, створіть завдання на сервісі та підтримайте їх
                </Typography>
              </div>
            </Link>
          </Container>
        </motion.section>
        <section style={{ paddingTop: '2rem' }}>
          <Container>
            <div>
              <h3
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '2.7rem',
                  margin: '10px 0px',
                }}>
                Чому фрилансери вибирають SelfEmploy
              </h3>
            </div>
            <ul>
              <li>
                <Typography variant='h6'>Проєкти для новачків та профі</Typography>
              </li>
              <li>
                <Typography variant='h6'>Гарантія чесних проєктів</Typography>
              </li>
              <li>
                <Typography variant='h6'>Гнучкий графік роботи</Typography>
              </li>
              <li>
                <Typography variant='h6'>Пошук проєтів які підходять тобі</Typography>
              </li>
            </ul>
          </Container>
        </section>
        <section>
          <Container>
            <div>
              <h3
                style={{
                  fontSize: '2.5rem',
                  lineHeight: '2.7rem',
                  margin: '10px 0px',
                }}>
                SelfEmploy сервіс що набирає обертів
              </h3>
              <h4>
                Ви чули термін «фріланс», але не знаєте, що він означає? Можливо, ви
                шукаєте спеціаліста-фрілансера з України, або, можливо, хочете стати
                фрілансером, але не знаєте, з чого почати або з якими платформами вам слід
                співпрацювати? Давайте розберемося з умовами та подумаємо, як покращити
                свою діяльність у сфері фрілансу.
              </h4>
            </div>
            <Stack>
              <div>
                <h3>Що таке фріланс і хто такі фрілансери?</h3>
                <Divider></Divider>
                <p>
                  Фріланс – це діяльність професіоналів, які надають послуги бізнесу. Вони
                  надаються дистанційно, через Інтернет (онлайн), а також локально, якщо
                  замовник і підрядник знаходяться в одному місті. На відміну від штатних
                  працівників, фрілансери просто виконують певні завдання за одноразову
                  оплату.
                </p>
              </div>
              <div>
                <h3>Як вибрати фриланс-біржу для роботи чи пошуку виконавця</h3>
                <Divider></Divider>
                <p>
                  Існує два види спеціалізованих веб-сервісів: спеціалізовані сайти та
                  сайти широкого профілю. Чим більше послуг доступно на платформі, тим
                  більше виконавців, а отже, і клієнтів. Тому при виборі сайту слід
                  враховувати наступні аспекти:
                </p>
                <ul>
                  <li>
                    Трафік сайту — співвідношення кількості замовників, проєктів і
                    спеціалістів.
                  </li>
                  <li>Умови роботи — доступність послуг і комісійні збори.</li>
                  <li>
                    Інтерфейс — наскільки вам зручно орієнтуватися, знаходитися на сайті.
                  </li>
                </ul>
              </div>
            </Stack>
          </Container>
        </section>
      </motion.div>
    </Layout>
  );
};

export default Index;
