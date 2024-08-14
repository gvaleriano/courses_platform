import { createContext, ReactNode, useEffect, useState } from "react";

/* Contexto criado para trocar o container das paginas, 
/* caso não seja necessario usar o react-router-dom 
/* podemos utilizar esse contexto para navegar entre as páginas */
/* Caminho ../contexts */
/* @author Guilherme Valeriano */

interface ChangeContainerContextProps {
  changeContainer: (video:string) => void;
  container: string
  showContainer: string
}

interface ChangeContainerContextProviderProps{
  children: ReactNode
}

export const ChangeContainerContext = createContext({} as ChangeContainerContextProps)

export function ChangeContainerProvider({children}:ChangeContainerContextProviderProps){
  const [container, setContainer] = useState<string>("")
  const [showContainer, setShowContainer] = useState<string>("")

  useEffect(() => {
    setShowContainer(container)
  }, [container]);

function changeContainer(op:string){
    setContainer(op)
}
  return(
    <ChangeContainerContext.Provider value={{changeContainer, container, showContainer}}>
      {children}
    </ChangeContainerContext.Provider>
  )
}