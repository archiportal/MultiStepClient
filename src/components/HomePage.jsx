import {React} from 'react';
import {Box, Grid} from '@mui/material';
import Personalinfo from './Personalinfo';
import Education from './Education';
import ShowPage from './ShowPage';
import Confirmed from './Confirmed';
import SideBar from './SideBar';
import useWindowSize from '../Hooks/useWindowSize';


function HomePage({page,setPage,data,setData,postForm}) {
  const size = useWindowSize();
  const incPage=()=>{
    setPage((currentPage)=>{
      return currentPage + 1;
    });
  }

  const decPage=()=>{
    setPage((currentPage)=>{
      return currentPage - 1;
    });
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
      display:'flex',
      width:'55%',
      height:'90%',
      bgcolor:'#EAF6F6',
      padding:'2rem',
      margin:'2rem',
      borderRadius:2,
      flexDirection: 'column',
      flexWrap:'wrap',
      alignItems: 'center',
      boxShadow:2,
      minWidth:'350px',
  }
   
  return (
    <Grid container spacing={2} >
    <Grid item xs={size.width>700?'3':'0'}>
    {size.width>700 && <SideBar page={page} setPage={setPage} />}
    </Grid>
    <Grid item xs={size.width>700?'9':'12'}>
    <Box component='div' sx={boxSx}>
    {PageDisplay()}
    </Box>
    </Grid>
    </Grid>
  )
}

export default HomePage