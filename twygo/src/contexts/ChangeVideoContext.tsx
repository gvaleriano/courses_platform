import { createContext, ReactNode, useState } from "react";

/* Contexto criado para troca de videos dentro do modulo escolhido, 
/* apenas para o MVP */
/* Caminho ../contexts */
/* @author Guilherme Valeriano */

interface ChangeVideoContextProps {
  videoName: string
  changeVideo: (video:string) => void;
}

interface ChangeVideoContextProviderProps{
  children: ReactNode
}

export const ChangeVideoContext = createContext({} as ChangeVideoContextProps)

export function ChangeVideoProvider({children}:ChangeVideoContextProviderProps){
  const [videoName, setVideoName] = useState<string>("")

  function changeVideo(video:string){
    setVideoName(video)
  }
  return(
    <ChangeVideoContext.Provider value={{changeVideo, videoName}}>
      {children}
    </ChangeVideoContext.Provider>
  )
}