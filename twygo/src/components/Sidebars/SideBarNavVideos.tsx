import { Box } from "@chakra-ui/react";

import { NavSectionVideos } from "./NavSectionVideos";
import { VideoList } from "../Sections/Videos/VideoList";

/* Componente de menu criado para os videos em seções */
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */

export function SidebarNavVideos() {
  return (
    <Box border={"solid 1px"} rounded={"lg"} borderColor={"purple.500"}>
      <NavSectionVideos title="Módulo 1 - Fundamentos do React">
        <VideoList />
      </NavSectionVideos>
      <NavSectionVideos title="Módulo 2 - Conceito de props">
      <VideoList />
      </NavSectionVideos>
      <NavSectionVideos title="Módulo 3 - Hooks e Contextos">
      <VideoList />
      </NavSectionVideos>
      <NavSectionVideos title="Módulo 4 - Integrando com outras bibliotecas">
      <VideoList />
      </NavSectionVideos>
      <NavSectionVideos title="Módulo 5 - Aplicando os conhecimentos">
      <VideoList />
      </NavSectionVideos>
    </Box>
  )
}