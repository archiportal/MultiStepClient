import { React, useState } from 'react';
import {TextField , Typography, Grid, Button, Box } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styles from '../styles/Form1.module.css';


function Personalinfo({incPage, data, setData}) {
    const[showPassword,setShowPassword] = useState(false);
    const onClick=()=>{
        incPage();
    }
    const fldSx ={
        margin : '1em',
        width : '100%',
    }

    const fldSx2 ={
        margin : '1em',
        width : '100%',
        right:'1rem'
    }

    const fldSx3={
        margin : '1em',
        width : '100%',
        right:'1rem'
    }

    const typoSx = {
        margin: '0.2em',
        color:'#628E90',
    }

    const btnSx={
        bgcolor:'#54BAB9',
        '&:hover':{
            bgcolor:'#97D2EC',
        },
        marginTop : '1rem',
    }

    const btnSx3={
        bgcolor:'#54BAB9',
        '&:hover':{
            bgcolor:'#97D2EC',
        },
        margin : '1.5rem 1rem 1rem 0rem',
    }

  return (
    <form className={styles.formLayout}>
        <Typography variant='h4' sx={typoSx} fontFamily='Segoe UI'>
            PERSONAL INFORMATION
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' label="First Name*" variant="outlined" sx={fldSx2}
        value={data.FirstName} onChange={(e)=>setData({...data, FirstName:e.target.value})} />
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' label="Last Name*" variant="outlined" sx={fldSx2} 
        value={data.LastName} onChange={(e)=>setData({...data, LastName:e.target.value})}/>
        </Grid>
        </Grid>
        <TextField type='text' label="Address*" variant="outlined" sx={fldSx}
        value={data.Address} onChange={(e)=>setData({...data, Address:e.target.value})}/>
        <TextField type='text' label="E-mail*" variant="outlined" sx={fldSx}
        value={data.Email} onChange={(e)=>setData({...data, Email:e.target.value})}/>
        <Grid container spacing={2}>
        <Grid item xs={9}>
        <TextField type={(showPassword)?'text':'password'} label="Set Password*" variant="outlined" sx={fldSx3}
        value={data.Password} onChange={(e)=>setData({...data, Password:e.target.value})}/>
        </Grid>
        <Grid item xs={3}>
        <Button variant="contained" size="small" sx={btnSx3} onClick={()=>{setShowPassword(!showPassword)}}>
        {showPassword?(<VisibilityIcon/>):(<VisibilityOffIcon/>)}
        </Button>
        </Grid>
        </Grid>
        <Grid container spacing={2}>
        <Grid item xs={6}>
        <TextField type='text' label="Mobile Number*" variant="outlined" sx={fldSx2} 
        value={data.Mobile} onChange={(e)=>setData({...data, Mobile:e.target.value})} />
        </Grid>
        <Grid item xs={6}>
        <TextField type='text' label="Nationality" variant="outlined" sx={fldSx2} 
        value={data.Nation} onChange={(e)=>setData({...data, Nation:e.target.value})}/>
        </Grid>
        </Grid>
        <Box width="100%" display="flex" justifyContent="flex-end">
        <Button variant="contained" size='large' sx={btnSx} onClick={onClick}>NEXT</Button>
        </Box>
    </form>
  )
}

export default Personalinfo