import {React, useState, useEffect} from 'react'
import {CssBaseline, Typography, AppBar, createTheme, ThemeProvider, Toolbar,Box, List
,ListItemButton, ListItemIcon, ListItemText, ListSubheader, Grid} from '@mui/material';
import Personalinfo from './components/Personalinfo';
import Education from './components/Education';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import ShowPage from './components/ShowPage';
import Confirmed from './components/Confirmed';
import DescriptionIcon from '@mui/icons-material/Description';
import Axios from 'axios';


function App() {
  const[formData,setFormData] = useState([])
  const[data,setData]=useState(
    {
      FirstName:'',
      LastName:'',
      Address:'',
      Email:'',
      Mobile:'',
      Nation:'',
      Institution:'',
      Course:'',
      Stream:'',
      StartDate:'',
      EndDate:'',
      Cgpa:'',
      Percent:''
    })
  const[page,setPage] = useState(0);
  useEffect(()=>{
    Axios.get("http://localhost:3001/getForm").then((response)=>{
    setFormData(response.data)
  },[])})
  const postForm = () =>{
    // setFormData([...formData,data]);
    Axios.post("http://localhost:3001/postForm",data).then((response)=>{
      setFormData([...formData,data])
    })
    console.log(formData);
    setData({});
    setPage(page+1);
  }
  const incPage=()=>{
    setPage(page+1);
  }
  const decPage=()=>{
    setPage(page-1);
  }
  const PageDisplay=()=>{
    if(page===0){
      return <Personalinfo incPage={incPage} data={data} setData={setData}/>;
    } else if(page===1){
      return <Education decPage={decPage} data={data} setData={setData} incPage={incPage}/>;
    } else if (page===2){
      return <ShowPage  decPage={decPage} data={data} postForm={postForm}/>
    } else if (page===3){
      return <Confirmed setPage={setPage}/>
    }
  }
  const boxSx = {
      width:'600px',
      height:'730px',
      bgcolor:'#EAF6F6',
      padding:'2rem',
      margin:'2rem',
      borderRadius:2,
      flexDirection: 'column',
      flexWrap:'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow:2,
  } 

  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
    },
  });
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position='relative' sx={{
      bgcolor:'#54BAB9',
    }}>
      <Toolbar>
      <Typography variant='h4' marginTop={2} marginBottom={2}>
        FormAtic
      </Typography>
      <EventNoteIcon fontSize="large"/>
      </Toolbar>
    </AppBar>
    <Grid container spacing={2}>
    <Grid item xs={3}>
    <List
      sx={{height:'100vh',width: '100%', maxWidth: 360, bgcolor: 'background.paper', 
      margin:'0.25rem 1rem 1rem 0rem', boxShadow:'2'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{
          fontSize:'1.2em'
        }}>
          Navigate
        </ListSubheader>
      }
    >
      <ListItemButton onClick={()=>{
        setPage(0);}} 
        sx={{ bgcolor:(page===0)?'#EAF6F6':'background.paper',}}>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="PERSONAL INFORMATION"/>
      </ListItemButton>
      <ListItemButton onClick={()=>{
        setPage(1);}} 
        sx={{ bgcolor:(page===1)?'#EAF6F6':'background.paper',}}>
        <ListItemIcon>
          <SchoolIcon />
        </ListItemIcon>
        <ListItemText primary="EDUCATION DETAILS" />
      </ListItemButton>
      <ListItemButton onClick={()=>{
        setPage(2);}} 
        sx={{ bgcolor:(page===2)?'#EAF6F6':'background.paper',}}>
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary="PREVIEW"/>
      </ListItemButton>
    </List>
    </Grid>
    <Grid item xs={9}>
    <Box component='div' sx={boxSx}>
    {PageDisplay()}
    </Box>
    </Grid>
    </Grid>
    </ThemeProvider>
    </>
  )
}

export default App