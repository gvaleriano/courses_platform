import { Routes, Route } from 'react-router-dom'

import { HomePage } from "../../Containers/HomePage"
import { NewCourseContainer } from "../../Containers/NewCourseContainer"
import { VideosPageContent } from "../../Containers/VideosPageContainer"
import { DefaultLayout } from "../../../layouts/DefaultLayout"

/* Componente para controlar as rotas da aplicação
/* caso não seja usado o contexto criado */
/* Caminho ../components/utils/Router */
/* @author Guilherme Valeriano */

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<NewCourseContainer />} />
        <Route path="/videos" element={<VideosPageContent />} />
      </Route>
    </Routes>
  )
}

