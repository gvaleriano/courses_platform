import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Flex } from "@chakra-ui/react";
import { Footer } from "../components/Footer/Footer";

/* Componente de Layout padrão para otimizar 
/* os componentes que precisam ser renderizados sem afetar os demais */
/* Caminho */
/* os componentes que precisam ser renderizados sem afetar os demais */
/* Caminho ../layouts */
/* @author Guilherme Valeriano */

export function DefaultLayout(){
  return(
    <>
      <Header/>
      <Flex w={"100%"} my={"6"} maxWidth={1480} mx={"auto"} px={"6"} >
        <Outlet/>
      </Flex>
      <Footer/>
    </>
  )
}