import { Search2Icon } from "@chakra-ui/icons";
import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";

/* Componente para barra de pesquisa */
/* uso de estados / uso de hooks / uso de referencias  */
/* Caminho ../components/Header */
/* @author Guilherme Valeriano */

export function SearchBar() {
  //Fazer a busca por estado controlled
  //const [search, setSearch] = useState<string>("")

  //Fazer a busca por ref uncontrolled
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      my="4"
      width={500}
      maxWidth={600}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bgColor="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{
          color: "gray.400"
        }}
        ref={searchInputRef}
      />
      <Icon as={Search2Icon} fontSize="20" />
    </Flex>
  )
}