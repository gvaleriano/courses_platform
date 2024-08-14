import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";

import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNavVideos } from "./SideBarNavVideos";

/* Componente lateral contendo os videos dos cursos */
/* Uso de hooks / Uso de contextos */
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */

export function SidebarVideos() {
  const { isOpen, onClose } = useSideBarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg={"gray.800"} p={"4"}>
            <DrawerCloseButton mt={"6"} />
            <DrawerHeader>Videos</DrawerHeader>
            <DrawerBody>
              <SidebarNavVideos />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <>
      <Box as={"aside"} w={"30%"} mr={"8"} h={"100%"}>
        <SidebarNavVideos />
      </Box>
    </>
  )
}