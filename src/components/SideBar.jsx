import React from 'react';
import {List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import DescriptionIcon from '@mui/icons-material/Description';

function SideBar({page, setPage}) {
  return (
    <List
      sx={{height:'100vh',width: '100%', maxWidth: 360, bgcolor: 'background.paper', 
      margin:'0.25rem 1rem 1rem 0rem', boxShadow:'2',overflow:'scroll',}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{
          fontSize:'1.2em',
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
  )
}

export default SideBar