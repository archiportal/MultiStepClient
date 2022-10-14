import {React,useState,useEffect} from 'react';
import {ThemeProvider,createTheme,AppBar,Button,CssBaseline,Toolbar,Typography} from '@mui/material';
import EventNoteIcon from '@mui/icons-material/EventNote';
import HomePage from './components/HomePage';
import Records from './components/Records';
import Axios from 'axios';

function App() {
  const[page,setPage] = useState(0);
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

    useEffect(()=>{
      try {
        Axios.get("http://localhost:3001/getForm").then((response)=>{
        setFormData(response.data)
      })} catch (error) {
        console.log(error);
      }
    },[])
    useEffect(()=>{
      console.log(formData);
    },[formData])

    const postForm = () =>{
      // setFormData([...formData,data]);
      try{
        Axios.post("http://localhost:3001/postForm",data).then((response)=>{
        setFormData([...formData,data])})
        setData({});
        setPage(page+1);
      } catch(error){
        console.log(error);
      }
    }
    
    
  const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
    },
  });
  const btnSx = {
    margin : "0em 2em 0em 2em",
  }
  const[record,setRecord]=useState(false);
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position='relative' sx={{
      bgcolor:'#54BAB9',
    }}>
      <Toolbar>
      <EventNoteIcon fontSize="large"/>
      <Typography variant='h4' marginTop={2} marginBottom={2}>
        FormAtic
      </Typography>
      <Button color="inherit" size="large" sx={btnSx} onClick={()=>{setRecord(false)}}>HOMEPAGE</Button>
      <Button color="inherit" size="large" onClick={()=>{setRecord(true)}}>RECORDS</Button>
      </Toolbar>
      </AppBar>
    {
      record?(<Records formData={formData}/>):
      (<HomePage formData={formData} setFormData={setFormData}
      data={data} setData={setData} postForm={postForm} page={page} setPage={setPage}/>)
    }
    </ThemeProvider>
    </>
  )
}

export default App