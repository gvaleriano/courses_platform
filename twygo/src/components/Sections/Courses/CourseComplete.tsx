import { StarIcon } from "@chakra-ui/icons"
import { Box, Flex, Image, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { CourseCardModal } from "./CourseCardModal"

/* Componente do card  do curso com titulo e descrição */
/* Uso de props tipadas / Uso de estados / Funções de controle */
/* Caminho ../components/Sections/Courses */
/* @author Guilherme Valeriano */

interface CardProps {
  imageUrl: string,
  imageAlt: string,
  title: string,
  description: string,
  formattedPrice: string,
  reviewCount: number,
  rating: number,
}

export function CourseComplete({...props}:CardProps){

  //Estado para controlar modal
  const [isCourseCardModalOpen, setIsCourseCardModalOpen] = useState<boolean>(false)

  //funções de controle de modal
  function openCourseCardModal(){
    setIsCourseCardModalOpen(true)
  }

  function closeCourseCardModal(){
    setIsCourseCardModalOpen(false)
  }

  return(
    <Box w='100%' 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden' 
      borderColor="purple.500" 
      display="flex" 
      flexDir={["column", "column", "row"]}
      >
      <Box w={["100%", "100%", "290px"]}>
        <Image src={props.imageUrl} alt={props.imageAlt} w="100%"  h="100%" objectFit={"cover"}/>
      </Box>
      <Box w="100%" display="flex" flexDirection="row" px="4" fontWeight="semibold" p="2" flexDir="column">
        <Stack spacing="12px">
        <Box as={"a"} color="gray.50" onClick={openCourseCardModal} cursor={"pointer"}>
          {props.title}
        </Box>
        <Box fontWeight="normal" color="gray.100" noOfLines={3}>
          {props.description}
        </Box>
        <Flex justify="space-around">
        <Box>
          {props.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / Mês
          </Box>
        </Box>
        
        <Box display="flex" ml="2" mt="1">
        {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < props.rating ? 'purple.500' : 'gray.300'}
              />
            ))}
        </Box>
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.reviewCount} reviews
          </Box>
        </Flex>
        </Stack>
      </Box>
      {isCourseCardModalOpen && (
        <CourseCardModal
          title={props.title}
          description={props.description}
          closeCourseCardModal={closeCourseCardModal}
          imageAlt={props.imageAlt}
          imageUrl={props.imageUrl}
          rating={props.rating}
          price={props.formattedPrice}
          review={props.reviewCount}
        />
      )}
    </Box>

   
  )
}