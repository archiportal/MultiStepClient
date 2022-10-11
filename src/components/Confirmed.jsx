import React from 'react'
import { Typography , Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Confirmed({setPage}) {
  const clicked = () => {
    setPage(0);
  }
  const typoSx = {
    marginTop : "5rem",
    marginBottom : "2rem",
  }
  const buttonSx = {
    left : "14rem",
  }
  return (
    <>
    <Typography variant='h5' align='center' sx={typoSx}>
      Your submission was successful. Thank you. 
      <CheckCircleOutlineIcon />
    </Typography>
    <Button variant="contained" size='large' sx={buttonSx} onClick={clicked}>BACK</Button>
    </>
  )
}

export default Confirmed