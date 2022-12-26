import * as React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import Encounter2022 from '../images/encounter-2022-logo.png'


export const Logo: React.FC = (props) => {
  return (
    <Box width="40vw">
      <Image
        src={Encounter2022}
        alt="Encounter Logo"
        height={400}
        width={1000}
        sizes="50vw"
        style={{
          objectFit: 'contain'
        }}
        {...props}
      />
    </Box>
  );
};
