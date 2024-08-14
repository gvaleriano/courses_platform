import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { CourseModal } from "../Sections/Courses/CourseModal";
import { useEffect, useState } from "react";
import { Pagination } from "../utils/Pagination";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";


/* Componente contendo administração dos cursos, 
/* nessa pagina foi necessario um tratamento de tabela para o mobile, 
/* era possivel colocar uma barra de rolagem nas linhas da tabela ao invés de esconder as colunas */
/* Funções para adicionar, editar, excluir e listar */
/* uso de contextos / uso de hooks */
/* Caminho ../components/Containers */
/* @author Guilherme Valeriano */
interface CourseProps {
  id: string
  authorId: string
  carrer: string
  courseDateLimit: Date
  courseType: string
  dateCreation: Date
  description: string
  level: string
  tecnology: string
  thumbCourse: string
  title: string
}

export function NewCourseContainer() {

  //Com a aplicação mais simples também deixei um contexto de troca de container pronto
  //const {changeContainer} = useContext(ChangeContainerContext) 
  const navigate = useNavigate()
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })
  //Estados do modal e das operações
  const [isCourseModalOpen, setisCourseModalOpen] = useState<boolean>(false)
  const [operation, setOperation] = useState<string>("")
  const [courseList, setCourseList] = useState<CourseProps[]>([])
  const [selectedCourse, setSelectedCourse] = useState<CourseProps>()

  useEffect(() => {
    const fetchData = () => api.get('/courses').then(function (response) {
      const newData = response.data.data;
      setCourseList(newData)
    })
    fetchData()
  }, [])
  //Funções de CRUD de cursos
  function openCourseModal() {
    setisCourseModalOpen(true)
    setOperation("Cadastrar")
  }

  function openEditCourseModal(id:string){
    setisCourseModalOpen(true)
    setOperation("Editar")
    const course = courseList.find((data) => data.id === id)
    setSelectedCourse(course)
  }

  function closeCourseModal() {
    setisCourseModalOpen(false)
    setOperation("")

    api.get('/courses').then(function (response) {
      const newData = response.data.data;
      setCourseList(newData)
    })
  }

  return (
    <Box>
      <Box flex={"1"} borderRadius={8} bg={"gray.800"} p={"8"}>
        <Flex mb={"8"} justify={"space-between"} align={"center"}>
          <Heading size={"lg"} fontWeight={"normal"}>Cursos</Heading>

          <Button
            as={"a"}
            size={"sm"}
            fontSize={"sm"}
            colorScheme="purple"
            leftIcon={<Icon as={RiAddLine} fontSize={"20"} />}
            cursor={"pointer"}
            onClick={() => openCourseModal()}
          >
            Novo Curso
          </Button>
        </Flex>
        <Table colorScheme="whiteAlpha">
          <Thead>
            <Tr>
              <Th px={["4", "4", "6"]} color={"gray.300"} width={"8"}>
                <Checkbox colorScheme="purple" />
              </Th>
              <Th>Curso</Th>
              {isWideVersion && <Th>Data de cadastro</Th>}
              <Th>Data limite do curso</Th>
              {isWideVersion && <Th>Tipo de curso</Th>}
              {isWideVersion && <Th>Nivel</Th>}
              {isWideVersion && <Th>Tecnologias</Th>}
              {isWideVersion && <Th>Carreira</Th>}
              {isWideVersion && <Th>Cadastrado por</Th>}
              {isWideVersion && <Th width={"8"}></Th>}
            </Tr>
          </Thead>
          {isWideVersion ? (
            <Tbody>
              {courseList.map((course:CourseProps) => {
                return (
                  <Tr key={course.id}>
                    <Td px={["4", "4", "6"]}>
                      <Checkbox colorScheme="purple" />
                    </Td>
                    <Td>
                      <Text noOfLines={3}>{course.title}</Text>
                    </Td>
                    {isWideVersion && <Td><Text>{format(course.dateCreation, "Pp", { locale: ptBR})}</Text></Td>}
                    <Td><Text>{format(course.courseDateLimit, "Pp", { locale: ptBR})}</Text></Td>
                    {isWideVersion && <Td><Text>{course.courseType}</Text></Td>}
                    {isWideVersion && <Td><Text noOfLines={3}>{course.level}</Text></Td>}
                    {isWideVersion && <Td><Text noOfLines={3}>{course.tecnology}</Text></Td>}
                    {isWideVersion && <Td><Text noOfLines={3}>{course.carrer}</Text></Td>}
                    {isWideVersion && <Td>
                      <Box>
                        <Text fontWeight={"bold"}>Guilherme Valeriano</Text>
                        <Text fontSize={"sm"} color={"gray.300"}>guilherme.hvaleriano@gmail.com</Text>
                      </Box>
                    </Td>}
                    <Td>
                      <Button
                        as={"a"}
                        size={"sm"}
                        fontSize={"sm"}
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize={"16"} />}
                        cursor={"pointer"}
                        onClick={() => openEditCourseModal(course.id)}
                      >
                        {isWideVersion ? 'Editar' : ''}
                      </Button>
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          ) : (
            <Tbody>
              {courseList.map((course:CourseProps) => {
                return(
                  <Tr key={course.id}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="purple" />
                  </Td>
                  <Td onClick={() => openEditCourseModal(course.id)}>
                    <Text noOfLines={3}>{course.title}</Text>
                  </Td>
                  {isWideVersion && <Td onClick={() => openEditCourseModal(course.id)}><Text>{format(course.dateCreation, "Pp",  { locale: ptBR})}</Text></Td>}
                  <Td onClick={() => openEditCourseModal(course.id)}><Text>{format(course.courseDateLimit , "Pp",  { locale: ptBR})}</Text></Td>
                  {isWideVersion && <Td><Text>{course.courseType}</Text></Td>}
                  {isWideVersion && <Td><Text noOfLines={3}>{course.level}</Text></Td>}
                  {isWideVersion && <Td><Text noOfLines={3}>{course.tecnology}</Text></Td>}
                  {isWideVersion && <Td><Text noOfLines={3}>{course.carrer}</Text></Td>}
                  {isWideVersion && <Td>
                    <Box>
                      <Text fontWeight={"bold"}>Guilherme Valeriano</Text>
                      <Text fontSize={"sm"} color={"gray.300"}>guilherme.hvaleriano@gmail.com</Text>
                    </Box>
                  </Td>}
                </Tr>
                )
              })}
            </Tbody>
          )}


        </Table>
        <Pagination />
        <Flex w={"100%"} align={"center"} justify={"center"} >
          <Button
            mt={"4"}
            as={"a"}
            onClick={() => navigate("/")}
            bg={"purple.500"}
            color={"gray.50"}
            _hover={{
              bg: "purple.600"
            }}
            cursor={"pointer"}
          >Voltar</Button>
        </Flex>
        {
          isCourseModalOpen && (
            <CourseModal op={operation} closeCourseModal={closeCourseModal} selectedCourse={selectedCourse}/>
          )
        }
      </Box >
    </Box>
  )
}