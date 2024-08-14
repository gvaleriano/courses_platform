import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { X } from "lucide-react";
import { Input } from "../../Form/Input";
import { Select } from "../../Form/Select";
import { Textarea } from "../../Form/Textarea";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ptBR } from "date-fns/locale";
import { useState, FormEvent, useEffect} from "react";
import { api } from "../../../services/api";


/* Componente de Modal para cadastro, edição do curso */
/* Uso de props tipadas  */
/* Caminho ../components/Sections/Courses */
/* @author Guilherme Valeriano */

/**
 * as operações estão sem alerta de concluido
 */

interface CourseData {
  id: string
  authorId: string
  carrer: string
  courseDateLimit: Date | undefined
  courseType: string
  dateCreation: Date
  description: string
  level: string
  tecnology: string
  thumbCourse: string
  title: string
}

interface CourseProps {
  closeCourseModal: () => void;
  op: string
  selectedCourse?: CourseData | undefined
}

export function CourseModal({ closeCourseModal, op, selectedCourse }: CourseProps) {
  /* TODO multiselect
    const techOptions = [
      { value: "react", label: "React", color: "#5243AA" },
      { value: "node", label: "NodeJs", color: "#5243AA" },
      { value: "awn", label: "AWS", color: "#5243AA" },
      { value: "Angular", label: "Angular", color: "#5243AA" },
      { value: "mongodb", label: "MongoDB", color: "#5243AA" }
    ];*/
  const [limitDate, setLimitDate] = useState<Date | undefined>()
  const [formData, setFormData] = useState({
      id: "",
      authorId: "",
      title: "",
      description:"",
      courseDateLimit: limitDate,
      courseType: "",
      level: "",
      tecnology: "",
      carrer: "",
      dateCreation: new Date(),
      thumbCourse: ""
  })
  //const [courseName, setCourseName] = useState("")

  //Vou fazer uma criação bem simples, o mais correto seria trabalhar com um reducer utilizando os estados do formulario
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault()

    const inputCourse = {
      title: event.currentTarget.courseName.value,
      description: event.currentTarget.description.value,
      dateCreation: new Date(Date.now()).toISOString(),
      courseDateLimit: op === 'Cadastrar' ? limitDate?.toISOString() : limitDate,
      courseType: event.currentTarget.courseType.value,
      level: event.currentTarget.level.value,
      tecnology: [event.currentTarget.technology.value],
      carrer: [event.currentTarget.carrer.value],
      authorId: "66bbbc7303fd335e557f0b4e", // Adicionado apenas para fins de desenvolvimento
      thumbCourse: "https://img-b.udemycdn.com/course/750x422/4160208_71be_5.jpg" // Adicionado apenas para fins de desenvolvimento
    }

    if(op === 'Cadastrar'){
       api.post('/courses', inputCourse).then(function (response){
        console.log(response)
        if(response.status === 200){
          closeCourseModal()
        }
       });
    }

    if( op === 'Editar'){
      api.put(`/courses/${formData.id}`, inputCourse).then(function (response){
        console.log(response)
        if(response.status === 200){
          closeCourseModal()
        }
       });
    }
    
    
  }

  //Função de remover --> seria bom ter uma confirmação se deseja remover
  function handleRemoveCourse(){
    api.delete(`/courses/${formData.id}`).then(function (response){
      console.log(response)
      if(response.status === 200){
        closeCourseModal()
      }
     });
  }
  useEffect(() => {
    if(selectedCourse){
      setFormData({
        id: selectedCourse.id,
        authorId: selectedCourse.authorId,
        title: selectedCourse.title,
        description: selectedCourse.description,
        courseDateLimit: selectedCourse.courseDateLimit,
        courseType: selectedCourse.courseType,
        level: selectedCourse.level,
        tecnology: selectedCourse.tecnology,
        carrer: selectedCourse.carrer,
        dateCreation: selectedCourse.dateCreation,
        thumbCourse: selectedCourse.thumbCourse
      })
      setLimitDate(selectedCourse.courseDateLimit)
    }
    
  }, [selectedCourse])
  return (
    <Flex
      position={"fixed"}
      inset={"0"}
      bg={"blackAlpha.700"}
      align={"center"}
      justify={"center"}
    >
      <Box
        w={["340px", "340px", "640px"]} rounded={"xl"} py={"5"} px={"6"} bg={"gray.900"}
      >
        <form onSubmit={handleSubmit}>
        <Stack spacing={"8px"}>
          <Flex align={"center"} justify={"space-between"}>
            <Heading
              size={"lg"}
              fontWeight={"normal"}
              color={"gray.50"}
            >
              {op} curso
              { op === 'Editar' && (
                 <Button type="button" colorScheme="purple" ml={"16"} onClick={handleRemoveCourse}>
                  Remover curso
                </Button>
              ) }
              
            </Heading>
            <Button bg={"transparent"} color={"white"} _hover={{bg: "transparent"}} type="button" onClick={closeCourseModal}>
              <X fontSize={"5"}/>
            </Button>
          </Flex>

        </Stack>
        <Divider my={"6"} borderColor={"gray.700"}></Divider>

        <VStack spacing={"8"}>
          
          <SimpleGrid minChildWidth={"240px"} spacing={"8"} w={"100%"}>
            <Input 
              name="courseName"
              label="Nome do curso" 
              value={formData.title} 
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            <Select 
              name="courseType" 
              label="Selecione o tipo do curso" 
              options={["Selecione", "Formações", "Bootcamps", "Cursos Rápidos", "Mentorias"]}
              value={formData.courseType}
              onChange={(e) => setFormData({...formData, courseType: e.target.value})} 
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth={"240px"} spacing={"8"} w={"100%"}>
            <Select 
              name="level" 
              label="Nivel" 
              options={["Selecione", "Iniciante", "Junior", "Pleno", "Senior"]} 
              value={formData.level}
              onChange={(e) => setFormData({...formData, level: e.target.value})} 
            />
            {/*Poderia ser um multi select, mas tem apenas bibliotecas de terceiros e isso iria demandar um pouco a mais de tempo para desenvolver*/}
            <Input 
              name="technology" 
              label="Tecnologias" 
              value={formData.tecnology}
              onChange={(e) => setFormData({...formData, tecnology: e.target.value})} 
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth={"240px"} spacing={"8"} w={"100%"}>
            {/*Poderia ser um multi select, mas tem apenas bibliotecas de terceiros e isso iria demandar um pouco a mais de tempo para desenvolver*/}
            <Input
              name="carrer" 
              label="Carreiras" 
              value={formData.carrer}
              onChange={(e) => setFormData({...formData, carrer: e.target.value})}   
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth={"240px"} spacing={"8"} w={"100%"}>
            <Flex flexDir={"column"} align={"center"} justify={"center"} bg={"purple.900"} rounded={"lg"}>
              <Text pt="2">Selecione a data limite do curso:</Text>
              <DayPicker locale={ptBR} mode="single" selected={limitDate} onSelect={setLimitDate}/>
            </Flex>
          </SimpleGrid>
          <SimpleGrid minChildWidth={"240px"} spacing={"8"} w={"100%"}>
            <Textarea 
              name="description" 
              placeholder="Digite a descrição" 
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})} 
              />
          </SimpleGrid>
        </VStack>
        <Flex mt={"8"} justify={"center"}>
          <HStack spacing={"4"}>
            <Button type="submit" colorScheme="purple">
              { op }
            </Button>
            <Button colorScheme="whiteAlpha" onClick={closeCourseModal}>
              Cancelar
            </Button>

          </HStack>
        </Flex>
        </form>
      </Box>
    </Flex>
  )
}