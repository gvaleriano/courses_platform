import { Flex, Link } from "@chakra-ui/react";

/* Componente de Footer */
/* Caminho ../components/Footer */
/* @author Guilherme Valeriano */

export function Footer(){
  return(
    <Flex as={"footer"} w={"100%"} justify={"center"} align="center" bg={"purple.500"} flexDir={["column", "column", "row"]}>
      <Flex as={"span"} w="100%" py={"8"} align={"center"} justify={"space-around"} color={"gray.50"} flexDir={["column", "column", "row"]}>
        {new Date().getFullYear()} &copy; Todos os direitos reservados
        <Link as={"a"} href="/" color={"gray.50"}>Twygo</Link>
      </Flex>
    </Flex>
  )
}