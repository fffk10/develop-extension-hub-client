'use client'

import { extendConfig, createColorModeManager } from '@yamada-ui/react'

export const customConfig = extendConfig({
  initialColorMode: 'system',
})

export const colorModeManager = createColorModeManager('cookie')
