import * as React from 'react';
import { forwardRef, BoxProps, Box, Heading, Flex } from '@chakra-ui/react';
import { teamInfo } from '../contstants';

interface CardProps extends BoxProps {
  team: 'blue' | 'red';
}

const Card = forwardRef<CardProps, 'div'>(
  ({ team, children, ...props }, ref) => (
    <Box
      bg={teamInfo[team].color}
      borderColor={teamInfo[team].color}
      height={['150px', '300px']}
      width={['300px', '475px']}
      borderWidth="1px"
      borderRadius="5px"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      ref={ref}
      {...props}
    >
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Heading
          as="h3"
          fontSize={{
            md: '4xl',
            lg: '6xl',
            xl: '8xl',
            base: '4xl'
          }}
          mb={4}
          color="white"
        >
          {children}
        </Heading>
      </Flex>
    </Box>
  )
);

export { Card };
