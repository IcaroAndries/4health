// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

import { uiComponents } from './components'
import { colors } from './nightColors'

// 2. Extend the theme to include custom colors, fonts, etc

export const mainTheme = extendTheme({ colors, components: uiComponents })
