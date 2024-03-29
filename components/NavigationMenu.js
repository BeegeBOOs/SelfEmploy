import React from 'react';
import { styled, keyframes } from '@stitches/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { violet, mauve, indigo, purple, blue, plum } from '@radix-ui/colors';
import LaptopMacTwoToneIcon from '@mui/icons-material/LaptopMacTwoTone';
import WorkTwoToneIcon from '@mui/icons-material/WorkTwoTone';
import AssignmentTwoToneIcon from '@mui/icons-material/AssignmentTwoTone';
import EmojiPeopleTwoToneIcon from '@mui/icons-material/EmojiPeopleTwoTone';

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
});

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
});

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
});

const scaleIn = keyframes({
  from: { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0 },
  to: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
});

const scaleOut = keyframes({
  from: { transform: 'rotateX(0deg) scale(1)', opacity: 1 },
  to: { transform: 'rotateX(-10deg) scale(0.95)', opacity: 0 },
});

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100vw',
  zIndex: 2,
});

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
  padding: 4,
  borderRadius: 6,
  listStyle: 'none',
  // boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const itemStyles = {
  padding: '8px 12px',
  outline: 'none',
  userSelect: 'none',
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  fontSize: 15,
  color: '#397367',
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px ${violet.violet7}` },
  '&:hover': { backgroundColor: violet.violet3 },
};

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
});

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '#397367',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
});

const StyledTriggerWithCaret = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <StyledTrigger {...props} ref={forwardedRef}>
      {children}
      <StyledCaret aria-hidden />
    </StyledTrigger>
  ),
);

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
  color: '#397367',
});

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
});

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
});

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: 'white',
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
});

const StyledIndicatorWithArrow = React.forwardRef((props, forwardedRef) => (
  <StyledIndicator {...props} ref={forwardedRef}>
    <StyledArrow />
  </StyledIndicator>
));

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  position: 'relative',
  transformOrigin: 'top center',
  marginTop: 10,
  width: '100%',
  backgroundColor: 'white',
  borderRadius: 6,
  overflow: 'hidden',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  height: 'var(--radix-navigation-menu-viewport-height)',

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
});

// Exports
const NavigationMenu = StyledMenu;
const NavigationMenuList = StyledList;
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuTrigger = StyledTriggerWithCaret;
const NavigationMenuLink = StyledLink;
const NavigationMenuContent = StyledContent;
const NavigationMenuViewport = StyledViewport;
const NavigationMenuIndicator = StyledIndicatorWithArrow;

// Your app...
const ContentList = styled('ul', {
  display: 'grid',
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: 'none',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          width: 500,
          gridTemplateColumns: '.75fr 1fr',
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          width: 600,
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
        },
      },
    },
  },
});

const ListItem = styled('li', {});

const LinkTitle = styled('div', {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: blue.blue12,
});

const LinkText = styled('p', {
  all: 'unset',
  color: blue.blue11,
  lineHeight: 1.4,
  fontWeight: 'initial',
});

const ContentListItem = React.forwardRef(
  ({ children, title, ...props }, forwardedRef) => (
    <ListItem>
      <NavigationMenuLink
        {...props}
        ref={forwardedRef}
        css={{
          padding: 12,
          borderRadius: 6,
          '&:hover': { backgroundColor: mauve.mauve3 },
        }}>
        <LinkTitle>{title}</LinkTitle>
        <LinkText>{children}</LinkText>
      </NavigationMenuLink>
    </ListItem>
  ),
);

const ContentListItemCustomerCreate = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 3', paddingBottom: '5px' }}>
      <NavigationMenuLink
        {...props}
        href='/createRate'
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(160deg, #397367 0%, #1f4039 100%);`,
          borderRadius: 6,
          padding: 25,
        }}>
        <LaptopMacTwoToneIcon style={{ color: '#ffffff' }} />
        <LinkTitle
          css={{
            fontSize: 18,
            color: 'white',
            marginTop: 16,
            marginBottom: 7,
          }}>
          Створити фриланс-проєкт
        </LinkTitle>
        <LinkText
          css={{
            fontSize: 14,
            color: mauve.mauve4,
            lineHeight: 1.3,
          }}>
          Отримайте найкращі пропозиції від фрилансерів
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  ),
);

const ContentListItemCustomerFind = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 3', paddingBottom: '5px' }}>
      <NavigationMenuLink
        {...props}
        href='/freelancers'
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(160deg, #397367 0%, #1f4039 100%);`,
          borderRadius: 6,
          padding: 25,
        }}>
        <WorkTwoToneIcon style={{ color: '#ffffff' }} />
        <LinkTitle
          css={{
            fontSize: 18,
            color: 'white',
            marginTop: 16,
            marginBottom: 7,
          }}>
          Знайти фрилансера
        </LinkTitle>
        <LinkText
          css={{
            fontSize: 14,
            color: mauve.mauve4,
            lineHeight: 1.3,
          }}>
          Виберіть найкращого спеціаліста
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  ),
);

const ContentListItemFreelancerFind = React.forwardRef(
  ({ children, ...props }, forwardedRef) => (
    <ListItem css={{ gridRow: 'span 3', paddingBottom: '5px' }}>
      <NavigationMenuLink
        {...props}
        href='/projects/'
        ref={forwardedRef}
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          background: `linear-gradient(160deg, #397367 0%, #1f4039 100%);`,
          borderRadius: 6,
          padding: 25,
        }}>
        <EmojiPeopleTwoToneIcon style={{ color: '#ffffff' }} />
        <LinkTitle
          css={{
            fontSize: 18,
            color: 'white',
            marginTop: 16,
            marginBottom: 7,
          }}>
          Знайти фриланс-проєкт
        </LinkTitle>
        <LinkText
          css={{
            fontSize: 16,
            color: mauve.mauve3,
            lineHeight: 1.3,
          }}>
          Вибирайте серед відкритих фриланс-проєктів
        </LinkText>
      </NavigationMenuLink>
    </ListItem>
  ),
);

const ViewportPosition = styled('div', {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  top: '100%',
  left: 0,
  perspective: '2000px',
});

export const NavigationMenuMain = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Замовникам</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout='two'>
              <ContentListItemCustomerCreate />
              <ContentListItemCustomerFind />
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Фрилансерам</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ContentList layout='two'>
              <ContentListItemFreelancerFind />
            </ContentList>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>

      <ViewportPosition>
        <NavigationMenuViewport />
      </ViewportPosition>
    </NavigationMenu>
  );
};

export default NavigationMenuMain;
