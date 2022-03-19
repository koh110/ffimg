import '../styles/globals.css'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { RecoilRoot } from 'recoil'

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const GA = () => {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-HJ07ZDPPH1"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HJ07ZDPPH1');`
        }}
      ></script>
    </>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Component {...pageProps} />
        <GA />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
