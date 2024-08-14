import {Button, Flex } from "@chakra-ui/react";

import { CourseCardContainer } from "../../Containers/CourseCardContainer";
import { TermsOfUser } from "../../Containers/TermsOfUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

/* Componente de Modal para exibir detalhes dos cursos, 
/* é possivel adicionar estados de controle para sessão validando cursos adquiridos */
/* Uso de props tipadas / Uso de estados / Uso de contextos/ Uso de hooks */
/* Caminho ../components/Sections/Courses */
/* @author Guilherme Valeriano */



interface CourseCardProps {
  closeCourseCardModal: () => void;
  title: string
  description: string
  price: string
  rating: number
  imageUrl: string
  imageAlt: string
  review: number
}

export function CourseCardModal({
  title,
  description,
  rating,
  imageAlt,
  imageUrl,
  price,
  review,
  closeCourseCardModal,
}: CourseCardProps) {

  //Com a aplicação mais simples sem react-router também deixei um contexto de troca de container pronto
  //const {changeContainer} = useContext(ChangeContainerContext)
 
 //Estados de termos de serviço
  const [showTermsOfUser, setShowTermsOfUser] = useState<boolean>(false)
  const [checkTerms, setCheckTerms] = useState<boolean>(false)

  //Hook de navegação
  const navigate = useNavigate()

  //Função de controle para os termos de uso
  function toggleCheckTerms(){
    if(!checkTerms && showTermsOfUser){
      setCheckTerms(true)
      return
    }else{
      setCheckTerms(false)
      return
    }
  }

  function verifyTermsOfUseAndAccess(){
    if(!checkTerms && !showTermsOfUser){
      setShowTermsOfUser(true)
      return
    }
    
    if(!checkTerms && showTermsOfUser){
      console.log("Voce deve aceitar os termos para continuar")
      return
    }
    setCheckTerms(true)
    navigate("/videos")
    closeCourseCardModal()
  }

  return (
    <Flex
      position={"fixed"}
      inset={"0"}
      bg={"blackAlpha.700"}
      align={"center"}
      justify={"center"}
    >
      <Flex flexDir={"column"}>
        {showTermsOfUser ? (
          <TermsOfUser 
            checkTerms={checkTerms} 
            toggleCheckTerms={toggleCheckTerms} 
            closeCourseCardModal={closeCourseCardModal}
          />
        ) : (
          <CourseCardContainer 
          closeCourseCardModal={closeCourseCardModal}
          title={title}
          description={description}
          rating={rating}
          review={review}
          imageUrl={imageUrl} 
          imageAlt={imageAlt}
          price={price}
        />
        )}
         <Button colorScheme="purple" onClick={verifyTermsOfUseAndAccess}>
            Acessar
          </Button>
          </Flex>
    </Flex>
  )
}