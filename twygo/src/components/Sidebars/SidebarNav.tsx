import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";

/* Componente de menu criado para os filtros em seções */
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */

export function SidebarNav() {
  return (
    <Stack spacing={"12"} align={"flex-start"}>
      <NavSection title="Tipos de curso">
        <NavLink>Formações</NavLink>
        <NavLink>Bootcamps</NavLink>
        <NavLink>Cursos Rápidos</NavLink>
        <NavLink>Mentorias</NavLink>
      </NavSection>
      <NavSection title="Nível">
        <NavLink>Iniciante</NavLink>
        <NavLink>Junior</NavLink>
        <NavLink>Pleno</NavLink>
        <NavLink>Senior</NavLink>
      </NavSection>
      <NavSection title="Tecnologia">
        <NavLink>AWS</NavLink>
        <NavLink>Angular</NavLink>
        <NavLink>C#</NavLink>
        <NavLink>CSS</NavLink>
        <NavLink>Flutter</NavLink>
        <NavLink>GoLang</NavLink>
        <NavLink>HTML</NavLink>
        <NavLink>JAVA</NavLink>
        <NavLink>JavaScript</NavLink>
        <NavLink>React</NavLink>
      </NavSection>
      <NavSection title="Carreira">
        <NavLink>FullStack</NavLink>
        <NavLink>FrontEnd</NavLink>
        <NavLink>BackEnd</NavLink>
        <NavLink>Infraestrutura</NavLink>
        <NavLink>Cientista de Dados</NavLink>
        <NavLink>IA</NavLink>
      </NavSection>
    </Stack>
  )
}