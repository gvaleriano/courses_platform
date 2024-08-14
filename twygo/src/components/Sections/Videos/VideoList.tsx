import { Box, Button, Checkbox, Divider, Flex } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ChangeVideoContext } from "../../../contexts/ChangeVideoContext";

/* Componente contendo a lista de videos, item a item */
/* uso de estados / uso de contextos */
/* Caminho ../components/Sections/Videos */
/* @author Guilherme Valeriano */

export function VideoList() {
  const [isCheckedCourse, setIsCheckedCourse] = useState<boolean>(false)
  const {changeVideo} = useContext(ChangeVideoContext)
  //TODO escurecer div de video assistido 
  function isWatched(){
   
      setIsCheckedCourse(!isCheckedCourse)  
  }
  return (
    <Box w={"100%"} >
      <Flex  align={"center"} justify={"center"}>
        <Checkbox variant="circular" colorScheme={"purple"} rounded={"full"} ml="4" onChange={isWatched}/>
        <Button w={"100%"} bg={"transparent"} color={"gray.100"} border={"none"} _hover={{
          bg: "transparent"
        }} onClick={() => changeVideo("/react.mp4")}>Primeiros passos com React</Button>
      </Flex>
      <Divider borderColor={"gray.700"}></Divider>
      <Flex align={"center"} justify={"center"} w={"100%"}>
        <Checkbox variant="circular" colorScheme={"purple"} rounded={"full"} ml="4"/>
        <Button w={"100%"} bg={"transparent"} color={"gray.100"} border={"none"} _hover={{
          bg: "transparent"
        }} onClick={() => changeVideo("/react2.mp4")}>Configurando ambiente</Button>
      </Flex>
      <Divider borderColor={"gray.700"}></Divider>
      <Flex align={"center"} justify={"center"} w={"100%"}>
        <Checkbox variant="circular" colorScheme={"purple"} rounded={"full"} ml="4" />
        <Button w={"100%"} bg={"transparent"} color={"gray.100"} border={"none"} _hover={{
          bg: "transparent"
        }}>Conceitos principais</Button>
      </Flex>
      <Divider borderColor={"gray.700"}></Divider>
    </Box>
  )
}