import { Delete, KeyboardArrowDown, KeyboardArrowRight, KeyboardArrowUp } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { context } from './App'
import Editor from './Editor'
import Blog from './Blog'


const Topics = () => {
    const {topics,setTopics,indexEditor , setIndexEditor} = useContext(context);
    const [keyId , setKeyId] = useState('');
    const [index , setIndex] = useState(-1);


    const handlerOver =(ids)=>{
        setKeyId(ids)
    }

    const deletetopics =(id)=>{
        const newList = topics.filter((el)=>{
             return id !== el.id
        })
        setTopics(newList)
    }
    const handleTopic = (i)=>{
      if(i===index){
        setIndex(-1)
      }
      else{
    setIndex(i)
      }
      setIndexEditor(-1)
    }

    const handlerWrite = (el,i)=>{
        if(i===indexEditor){
          setIndexEditor(-1)
        }
        else{
      setIndexEditor(i)
        }
        setIndex(-1)
    }

  return (
    <Box
        sx={{
          mt:'70px',
          mb:'20px',
          mx: "20px",
          ml:{sx:'0', md:'90px'},
          border: "solid 1px #d4d4d4",
          height: "100%",
          mr: { md: "260px" },
          borderRadius:'3px'
        }}
      >
        <Box
          sx={{
            bgcolor: "#f8f7ff",
            borderBottom: "solid 1px #d4d4d4",
            borderRadius:'3px'
          }}
        >
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
              ml: "20px",
              py: "5px",
            }}
          >
            Recommended Topics
          </Typography>
        </Box>

        {topics.map((el, i) => (
          <Box key={i} sx={{
            display:'flex',
            flexWrap:'wrap',
            flexDirection:'column',
            borderBottom: "solid 1px #d4d4d4",
            cursor:'pointer',
          }}>
          <Box onMouseEnter={()=>{handlerOver(el.id)}} onMouseLeave={()=>setKeyId('')} key={i}
          id='topicCon'
            sx={{
              mt:'10px',
              display:"flex",
              justifyContent:'space-between',
              minHeight: "80px",

            }}
          >
            <Box onClick={()=>handleTopic(i)} sx={{
                display:'flex',
                flexDirection:"column",

            }}>
              <Typography sx={{
                my:'10px',
                ml:{xs:'10px', md:'20px'},
                wordBreak:'break-word',
                fontSize:'14px',
                fontWeight:'bold'
              }}>{el.name}</Typography>

              <Box sx={{display:'inline-flex',flexWrap:'wrap'}}>
              {el?.key?.map((items,i)=>{
               return <Typography id={`color${i}`} sx={{
                ml:{xs:'10px', md:'20px'},
                fontSize:'13px',
                fontWeight:'bold',
                px:'6px',
                color:'#f9592a',
                bgcolor:'#f9592a28',
                borderRadius:'8px',
                border:'solid 1.6px #f9592a',
                mb:'10px',

              }}key={i}>{items}</Typography>
              })}
              </Box>
            </Box>


            <Box sx={{
                display:'flex',
            }}>

            <Box sx={{
                mr:{xs:'5px' ,md:'60px'},
                width:'39px'
            }}>
            {el.id===keyId&&<IconButton onClick={()=>{
              deletetopics(el.id)
              setIndex(-1)
              setIndexEditor(-1)}} id='deleteIcon' sx={{my:'8px',height:'39px'}}>
                <Delete sx={{color:'#ccccdc'}}/>
            </IconButton>}
            </Box>

            <Button
              disableElevation
              onClick={()=>{handlerWrite(el,i)}}
              variant="contained"
              sx={{
                my: "8px",
                mr:'16px',
                height:'37px',
                minWidth:'72px',
                maxWidth:'72px',
                ":hover": {
                  bgcolor: "#f9481a",
                },
                bgcolor: "#f9592a",
                borderRadius: "0",
                textTransform: "none",
                borderRadius:'3px'
              }}
            >
              <Typography fontSize='14px'>{(el.blog==='')?'Write' : 'Edit'}</Typography>
              {(i===indexEditor)?<KeyboardArrowDown/> : <KeyboardArrowRight />}
              
            </Button>
            

            </Box>

            </Box>
            {(i===indexEditor) &&<Box ><Editor  i={i} ids={el.id}/></Box>}
            {(i===index) && <Box sx={{ transition:'ease-in'}}><Blog value={el.blog}/>
            <IconButton onClick={()=>setIndex(-1)} sx={{ mb:'20px', ml:{xs:'88%' , md:'95%'},width:'40px'}}><KeyboardArrowUp/></IconButton></Box>}
            
            </Box>

        ))}
      </Box>
  )
}

export default Topics