import React from 'react'
import { Typography , Button} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Confirmed({setPage}) {
  const clicked = () => {
    setPage(0);
  }
  const typoSx = {
    marginBottom : "1rem",
  }
  const btnSx={
    bgcolor:'#54BAB9',
    '&:hover':{
        bgcolor:'#97D2EC',
    },
    marginTop : '1rem',
}
  return (
    <>
    <Typography variant='h5' align='center' sx={typoSx} fontFamily='Segoe UI'>
      Your submission was successful. Thank you. 
    <CheckCircleOutlineIcon />
    </Typography>
    <Button variant="contained" size='large' sx={btnSx} onClick={clicked}>BACK</Button>
    </>
  )
}

export default Confirmed