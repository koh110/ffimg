import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'

export const HideOnScroll: React.FC<{
  children: Parameters<typeof Slide>[0]['children']
}> = (props) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {props.children}
    </Slide>
  )
}
