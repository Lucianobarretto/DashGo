import { Box, Button, HStack, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <HStack
      // direction="row"   -> utilizo este comando no caso de usar o Stack como abaixo ou HStack direto!
      spacing="6"
      mt="8"
      justifyContent="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          bgColor="gray.700"
          _hover={{
            bg: 'gray.500'
          }}
        >
          4
        </Button>
      </Stack>
    </HStack>
  );
}