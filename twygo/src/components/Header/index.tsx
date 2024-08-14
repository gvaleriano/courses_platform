import { LockIcon } from "@chakra-ui/icons"
import { Button, Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { SearchBar } from "./SearchBar"
import { Profile } from "./Profile";
import { NotificationsAndSignup } from "./NotificationsAndSignup";
import { Logo } from "./Logo";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

/* Componente Header */
/* uso de estados / uso de hooks  */
/* Caminho ../components/Header */
/* @author Guilherme Valeriano */

export function Header() {
  /* TODO fazer sistema de login const [userLogged, setUserLogged] = useState<boolean>(true)*/
  const userLogged = true;
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useSideBarDrawer()
  
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justify="space-between"
    >
      {!isWideVersion && (
        <IconButton 
        icon={<Icon as={RiMenuLine} />}
        aria-label="Open filters"
        fontSize={"24"}
        variant="unstyled"
        onClick={onOpen}
        mr={"2"}
        >

        </IconButton>
      )}
      <Logo/>
      
      {isWideVersion &&  <SearchBar />}
     
      {userLogged ? (
        <Flex align={"center"} ml={"auto"}>
          <NotificationsAndSignup />
          <Profile showProfileData={isWideVersion}/>
        </Flex>
      ) : (
        <Button colorScheme="purple" color="gray.50" leftIcon={<Icon fontSize="14" as={LockIcon} />} variant="solid">Login</Button>
      )}



    </Flex>
  )
}