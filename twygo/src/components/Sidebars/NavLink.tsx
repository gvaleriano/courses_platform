import { Checkbox, ListItem, UnorderedList } from "@chakra-ui/react"

/* Componente de itens do menu lateral */
/* Uso de props por herança da dom */
/* Caminho ../components/Sidebars */
/* @author Guilherme Valeriano */


interface NavLinkProps {
  children: string
}

/* Para versão de desenvolvimento deixarei esse comentário
Também era possivel fazer através de um map recebendo os links através de uma req
{subTitle.map((item: string, index: number) => {
                return (
                  <ListItem key={index}>
                    <Checkbox colorScheme='purple'>
                      {item}
                    </Checkbox>
                  </ListItem>
                )
              })}
*/
export function NavLink({ children }: NavLinkProps) {
  return (
    <UnorderedList display={"flex"} flexDir={"column"} styleType="''">
      <ListItem>
        <Checkbox colorScheme='purple'>
          {children}
        </Checkbox>
      </ListItem>
    </UnorderedList>
  )
}