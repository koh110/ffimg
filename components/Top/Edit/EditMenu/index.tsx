import React, { useState, useMemo, useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DownloadIcon from '@mui/icons-material/Download'
import Tabs, { TabsProps } from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { ArrowLeft, ArrowRight, ArrowDropUp, ArrowDropDown } from '@mui/icons-material'
import { COPYRIGHT_STR } from '../../../../lib/constants'
import { DefaultPanel, Props as  DefaultPanelProps } from './DefaultPanel'
import { EditPanel, Props as EditPanelProps } from './EditPanel'

type MenuType = 'crop' | 'copyright' | null
type StateType = {
  type: 'start' | 'done' | 'cancel'
}
type MenuHandler = (state: StateType, data?: any) => void
type Position = {
  top?: React.CSSProperties['top']
  bottom?: React.CSSProperties['bottom']
  left?: React.CSSProperties['left']
  right?: React.CSSProperties['right']
}

export type Props = {
  thumb: React.ReactNode
  scale: DefaultPanelProps['scale']
  rotate: DefaultPanelProps['rotate']
  copyrightFontSize: DefaultPanelProps['copyrightFontSize']
  copyrightColor: DefaultPanelProps['copyrightColor']
  handleScaleChange: DefaultPanelProps['handleScaleChange']
  handleRotateChange: DefaultPanelProps['handleRotateChange']
  handleOnCrop: MenuHandler
  handleOnCopyright: (checked: boolean, fontSize: number, color: string | fabric.Pattern | fabric.Gradient) => void
  handleOnDownload: () => void
  handleOnCancel: () => void
}

export const EditMenu: React.FC<Props> = (props) => {
  const [openMenu, setOpenMenu] = useState<MenuType>(null)
  const [onFlag, setOnFlag] = useState(false)
  const [checkedCopyright, setCheckedCopyright] = useState(false)
  const [menuPosition, setMenuPosition] = useState<Position>({
    right: '2em',
    bottom: '2em'
  })
  const [tabValue, setTabValue] = useState<number>(0)
  const handlers: Map<MenuType, MenuHandler> = useMemo(() => {
    return new Map([['crop', props.handleOnCrop]])
  }, [props.handleOnCrop])

  const callHandler = useCallback(
    (menu: MenuType, state: StateType) => {
      const handler = handlers.get(menu)
      if (handler) {
        handler(state)
      }
    },
    [handlers]
  )

  const handleOn = useCallback(
    (menu: MenuType) => {
      callHandler(menu, { type: 'start' })
      setOpenMenu(menu)
      setOnFlag(true)
    },
    [callHandler]
  )

  const handleDone = useCallback(
    (menu: MenuType) => {
      callHandler(menu, { type: 'done' })
      setOpenMenu(null)
      setOnFlag(false)
    },
    [callHandler]
  )

  const _handleRemove = useCallback(
    (menu: MenuType) => {
      if (!onFlag) {
        return
      }
      callHandler(menu, { type: 'cancel' })
      setOpenMenu(null)
      setOnFlag(false)
    },
    [callHandler, onFlag]
  )

  const handleRemove = useCallback(
    (menu: MenuType) => {
      _handleRemove(menu)
    },
    [_handleRemove]
  )

  const handleRotateChange = useCallback(
    (rotate: number) => {
      props.handleRotateChange(rotate)
      _handleRemove('crop')
    },
    [_handleRemove, props]
  )

  const handleOnCopyright = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      setCheckedCopyright(checked)
      props.handleOnCopyright(checked, props.copyrightFontSize, props.copyrightColor)
    },
    [props]
  )

  const handleOnSliderCopyright = useCallback(
    (val: number) => {
      props.handleOnCopyright(checkedCopyright, val, props.copyrightColor)
    },
    [checkedCopyright, props]
  )

  const handleOnChangeColorCopyright: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      props.handleOnCopyright(checkedCopyright, props.copyrightFontSize, e.currentTarget.value)
    },
    [checkedCopyright, props]
  )

  const move = useCallback(
    (arrow: 'left' | 'up' | 'down' | 'right') => {
      const newPos: Position = { ...menuPosition }

      switch (arrow) {
        case 'left': {
          newPos.left = '1em'
          delete newPos.right
          break
        }
        case 'right': {
          newPos.right = '1em'
          delete newPos.left
          break
        }
        case 'up': {
          newPos.top = '72px'
          delete newPos.bottom
          break
        }
        case 'down': {
          newPos.bottom = '1em'
          delete newPos.top
          break
        }
      }

      setMenuPosition(newPos)
    },
    [menuPosition]
  )

  const handleOnClopStart = useCallback(() => handleOn('crop'), [handleOn])
  const handleOnDone = useCallback(() => handleDone(openMenu), [handleDone, openMenu])
  const handleOnRemove = useCallback(() => handleRemove(openMenu), [handleRemove, openMenu])

  const handleTabChange: TabsProps['onChange'] = (e, val) => {
    setTabValue(val)
  }

  return (
    <Box
      sx={{
        ...menuPosition,
        position: 'absolute',
        minWidth: '400px'
      }}
    >
      <Paper elevation={4} sx={{ p: 2, borderRadius: '16px' }}>
        {props.thumb}
        <Stack spacing={2} divider={<Divider flexItem />}>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => move('left')}>
                <ArrowLeft />
              </IconButton>
              <IconButton onClick={() => move('up')}>
                <ArrowDropUp />
              </IconButton>
              <IconButton onClick={() => move('down')}>
                <ArrowDropDown />
              </IconButton>
              <IconButton onClick={() => move('right')}>
                <ArrowRight />
              </IconButton>
            </Stack>
            <Stack direction="row" spacing={1}>
              <Button variant="outlined" onClick={props.handleOnDownload} startIcon={<DownloadIcon />}>
                ダウンロード
              </Button>
              <Button variant="outlined" onClick={props.handleOnCancel} startIcon={<ArrowBackIosIcon />}>
                戻る
              </Button>
            </Stack>
          </Stack>
          <Stack>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
                <Tab label="表示" id="menu-tab-0" aria-controls="menu-tabpanel-0" />
                <Tab label="編集" id="menu-tab-1" aria-controls="menu-tabpanel-1" />
              </Tabs>
            </Box>
            <Box
              hidden={tabValue !== 0}
              id="menu-tabpanel-0"
              aria-labelledby="menu-tab-0"
              sx={{ pt: 1, pr: 1, pl: 1 }}
            >
              <DefaultPanel
                scale={props.scale}
                rotate={props.rotate}
                copyrightColor={props.copyrightColor}
                copyrightFontSize={props.copyrightFontSize}
                checkedCopyright={checkedCopyright}
                onFlag={onFlag}
                handleScaleChange={props.handleScaleChange}
                handleRotateChange={handleRotateChange}
                handleOnCopyright={handleOnCopyright}
                handleOnChangeColorCopyright={handleOnChangeColorCopyright}
                handleOnSliderCopyright={handleOnSliderCopyright}
                handleOnClopStart={handleOnClopStart}
                handleOnDone={handleOnDone}
                handleOnRemove={handleOnRemove}
              />
            </Box>
            <Box
              hidden={tabValue !== 1}
              id="menu-tabpanel-1"
              aria-labelledby="menu-tab-1"
              sx={{ pt: 1, pr: 1, pl: 1 }}
            >
              <EditPanel
                onFlag={onFlag}
                handleOnClopStart={handleOnClopStart}
                handleOnDone={handleOnDone}
                handleOnRemove={handleOnRemove}
              />
            </Box>
          </Stack>
          <Stack>
            <footer style={{ fontSize: '0.7em' }}>{COPYRIGHT_STR}</footer>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}
