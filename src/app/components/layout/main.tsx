import { Box } from '@yamada-ui/react'

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <Box as='main' minH='90vh' px={8}>
      {children}
    </Box>
  )
}
