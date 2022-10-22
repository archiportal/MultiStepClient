import {React} from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../styles/Container.module.css';

function Records({formData}) {
  const boxSx = {
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection : 'column',
    alignItems:'center',
    justifyContents:'center',
  }

  return (
    <Box sx={boxSx} >
      <Typography variant='h2' fontFamily='Segoe UI' color='#628E90' margin='1rem'>
        RECORDS
      </Typography>
      {formData.map((user)=>{
        return(
        <div key={user._id}>
          <div className={styles.divInside}>
          <Box display="flex" justifyContent="center" className={styles.divText}>
          <h2>Name : {user.FirstName} {user.LastName}</h2>
          </Box>
          <Box display="flex" justifyContent="center" className={styles.divButton}>
          <Button variant="contained" size='small' sx={{ bgcolor:'#54BAB9',
        '&:hover':{
          bgcolor:'#81CACF',
        }}}>
            View
          </Button>
          </Box>
          </div>
        </div>
        )})}
    </Box>
  )
}

export default Records