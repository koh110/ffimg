import NextHead from 'next/head'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { HideOnScroll } from './HideOnScroll'

export const Head = () => {
  return (
    <NextHead>
      <title>FF Image Clip</title>
      <meta name="description" content="ff14のスクリーンショットをお手軽に加工するためのWebサービス" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" sizes="any" />
    </NextHead>
  )
}

export const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h5" component="div">
              FF Image Clip
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
