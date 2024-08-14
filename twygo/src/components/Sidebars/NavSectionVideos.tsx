import { Divider, Flex, Icon, IconButton, Stack, Text } from "@chakra-ui/react"
import { ChevronDownCircleIcon, ChevronUpCircleIcon } from "lucide-react"
import { useState, type ReactNode } from "react"

/* Componente de seções para o menu lateral de videos */ 
/* Uso de props tipadas / uso de estados */ 
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */ 

interface NavSectionVideosProps {
  title: string
  children: ReactNode
}

export function NavSectionVideos({ title, children }: NavSectionVideosProps) {
  const [isDivOpen, setIsDivOpen] = useState<boolean>(false)

  function toggleDivModule(){
    setIsDivOpen(!isDivOpen)
  }

  return (
    <Flex rounded={"lg"} flexDir={"column"} align={"center"} justify={"center"}>
      <Flex align={"center"}>
      <Text fontWeight={"bold"} color={"purple.500"} fontSize={"normal"} p={"4"}>
        {title}
      </Text>
      <IconButton 
        icon={!isDivOpen ? <Icon as={ChevronDownCircleIcon}/> : <Icon as={ChevronUpCircleIcon} />}
        aria-label="Open filters"
        fontSize={"24"}
        variant="unstyled"
        onClick={toggleDivModule}
        color={"purple.500"}
        ml={"auto"}
        ></IconButton>
      </Flex>
      <Divider borderColor={"gray.700"}></Divider>
      <Stack spacing={4}
        display={"flex"}
        align={"center"}
        bg={"rgba(0,0,0,.3)"} 
        opacity={!isDivOpen ? "0" : "1"} 
        transition={"all .2s"} 
        visibility={!isDivOpen? "hidden" : "visible"}
        height={!isDivOpen ? "0px" : "auto"}
        w={"100%"}
      >
        {children}
      </Stack>
      <Divider borderColor={"gray.700"}></Divider>
    </Flex>
  )
}