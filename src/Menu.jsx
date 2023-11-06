import Menu from '@mui/material/Menu';
import { useContext,useState } from 'react';
import { context } from './App'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'fixed',
    top: '110px',
    right: {xs:'5%' , md:'15%'},
    width: 300,
    bgcolor: 'background.paper',
    borderRadius:'8px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.19)',
    p: 4,
  };


export default function BasicMenu() {
    const {setOpen,
        topics, setTopics} = useContext(context)
        const [name, setName] = useState('')
        const [key, setKey] = useState('')
        const handlerSubmit = ()=>{
        let random = Math.random()*100000000000000000;
            if(name!=='' && key!==''){
                setTopics([...topics,{id:random.toString(),name:name, key:key.split(' '),blog:''} ])
                setOpen(false)
                setAnchorEl(null)
                setName('')
                setKey('')
            }
        }
    

  const {anchorEl, setAnchorEl} = useContext(context)
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setOpen(false)
    setAnchorEl(null);
  };

  return (
    <div>
      
      <Menu
      sx={{ml:'1110%'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Please Enter Data
          </Typography>
          <Box sx={{
            my:3,
            display:'flex',
            flexDirection:'column',
            flexWrap:'wrap',
            justifyContent:'center',
            gap:2
          }}>
            <input type='text'value={name}  placeholder='Topic Name' onChange={(e)=>setName(e.target.value)}/>
            <input type='text' value={key} placeholder='Key' onChange={(e)=>setKey(e.target.value)}/>
            <Button onClick={()=>handlerSubmit()} disableElevation variant='contained' sx={{
            mt:'10px',
            ':hover':{
              bgcolor:'#f9481a'
            },
            bgcolor:'#f9592a',
            borderRadius:'8px',
            textTransform:'none'
          }}><Typography>Add Topics</Typography></Button>
          </Box>
        </Box>
      </Menu>
    </div>
  );
}