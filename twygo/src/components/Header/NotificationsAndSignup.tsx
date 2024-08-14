import { Button, HStack, Icon } from "@chakra-ui/react";
import { RiApps2AddLine, RiNotificationLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

/* Componente de notificações e administração de cursos, 
/* não ficou muito intuitivo, poderia ter criado de uma forma mais descritiva o botão de navegação */
/* uso de hooks  */
/* Caminho ../components/Header */
/* @author Guilherme Valeriano */

export function NotificationsAndSignup() {
  //const {changeContainer} = useContext(ChangeContainerContext) Com a aplicação mais simples também deixei um contexto de troca de container pronto
  const navigate = useNavigate()
  return (
    <HStack
      spacing={["6","8"]}
      mx={["6","8"]}
      pr={["6","8"]}
      py={"1"}
      color={"gray.300"}
      borderRightWidth={1}
      borderColor={"gray.700"}
    >
      <Icon fontSize="20" as={RiNotificationLine} cursor={"pointer"} color={"purple.500"} />
      <Button
        border={"none"}
        bg={"transparent"}
        color={"purple.500"}
        _hover={{
          bg: "purple.400"
        }}
        onClick={() => navigate("/courses")}
      ><Icon fontSize="20" as={RiApps2AddLine} cursor={"pointer"} /></Button>
    </HStack>
  )
}