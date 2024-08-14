import { Flex} from "@chakra-ui/react";
import { CarrousselCourses } from "../Sections/Courses/CarrousselCourses";
import { CourseSection } from "../Sections/Courses/CourseSection";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { differenceInDays} from "date-fns";

/* Container de cursos contendo carrossel de últimos cursos adicionados e lista de cursos */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */
// Poderia criar um contexto para trabalhar com a requisição de cursos,
// mas vou deixar diretamente na pagina e trabalhar com props
interface CourseProps {
  id: string
  authorId: string
  carrer: string
  courseDateLimit: Date
  courseType: string
  dateCreation: Date
  description: string
  level: string
  technology: string
  thumbCourse: string
  title:string
}
export function CoursesPageContainer() {
  const [courseList, setCourseList] = useState<CourseProps[]>([])
  const [validCourses, setValidCourses] = useState<CourseProps[]>([])
  const [carrousselCourses, setCarrousselCourses] = useState<CourseProps[]>([])

  //Busca dados de todos os cursos, na api coloquei uma paginação de 10 em 10 cursos com skip
  useEffect(() => {
    const fetchData = () => api.get('/courses').then(function(response){
      const newData = response.data.data;
      setCourseList(newData) 
    })
    fetchData()
  }, [])

  // Filtra cursos com base na data de término para a data atual e seleciona apenas os que tem a data de término maior que a atual
  // Seleciona cursos do carrossel
  useEffect(() => {
    function selectCoursesAndDivideInSections(){
      setValidCourses([])
      courseList.map((course:CourseProps) => {
        if(differenceInDays(course.courseDateLimit, Date.now()) > 0){
          setValidCourses((prevState) => [...prevState, course])
        }
      })
    }
    selectCoursesAndDivideInSections()
  }, [courseList])

  
  useEffect(() => {
    const sortedCourses = validCourses.sort((a, b) => {return (a.dateCreation < b.dateCreation) ? 1 : ((a.dateCreation > b.dateCreation) ? -1 : 0)})
    setCarrousselCourses(sortedCourses.slice(0,3))
    }, [validCourses])

  return (
    <Flex flex={"1"} flexDir={"column"}>
      <CarrousselCourses courses={carrousselCourses}/>
      <CourseSection courses={validCourses}/>
    </Flex>
  )
}