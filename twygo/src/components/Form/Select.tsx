import { FormControl, FormLabel, Select as ChakraSelect, SelectProps as ChakraSelectProps } from "@chakra-ui/react";

/* Componente de Select personalizado */
/* uso de props com herança do select original */
/* Caminho ../components/Form */
/* @author Guilherme Valeriano */

interface SelectProps extends ChakraSelectProps{
  name: string
  label?: string
  options: string[]
}

export function Select({label, name, options, ...rest}:SelectProps){
  return(
    <FormControl>
    { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
    <ChakraSelect 
       name={name}
       id={name}
       focusBorderColor="purple.500"
       bg={"gray.800"}
       variant={"filled"}
       _hover={{
         bg: "gray.800"
       }}
       {...rest}
      >
      {
        options.map((option, index) => {
          return(
            <option key={index} style={{
              background: "#181b23",
              color: "white"
            }}
            value={option}
            >{option}</option>
          )
        })
      }
    </ChakraSelect>

  </FormControl>
  )
}