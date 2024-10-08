import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

/* Componente de paginação */
/* Caminho ../components/utils/Pagination */
/* @author Guilherme Valeriano */

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt={"8"}
      justify={"space-between"}
      align={"center"}
      spacing={"6"}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={"row"} spacing={"2"}>
        <PaginationItem numberPage={1} isCurrent/>
        <PaginationItem numberPage={2} />
        <PaginationItem numberPage={3} />
        <PaginationItem numberPage={4} />
        <PaginationItem numberPage={5} />
      </Stack>
    </Stack>
  )
}