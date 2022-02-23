import React, { useState, useMemo, useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import CopyrightIcon from '@mui/icons-material/Copyright'
import DeleteIcon from '@mui/icons-material/Delete'
import MuiInput from '@mui/material/Input'
import Switch from '@mui/material/Switch'
import Button from '@mui/material/Button'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DownloadIcon from '@mui/icons-material/Download'
import { ArrowLeft, ArrowRight, ArrowDropUp, ArrowDropDown } from '@mui/icons-material'
import { Slider } from './Slider'

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
  dataUrl: string
  scale: number
  rotate: number
  copyright: {
    fontSize: number
    color: string | fabric.Pattern | fabric.Gradient
  }
  handleScaleChange: (scale: number) => void
  handleRotateChange: (rotate: number) => void
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
      props.handleOnCopyright(checked, props.copyright.fontSize, props.copyright.color)
    },
    [props]
  )

  const handleOnSliderCopyright = useCallback(
    (val: number) => {
      props.handleOnCopyright(checkedCopyright, val, props.copyright.color)
    },
    [checkedCopyright, props]
  )

  const handleOnChangeColorCopyright: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      props.handleOnCopyright(checkedCopyright, props.copyright.fontSize, e.currentTarget.value)
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

  return (
    <Box
      sx={{
        ...menuPosition,
        position: 'absolute',
        minWidth: '400px'
      }}
    >
      <Paper elevation={4} sx={{ p: 2, borderRadius: '16px' }}>
        <img src={props.dataUrl} style={{ maxWidth: '400px', maxHeight: '200px' }} />
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
          <Slider
            title="拡大/縮小"
            value={props.scale}
            min={1}
            max={100}
            sliderStep={10}
            step={1}
            handleSliderChange={props.handleScaleChange}
          />
          <Slider
            title="回転"
            value={props.rotate}
            min={-180}
            max={180}
            sliderStep={10}
            step={1}
            handleSliderChange={handleRotateChange}
          />
          <Box>
            <Stack direction="row" alignItems="center" spacing={2}>
              <CopyrightIcon />
              <Switch onChange={handleOnCopyright} />
              <MuiInput
                disabled={!checkedCopyright}
                type="color"
                sx={{ width: '2em' }}
                value={props.copyright.color}
                onChange={handleOnChangeColorCopyright}
              />
            </Stack>
            <Slider
              disabled={!checkedCopyright}
              value={props.copyright.fontSize}
              min={0}
              max={50}
              sliderStep={1}
              step={1}
              handleSliderChange={handleOnSliderCopyright}
            />
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => handleOn('crop')}>
              <CropIcon />
            </IconButton>
            {onFlag && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => handleDone(openMenu)}
              >
                <DoneIcon />
              </IconButton>
            )}
            {onFlag && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={() => handleRemove(openMenu)}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  )
}
