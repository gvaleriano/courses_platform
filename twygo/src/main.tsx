import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/app.css'
import { theme } from "./styles/theme.ts"

import { ChakraProvider } from "@chakra-ui/react"
import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext.tsx"
import { ChangeContainerProvider } from "./contexts/ChangeContainerContext.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ChangeContainerProvider>
        <SidebarDrawerProvider>
          <App />
        </SidebarDrawerProvider>
      </ChangeContainerProvider>
    </ChakraProvider>
  </StrictMode>,
)
