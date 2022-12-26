import * as React from 'react';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { Logo } from './logo';

export const Nav: React.FC<{ title?: string }> = ({
  title = 'scoreboard',
  ...props
}) => {
  return (
    <Flex
      as="nav"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Link href="/" color="white">
        <Logo />
      </Link>
      <Heading
        as="h2"
        color="white"
        fontSize={{
          sm: '2xl',
          md: '4xl',
          lg: '6xl',
          xl: '8xl',
          base: '2xl'
        }}
        mt={{
          base: '-20px',
          lg: '-40px'
        }}
      >
        {title}
      </Heading>
    </Flex>
  );
};
