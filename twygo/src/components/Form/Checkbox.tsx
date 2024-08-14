/* Componente para alterar as style props do Checkbox para Chakra UI */
/* Caminho ../components/Form */
/* @author Guilherme Valeriano */

import { checkboxAnatomy as parts } from "@chakra-ui/anatomy"
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system"

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

// Defining a custom variant
const variantCircular = definePartsStyle({
  control: defineStyle({
    rounded: "full"
  })
})

const variants = {
  circular: variantCircular,
}

export const checkboxTheme = defineMultiStyleConfig({
  variants,
})