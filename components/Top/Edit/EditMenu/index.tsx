import React, { useState, useCallback } from 'react'
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
import { useSetEditUIState } from '../../../../lib/hooks/edit/ui'

type Position = {
  top?: React.CSSProperties['top']
  bottom?: React.CSSProperties['bottom']
  left?: React.CSSProperties['left']
  right?: React.CSSProperties['right']
}

export type Props = {
  thumb: React.ReactNode
  defaultPanel: React.ReactNode
  editPanel: React.ReactNode
  handleOnDownload: () => void
  handleOnCancel: () => void
}

export const EditMenu: React.FC<Props> = (props) => {
  const { cropRemove } = useSetEditUIState()
  const [menuPosition, setMenuPosition] = useState<Position>({
    right: '2em',
    bottom: '2em'
  })
  const [tabValue, setTabValue] = useState<number>(0)

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

  const handleTabChange = useCallback<NonNullable<TabsProps['onChange']>>((e, val) => {
    setTabValue(val)
  }, [])

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
            <Box hidden={tabValue !== 0} id="menu-tabpanel-0" aria-labelledby="menu-tab-0" sx={{ pt: 2, pr: 1, pl: 1 }}>
              {props.defaultPanel}
            </Box>
            <Box hidden={tabValue !== 1} id="menu-tabpanel-1" aria-labelledby="menu-tab-1" sx={{ pt: 2, pr: 1, pl: 1 }}>
              {props.editPanel}
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
