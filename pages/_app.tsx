import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
