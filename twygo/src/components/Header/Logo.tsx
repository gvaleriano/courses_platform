import { Text } from "@chakra-ui/react";

/* Componente Logo */
/* Caminho ../components/Header */
/* @author Guilherme Valeriano */

export function Logo(){
  return(
    <Text
    as="a"
    href="/"
    fontSize={["2xl", "3xl"]}
    fontWeight="bold"
    letterSpacing="tight"
    w="64"
    color="purple.500"
    _hover={{
      color: "purple.400"
    }}
    cursor="pointer"
  >
    Twygo
  </Text>
  )
}