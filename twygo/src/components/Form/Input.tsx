import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";


/* Componente de Input personalizado */
/* uso de props com herança do input original */
/* Caminho ../components/Form */
/* @author Guilherme Valeriano */

interface InputProps extends ChakraInputProps{
  name: string
  label?: string
}

export function Input({name, label, ...rest}: InputProps){
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="purple.500"
        bg={"gray.800"}
        variant={"filled"}
        _hover={{
          bg: "gray.800"
        }}
        {...rest}
      />
    </FormControl>
  )
}