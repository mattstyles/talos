
import {ThemeProvider} from 'styled-components'

import {theme} from '../src'

export const Base = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)
