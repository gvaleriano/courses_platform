import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

/* Contexto criado para o menu sidebar, 
/* para resgatar funcionalidades tanto para mobile, quanto pra WEB */
/* Caminho ../contexts */
/* @author Guilherme Valeriano */

interface SidebarDrawerContextProps {
  children: ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({children}:SidebarDrawerContextProps){
  const disclosure = useDisclosure()
  return(
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

//Configuração do eslint
// eslint-disable-next-line react-refresh/only-export-components
export const useSideBarDrawer = () => useContext(SidebarDrawerContext)