// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
import { colors } from './colors'

export const mainTheme = extendTheme({ colors })
