import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";


interface VideoPlayerProps{
  source: string
}
export function VideoPlayer({ source}:VideoPlayerProps){
  return (
    <Box mr={"2"}>
      <Flex 
        flexDir={"column"} 
        border={"solid 1px"} 
        rounded={"lg"} 
        borderColor={"purple.500"} 
        align={"center"} 
        justify={"center"} 
        p={"2"}
        bgGradient={"linear(gray.900 0%, gray.900 35%,  black 100%)"}
        >
        <Text color={"gray.100"} fontWeight={"semibold"} fontSize={"lg"}>Primeiros passos com React</Text>
        <Divider borderColor={"gray.700"} my={"5"}></Divider>
      <ReactPlayer url={source} controls={true} light={false} height="500px" width="100%"/>
      </Flex>
    </Box>
  );
}