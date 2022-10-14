import React from 'react';
import {TextField, Typography, Grid, Button, Box} from '@mui/material';
import styles from '../styles/Form1.module.css';

function ShowPage({decPage,data,postForm}) {
  const typoSx = {
    margin: '0.1em',
    color:'#628E90',
}
const fldSx2 ={
  margin : '1rem',
  width : '100%',
  right:'1rem'
}
const fldSx ={
  margin : '1rem',
  width : '100%',
}
const btnSx={
  bgcolor:'#54BAB9',
  '&:hover':{
      bgcolor:'#97D2EC',
  },
  marginTop : '1rem',
}
  return (
    <form className={styles.formLayout}>
      <Typography variant='h6' sx={typoSx}>
        CONFIRMATION PAGE      
      </Typography>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="FIRST NAME" value={data.FirstName} size='small' sx={fldSx2}/>
      </Grid>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="LAST NAME" value={data.LastName} size='small' sx={fldSx2}/>
      </Grid>
      </Grid>
      <TextField disabled d="outlined-disabled" label="ADDRESS" value={data.Address} size='small' sx={fldSx}/>
      <TextField disabled d="outlined-disabled" label="E-MAIL" value={data.Email} size='small' sx={fldSx}/>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="MOBILE" value={data.Mobile} size='small' sx={fldSx2}/>
      </Grid>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="NATIONALITY" value={data.Nation} size='small' sx={fldSx2}/>
      </Grid>
      </Grid>
      <TextField disabled d="outlined-disabled" label="INSTITUTION" value={data.Institution} size='small' sx={fldSx}/>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="COURSE" value={data.Course} size='small' sx={fldSx2}/>
      </Grid>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="STREAM" value={data.Stream} size='small' sx={fldSx2}/>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="START DATE" value={data.StartDate} size='small' sx={fldSx2}/>
      </Grid>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="END DATE" value={data.EndDate} size='small' sx={fldSx2}/>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="CGPA" value={data.Cgpa} size='small' sx={fldSx2}/>
      </Grid>
      <Grid item xs={6}>
      <TextField disabled d="outlined-disabled" label="PERCENTAGE" value={data.Percent} size='small' sx={fldSx2}/>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-start">
        <Button variant="contained" size='medium' sx={btnSx} onClick={decPage}>PREVIOUS</Button>
        </Box>
        </Grid>
        <Grid item xs={6}>
        <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" size='medium' sx={btnSx} onClick={postForm}>SUBMIT</Button>
        </Box>
        </Grid>
      </Grid>
    </form>
  )
}

export default ShowPage