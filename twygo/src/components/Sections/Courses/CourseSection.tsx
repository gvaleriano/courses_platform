import { Flex, Stack, Text } from "@chakra-ui/react";
import { CourseComplete } from "./CourseComplete";

/* Lista de cursos da plataforma */
/* Componente com a lista de cursos existentes na plataforma, 
/* é possivel utilizar a paginação do /utils/Pagination ao crescer a lista */
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

export function CourseSection({courses}:CourseData){
  return(
    <Stack spacing={"4"}>
        <Flex mt={"4"}>
          <Stack>
            <Text fontSize={"lg"} color={"gray.50"} fontWeight={"semibold"}>Formações</Text>
          </Stack>
        </Flex>
        <Flex flexDir={"column"}>
          <Stack spacing={"24px"}>
           {courses.map((course:CoursePropsData) => {
            return(
              <CourseComplete
              key={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.thumbCourse}
              imageAlt={course.title}
              formattedPrice="R$310.00 "
              reviewCount={40}
              rating={5}
            />
            )
           })}
          </Stack>
        </Flex>
      </Stack>
  )
}