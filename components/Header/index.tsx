import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { HideOnScroll } from '../HideOnScroll'

import Logo from './logo'

export const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar>
          <Toolbar sx={{ display: 'flex', justifyContent: 'center', color: "#fff" }}>
            <Logo />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}
