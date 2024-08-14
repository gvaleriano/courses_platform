import { Box, Button, Checkbox, Divider, Flex, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { X } from "lucide-react";

/* Componente de termos de uso, 
/* era possivel usar disclosure para controlar o estado do modal */
/* Uso de props tipadas */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */

interface TermsOfUserProps {
  checkTerms: boolean
  toggleCheckTerms: () => void
  closeCourseCardModal: () => void
}
export function TermsOfUser({ checkTerms, toggleCheckTerms, closeCourseCardModal }: TermsOfUserProps) {
  return (
    <Box
      w={["340px", "340px", "640px"]} rounded={"xl"} py={"5"} px={"6"} bg={"gray.900"}
    >
      <Stack spacing={"8px"}>
        <Flex align={"center"} justify={"space-between"}>
          <Heading
            size={"lg"}
            fontWeight={"normal"}
            color={"gray.50"}
          >Termos de Uso</Heading>
          <Button bg={"transparent"} color={"white"} _hover={{ bg: "transparent" }} type="button" onClick={closeCourseCardModal}>
            <X fontSize={"5"} />
          </Button>
        </Flex>
        <Flex>
          <Text>Para continuar é necessário aceitar os termos de uso</Text>
        </Flex>

      </Stack>
      <Divider my={"6"} borderColor={"gray.700"}></Divider>

      <VStack spacing={"2"}>
        <Box overflowY={"scroll"} h={"96"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatibus deserunt eos aut asperiores, voluptas suscipit quasi quibusdam et sequi? Recusandae aliquam labore doloremque aperiam placeat itaque, sapiente necessitatibus porro.
          Tenetur, perspiciatis eveniet. Vitae omnis molestiae ex exercitationem quisquam et error deleniti qui architecto voluptas similique eligendi tempora iste inventore corporis iure quod voluptatum, ea atque sunt modi laboriosam culpa.
          Aliquam repudiandae alias recusandae in provident beatae quas nam? Ducimus dolor aliquid, praesentium commodi culpa nesciunt exercitationem esse fuga incidunt repellendus, nobis minus error. Dolorem exercitationem blanditiis rerum enim iusto.
          Eligendi totam laboriosam, inventore id repudiandae assumenda asperiores corrupti dolor tempora odio perspiciatis cumque ea ratione atque ab laborum. Soluta quibusdam earum tempora culpa quidem, dolor accusamus distinctio accusantium dolores.
          Sapiente voluptatibus ratione ex laudantium praesentium nisi quo non autem magnam fugit ad eum sit harum itaque, aliquam repudiandae fugiat suscipit doloribus iure sunt nulla quaerat quis tempore? Autem, et?
          Dolor, adipisci reprehenderit corporis nulla ratione excepturi molestias natus vero numquam architecto quia ipsa esse. Ipsam ad dolor magnam nihil quasi ea blanditiis molestias! Labore, dicta aliquam? Tempora, blanditiis doloribus.
          Aliquam cum voluptates, ea, minus perspiciatis omnis corrupti quos eos exercitationem illo rerum non impedit. Harum expedita ullam earum rerum temporibus magni mollitia! Sequi, sit beatae quia excepturi tenetur minus.
          Perspiciatis explicabo atque delectus aliquam officia eos amet earum vero labore cum, fugiat corrupti cumque! Magnam natus sapiente asperiores, ipsa sint obcaecati aspernatur ea illo, nostrum vel repellendus quas assumenda?
          Explicabo corporis maiores quisquam. Deleniti dignissimos modi illo fugiat tempora ducimus tenetur animi, obcaecati velit voluptatibus enim reiciendis consectetur sed! Velit, architecto praesentium! Est ab sint, ratione tempora voluptatum earum.
          In corporis veritatis fuga quia voluptates excepturi nostrum suscipit accusamus eveniet sit vitae doloribus dolorem quaerat omnis, dicta consequuntur dolorum soluta officia perferendis. Deleniti cupiditate animi eius error illum amet.
        </Box>
        <Flex>
          <Checkbox colorScheme="purple"
            px={"4"}
            checked={checkTerms}
            onChange={toggleCheckTerms}
          /><Text>Li, aceito os termos de uso</Text>
        </Flex>
      </VStack>
    </Box>
  )
}