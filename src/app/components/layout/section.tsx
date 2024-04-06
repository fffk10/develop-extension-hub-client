import { Box } from '@yamada-ui/react'
import React from 'react'

type SectionProps = {
  children: React.ReactNode
}

export default function Section({ children }: SectionProps) {
  return (
    <Box as='section' py={8}>
      {children}
    </Box>
  )
}
