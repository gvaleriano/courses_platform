import { Avatar, Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { StarIcon } from "lucide-react";
import { RiArrowLeftFill, RiArrowRightFill } from "react-icons/ri";

/* Componente de informações do video */
/* Caminho ../components/Sections/Videos */
/* @author Guilherme Valeriano */

export function VideoInfo() {
  return (
    <>
      <Flex w={"100%"} p={"2"} align={"center"} justify={"center"}>
        <Box>
          <HStack spacing={"4"}>
            <Button
              leftIcon={<Icon as={RiArrowLeftFill} />}
              fontSize={"16"}
              color={"gray.100"}
              bg={"purple.700"}
              _hover={{
                bg: "purple.800"
              }}
            >Anterior
            </Button>
            <Button
              rightIcon={<Icon as={RiArrowRightFill} />}
              fontSize={"16"}
              color={"gray.100"}
              bg={"purple.700"}
              _hover={{
                bg: "purple.800"
              }}
            >Próximo
            </Button>
          </HStack>
        </Box>
      </Flex>

      <Flex w={"100%"} border={"solid 1px"} borderColor={"gray.700"} flexDir={"column"}>
        <Box w={"100%"} bg={"purple.600"} >
          <Text p={"6"} fontWeight={"semibold"} color={"gray.100"}>Introdução</Text>
        </Box>
        <Flex flexDir={"row"} w={"100%"} justify={"space-between"}>
          <Flex align={"center"} p={"6"}>
            <Avatar size={"md"} name="Guilherme Valeriano" src="https://github.com/gvaleriano.png" />
            <Box ml={"4"} textAlign={"left"}>
              <Text fontSize={"lg"}>Guilherme Valeriano</Text>
              <Text as={"span"} fontWeight={"light"}>Educador</Text>
            </Box>
          </Flex>
          <Flex flexDir={"row"} align={"center"} justify={"center"}>
            <Text as={"p"} fontSize={"sm"} color={"gray.300"}>
              <Flex as={"span"}p={"6"}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </Flex>
              <Text p={"6"} as={"span"}> O que achou desse conteudo?</Text>
            </Text>
          </Flex>
        </Flex>
        <Box h={"100%"}>
          <Text p={"6"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, illum vitae accusamus nemo beatae eius similique quis odit dignissimos voluptates quod alias ex maxime ad incidunt voluptate eum? Molestias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, illum vitae accusamus nemo beatae eius similique quis odit dignissimos voluptates quod alias ex maxime ad incidunt voluptate eum? Molestias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione laboriosam, illum vitae accusamus nemo beatae eius similique quis odit dignissimos voluptates quod alias ex maxime ad incidunt voluptate eum? Molestias!
          </Text>
        </Box>
      </Flex>
    </>
  )
}