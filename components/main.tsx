import React, { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

export const Main = (props: Props): JSX.Element => {
  return (
    <Box as="main" bg="#332F35" height="100%" pb="500px">
      {props.children}
    </Box>
  );
};
