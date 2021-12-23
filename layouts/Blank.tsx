import React from 'react';
import { Flex } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
}

export function BlankLayout({ children }: Props) {
  return (
    <Flex direction="column" minH="100vh" backgroundColor="#096D86">
      <Flex borderColor="blackAlpha.700" border="8px" borderRadius="30" flex="1 1 auto" m={8}>
        <Flex
          flex="1 1 auto"
          bgImage={"linear-gradient(rgba(0, 230, 255, 0.527),rgba(0, 0, 0, 0.5)), url('space.jpg')"}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          borderRadius="20"
        >
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
