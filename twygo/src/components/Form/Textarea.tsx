import { FormControl, FormLabel, Textarea as ChakraTextarea, TextareaProps as ChakraTextAreaProps } from "@chakra-ui/react";


/* Componente de Input personalizado */
/* uso de props com herança do input original */
/* Caminho ../components/Form */
/* @author Guilherme Valeriano */

interface TextareaProps extends ChakraTextAreaProps{
  name: string
  label?: string
  placeholder?: string
}

export function Textarea({name, label, ...rest}: TextareaProps){
  return(
    <FormControl>
      { !!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraTextarea
        resize={"none"}
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