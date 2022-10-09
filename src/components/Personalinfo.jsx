import React from 'react';
import {TextField , Typography, Grid, Button } from '@mui/material';
import styles from '../styles/Form1.module.css';

function Personalinfo({incPage, data, setData}) {
    const onClick=()=>{
        incPage();
    }
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
        left:'14rem',
        marginTop : '1rem',
    }

  return (
    <form className={styles.formLayout}>
        <Typography variant='h4' sx={typoSx}>
            PERSONAL INFORMATION
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="First Name*" variant="outlined" sx={fldSx2}
        value={data.FirstName} onChange={(e)=>setData({...data, FirstName:e.target.value})} />
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Last Name*" variant="outlined" sx={fldSx2} 
        value={data.LastName} onChange={(e)=>setData({...data, LastName:e.target.value})}/>
        </Grid>
        </Grid>
        <TextField type='text' id="outlined-basic" label="Address*" variant="outlined" sx={fldSx}
        value={data.Address} onChange={(e)=>setData({...data, Address:e.target.value})}/>
        <TextField type='text' id="outlined-basic" label="E-mail*" variant="outlined" sx={fldSx}
        value={data.Email} onChange={(e)=>setData({...data, Email:e.target.value})}/>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Mobile Number*" variant="outlined" sx={fldSx2} 
        value={data.Mobile} onChange={(e)=>setData({...data, Mobile:e.target.value})} />
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' id="outlined-basic" label="Nationality" variant="outlined" sx={fldSx2} 
        value={data.Nation} onChange={(e)=>setData({...data, Nation:e.target.value})}/>
        </Grid>
        </Grid>
        <Button variant="contained" size='large' sx={btnSx} onClick={onClick}>NEXT</Button>
    </form>
  )
}

export default Personalinfo