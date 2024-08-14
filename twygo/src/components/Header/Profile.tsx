import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

/* Componente Profile */
/* uso de estados / uso de props tipadas  */
/* Caminho ../components/Header */
/* @author Guilherme Valeriano */

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align={"center"}>
      {showProfileData && (
        <Box mr={"4"} textAlign={"right"}>
          <Text>Guilherme Valeriano</Text>
          <Text color={"gray.300"} fontSize={"small"}>
            guilherme.hvaleriano@gmail.com
          </Text>
        </Box>
      )}
      <Avatar size={"md"} name="Guilherme Valeriano" />
    </Flex>
  )
}