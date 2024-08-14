import { Box, Stack, Text } from "@chakra-ui/react"
import type { ReactNode } from "react"

/* Componente de seções para o menu lateral */ 
/* Uso de props tipadas */ 
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */ 

interface NavSectionProps {
  title:string
  children: ReactNode
}

export function NavSection({title, children}:NavSectionProps){
  return(
    <Box>
    <Text fontWeight={"bold"} color={"gray.400"} fontSize={"small"}>
      {title}
    </Text>

    <Stack spacing={4} align={"stretch"} mt={"8"}>
      {children}
    </Stack>

  </Box>
  )
}