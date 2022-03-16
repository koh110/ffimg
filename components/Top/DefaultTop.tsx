import React from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import EditIcon from '@mui/icons-material/Edit'
import { Head, Header } from '../Header'
import { Upload, Props as UploadProps } from './Upload'
import { Dropper } from './Dropper'
import { COPYRIGHT_STR } from '../../lib/constants'

export type Props = {
  file: string | undefined
  onLoadFile: UploadProps['onLoadFile']
  onEdit: React.MouseEventHandler<HTMLButtonElement>
}

export const DefaultTop: React.FC<Props> = (props) => {
  return (
    <>
      <Head />
      <main>
        <Header />
        <Container sx={{ my: 2 }}>
          <Card>
            <CardContent>
              {props.file && <img src={props.file} style={{ maxWidth: '100%' }} />}
              {!props.file && <Dropper onLoadFile={props.onLoadFile} />}
              <CardActions>
                <Upload onLoadFile={props.onLoadFile} />
                {props.file && (
                  <Button variant="contained" onClick={props.onEdit} endIcon={<EditIcon />}>
                    編集
                  </Button>
                )}
              </CardActions>
            </CardContent>
          </Card>
        </Container>
        <footer style={{ padding: '0 1em' }}>{COPYRIGHT_STR}</footer>
      </main>
    </>
  )
}
