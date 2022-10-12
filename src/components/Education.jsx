import React from 'react';
import {TextField , Typography, Grid, Button, Box} from '@mui/material';
import styles from '../styles/Form1.module.css';

function Education({decPage,data,setData,incPage}) {
    const fldSx ={
        margin : '1rem',
        width : '100%',
    }

    const fldSx2 ={
        margin : '1rem',
        width : '100%',
        right:'1rem'
    }
    const typoSx = {
        margin: '0.5rem',
        color:'#628E90',
    }

      const btnSx={
        bgcolor:'#54BAB9',
        '&:hover':{
            bgcolor:'#97D2EC',
        },
        marginTop : '1rem',
      }
      const onClick=()=>{
        incPage();
      }
  return (
    <form className={styles.formLayout}>
        <Typography variant='h4' sx={typoSx}>
            EDUCATION DETAILS
        </Typography>
        <TextField type='text' id="outlined-basic" label="Institution Name*" variant="outlined" sx={fldSx} 
        value={data.Institution} onChange={(e)=>setData({...data, Institution:e.target.value})}/>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Course*" variant="outlined" sx={fldSx2}
        value={data.Course} onChange={(e)=>setData({...data, Course:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Stream*" variant="outlined" sx={fldSx2} 
        value={data.Stream} onChange={(e)=>setData({...data, Stream:e.target.value})}/>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Start Date (mm/yyyy)*" variant="outlined" sx={fldSx2} 
        value={data.StartDate} onChange={(e)=>setData({...data, StartDate:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="End Date (mm/yyyy)" variant="outlined" sx={fldSx2} 
        value={data.EndDate} onChange={(e)=>setData({...data, EndDate:e.target.value})}/>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="CGPA*" variant="outlined" sx={fldSx2} 
        value={data.Cgpa} onChange={(e)=>setData({...data, Cgpa:e.target.value})}/>
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Percentage*" variant="outlined" sx={fldSx2} 
        value={data.Percent} onChange={(e)=>setData({...data, Percent:e.target.value})}/>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-start">
        <Button variant="contained" size='large' sx={btnSx} align='left' onClick={decPage}>PREVIOUS</Button>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" size='large' sx={btnSx} align='right' onClick={onClick}>NEXT</Button>
        </Box>
        </Grid>
        </Grid>
    </form>
  )
}

export default Education