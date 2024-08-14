import { Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CourseCard } from "./CourseCard";

/* Carrossel de cursos */
/* Componente de ultimos cursos adicionados a plataforma */
/* Caminho ../components/Sections/Courses */
/* @author Guilherme Valeriano */

interface CoursePropsData {
  title: string
  description: string
  thumbCourse: string
  id: string
}

type CourseData = {
courses: CoursePropsData[]
}

export function CarrousselCourses({courses}:CourseData){
  
  return(
    <Stack spacing={"24px"} w={"100%"}>
        <Flex>
          <Stack>
            <Text fontSize={"lg"} color={"gray.50"} fontWeight={"semibold"}>Últimos Lançamentos</Text>
            <Text as="span" fontSize={"small"} color={"gray.100"}>Ver todos</Text>
          </Stack>
        </Flex>
        <SimpleGrid 
          gap={"2"} 
          minChildWidth={"280px"} 
          flexDir={["column", "row"]} 
          alignItems={"center"} 
          justifyItems={"center"}
        >
          {courses.map((course:CoursePropsData) => {
            return(
              <CourseCard
              key={course.id}
              title={course.title}
              imageUrl={course.thumbCourse}
              imageAlt={course.title}
              formattedPrice="R$2,000.00 "
              reviewCount={50}
              rating={5}
              />
            )
          })}
        </SimpleGrid>
      </Stack>
  )
}