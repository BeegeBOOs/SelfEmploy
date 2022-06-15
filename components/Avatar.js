import React, { Component } from 'react';
import { styled, keyframes } from '@stitches/react';
import { mauve } from '@radix-ui/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { Router } from '@material-ui/icons';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  backgroundColor: 'white',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: mauve.mauve12,
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
export const Avatar = StyledAvatar;
export const AvatarFallback = StyledFallback;

// Your app...
const Flex = styled('div', { display: 'flex' });

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: 1.5,
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    email: {
      true: { color: mauve.mauve11 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const AvatarComp = () => {
  let temp, user;

  if (typeof window !== 'undefined') {
    temp = JSON.parse(localStorage.getItem('user'));
    user = temp?.user;
    // console.log('temp', temp);
  } else {
    console.log('You are on the server');
  }

    console.log(user!=null);

  const router = useRouter();

  return temp != null ? (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarFallback>
            {user != null ? (
              user?.firstName[0] + ' ' + user?.lastName[0]
            ) : (
              <AccountCircleIcon style={{ fontSize: '48px' }} />
            )}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={5}>
        <Flex css={{ flexDirection: 'column', gap: 7 }}>
          <Flex css={{ flexDirection: 'column', gap: 15 }}>
            <Text>
              <Text bold>{user?.firstName + ' ' + user?.lastName}</Text>
              {user?.client ? <Text>Замовник</Text> : <Text>Фрілансер</Text>}
              <Text email>{user?.email}</Text>
            </Text>
            <Flex css={{ gap: 15 }}>
              {/* <Flex css={{ gap: 5 }}>
                {user?.client ? (
                  <Button
                    onClick={() => {
                      router.push('/my-tasks/');
                    }}>
                    Мої замовлення
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      router.push('/my-projects/');
                    }}>
                    Мої проєкти
                  </Button>
                )}
              </Flex> */}
              <Flex css={{ gap: 5 }}>
                <Button
                  onClick={() => {
                    localStorage.clear();
                    router.push('/');
                  }}>
                  Вихід
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  ) : (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarFallback>
            <AccountCircleIcon style={{ fontSize: '48px' }} />
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent sideOffset={5}>
        <Flex css={{ flexDirection: 'column', gap: 7 }}>
          <Flex css={{ flexDirection: 'column', gap: 15 }}>
            <Flex css={{ gap: 15 }}>
              <Flex css={{ gap: 5 }}>
                <Button
                  onClick={() => {
                    router.push('/auth/login');
                  }}>
                  Вхід
                </Button>
              </Flex>
              <Flex css={{ gap: 5 }}>
                <Button
                  onClick={() => {
                    router.push('/auth/register/');
                  }}>
                  Реєстрація
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </HoverCardContent>
    </HoverCard>
  );
};

export default AvatarComp;
