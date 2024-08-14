import { VideosPage } from "../Sections/Videos";
import { SidebarVideos } from "../Sidebars/SidebarVideos";
import { ChangeVideoProvider } from "../../contexts/ChangeVideoContext";

/* Componente com o container de videos */
/* Uso de context provider */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */

export function VideosPageContent() {

  return (
    <>
      <ChangeVideoProvider>
        <VideosPage />
        <SidebarVideos />
      </ChangeVideoProvider>
    </>
  )
}