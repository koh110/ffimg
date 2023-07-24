import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { HideOnScroll } from './HideOnScroll'

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
