import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Divider, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { X } from "lucide-react";

/* Componente com container do Modal para exibir detalhes dos cursos, 
/* é possivel adicionar esatados de controle para sessão validando cursos adquiridos */
/* Uso de props tipadas / Uso de estados / Uso de contextos/ Uso de hooks */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */

interface CourseCardContainerProps {
  closeCourseCardModal: () => void;
  title: string
  description: string
  price: string
  rating: number
  imageUrl: string
  imageAlt: string
  review: number
}
export function CourseCardContainer({
  title,
  description,
  rating,
  imageAlt,
  imageUrl,
  price,
  review,
  closeCourseCardModal
}:CourseCardContainerProps){
  return(
    <Box
        w={["340px", "340px", "640px"]} rounded={"xl"} py={"5"} px={"6"} bg={"gray.900"}
      >
          <Stack spacing={"8px"}>
          <Flex align={"center"} justify={"space-between"}>
            <Heading
              size={"lg"}
              fontWeight={"normal"}
              color={"gray.50"}
              
            >{title}</Heading>
            <Button bg={"transparent"} color={"white"} _hover={{ bg: "transparent" }} type="button" onClick={closeCourseCardModal}>
              <X fontSize={"5"} />
            </Button>
          </Flex>
          <Flex>
            <Text px={"6"}>{review} reviews</Text>
            <Text as={"p"} fontSize={"sm"} color={"gray.300"}>
              { //Array para preencher rating do curso
                Array(5)
                .fill('')
                .map((_, i) => (
                  <StarIcon
                    key={i}
                    color={i < rating ? 'purple.500' : 'gray.300'}
                  />
                ))}
            </Text>
          </Flex>

        </Stack>
        <Divider my={"6"} borderColor={"gray.700"}></Divider>

        <VStack spacing={"2"}>
          <Box w={"100%"}>
            <Image src={imageUrl} alt={imageAlt} w="100%" h="36" objectFit={"cover"} />
          </Box>
          <Divider my={"6"} borderColor={"gray.700"}></Divider>
          <Box>
            {description}
          </Box>
          <Text color={"purple.500"} fontWeight={"semibold"} fontSize={"xl"}><Box as={"span"} fontSize={"md"}>12x </Box>{price}</Text>
        </VStack>
        </Box>
  )
}