import { Flex } from "@chakra-ui/react";
import { VideoPlayer } from "./VideoPlayer";
import { VideoInfo } from "./VideoInfo";
import { useContext } from "react";
import { ChangeVideoContext } from "../../../contexts/ChangeVideoContext";

/* Componente de videos */
/* Caminho ../components/Sections/Videos */
/* @author Guilherme Valeriano */

export function VideosPage(){
  const { videoName } = useContext(ChangeVideoContext)
  return(
    <Flex flex={"1"} flexDir={"column"} minH={"100vh"}>
    <VideoPlayer
      source={videoName}
    />
    <VideoInfo/>
    </Flex>
  )
}