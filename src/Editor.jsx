import React, { useContext} from 'react'
import { context } from './App'
import JoditEditor from 'jodit-react';
import { Button, Typography } from '@mui/material';

const Editor = ({i,ids}) => {
    const {topics,setTopics,editorValue, setEditorValue,setIndexEditor} = useContext(context);
    const handlerDone=()=>{
      const newArr = topics.map((el)=>(
         el.id===ids? {...el,blog:editorValue} :el
      )
    )
    setTopics(newArr)
    setIndexEditor(-1)
    }
    console.log(editorValue);
    return (
    <div>
        <JoditEditor value={topics[i].blog}  onChange={(e)=>setEditorValue(e)}/>
        <Button
              onClick={()=>handlerDone()}
              disableElevation
              variant="contained"
              sx={{
                ml:{xs:"74.5%",md:'90.5%'},
                my: "8px",
                mr:'16px',
                height:'37px',
                minWidth:'100px',
                maxWidth:'100px',
                ":hover": {
                  bgcolor: "#f9591b",
                },
                bgcolor: "#f9592a",
                borderRadius: "0",
                textTransform: "none",
                borderRadius:'3px'
              }}
            >
              <Typography fontSize='14px'>Done</Typography>
              
            </Button>
    </div>
  )
}

export default Editor