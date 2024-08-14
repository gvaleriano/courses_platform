import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box, Image } from "@chakra-ui/react"

/* Componente de card para ultimos cursos lançados */
/* Uso de props tipadas */
/* Caminho ../components/Sections/Courses */
/* @author Guilherme Valeriano */

interface CardProps {
    imageUrl: string,
    imageAlt: string,
    title: string,
    formattedPrice: string,
    reviewCount: number,
    rating: number,
}

export function CourseCard({...props}: CardProps) {

  return (
    <Box 
      maxW='lg' 
      borderWidth='1px' 
      borderRadius='lg' 
      overflow='hidden' 
      borderColor="purple.500" 
      w={["100%", "100%", "100%","290px"]}
    >
      <Box w={["100%", "100%", "100%","290px"]}>
        <Image src={props.imageUrl} alt={props.imageAlt} w="100%"  h="36" objectFit={"cover"}/>
      </Box>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='purple'>
            New
          </Badge>
          <Box
            color='purple.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
          {props.title}
        </Box>

        <Box>
          {props.formattedPrice}
          <Box as='span' color='gray.600' fontSize='sm'>
            / Vitalício
          </Box>
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          { // Array utilizado para preencher o rating do card
            Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < props.rating ? 'purple.500' : 'gray.300'}
              />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {props.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}