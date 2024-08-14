import { Button } from "@chakra-ui/button"

/* Componente com item de paginação */
/* uso de props tipadas */
/* Caminho ../components/utils/Pagination */
/* @author Guilherme Valeriano */

interface PaginationItemProps {
  isCurrent?: boolean
  numberPage: number
}

export function PaginationItem({ 
  isCurrent = false, 
  numberPage 
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size={"sm"}
        fontSize={"xs"}
        width={"4"}
        colorScheme="purple"
        disabled
        _disabled={{
          bg: "purple.500",
          cursor: "default"
        }}
      >
        {numberPage}
      </Button>
    )
  }

  return (
    <Button
      size={"sm"}
      fontSize={"xs"}
      width={"4"}
      bg={"gray.700"}
      _hover={{
        bg: "gray.500"
      }}
    >
      {numberPage}
    </Button>
  )
}