import * as React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';



export const ScoreTable = ({data}) => {
  return (
    <Table variant="simple" color="white">
      <Thead>
        <Tr>
          <Th color="white">Points</Th>
          <Th color="white">Reason</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          data?.map((item, index) => (
            <Tr key={index}>
              <Td>{item.value}</Td>
              <Td>{item.reason}</Td>
            </Tr>
          ))
        }
      </Tbody>
    </Table>
  );
};
