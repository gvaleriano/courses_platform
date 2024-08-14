import {CoursesPageContainer } from "./CoursesPageContainer";
import { Sidebar } from "../Sidebars";


/* Pagina contendo menu lateral e container principal dos cursos */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */
export function HomePage() {
  return(
    <>
    <Sidebar />
    <CoursesPageContainer/>
    </>
  )
}