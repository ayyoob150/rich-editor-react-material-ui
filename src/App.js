import "./App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { useState } from "react";
import { createContext } from "react";
import Topics from "./Topics";
import Msg from "./Msg";
import BasicMenu from "./Menu";

export const context = createContext(null);

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [active, setActive] = useState("Custom");
  const [anchorEl, setAnchorEl] = useState(null);
  const [editorValue, setEditorValue] = useState('');
  const [indexEditor , setIndexEditor] = useState(-1);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  };
  const [topics, setTopics] = useState([
    {
      id: "45456464544",
      name: "The Importance of Establishing a Strong Online Presence for small Businesse",
      key: ['online business', 'website', 'digital', 'marketing'],
      blog:'Editor.jsx:16 <p style="text-align: justify;"><span style="font-family: georgia, palatino, serif;"><img src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" alt="" width="554" style="display: block; margin-left: auto; margin-right: auto;" height="369"><br></span></p><p style="text-align: justify;"><span style="font-family: georgia, palatino, serif;"><br></span></p><p><span style="font-family: georgia, palatino, serif; font-size: 18px;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span></p>'
    },
    {
      id: "454521115454",
      name: "How Fast Turnaround Times in Logis and Website Design Benefit Your Business",
      key: ['business', 'website', 'branding', 'developer'],
      blog:'<p style="text-align: justify;"><span style="font-family: georgia, palatino, serif;"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" alt="" width="518" height="389" style="display: block; margin-left: auto; margin-right: auto;"></span></p><p style="text-align: justify;"><span style="font-family: georgia, palatino, serif;"><br></span></p><p><span style="font-family: georgia, palatino, serif; font-size: 18px;">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</span></p>'
      

    },
    {
      id: "1687754954144",
      name: "Affordable Branding Solutions for Startups and Entrepreneurs",
      key: ['logo' ,'design', 'website', 'marketing', 'agency'],
      blog:''
      

    },
  ]);
  const list = ["All", "Custom", "ICP", "Mission", "Product"];


  const handlerToolbar = (el) => {
    setActive(el)
  };

  return (
    <context.Provider
      value={{
        open,
        setOpen,
        topics,
        setTopics,
        open1,
        setOpen1,
        anchorEl,
        setAnchorEl,
        editorValue, setEditorValue,
        indexEditor , setIndexEditor
      }}
    >
      {/* <Model />
      <Modalwrite/> */}
      <BasicMenu/>
      <header style={{ margin: "20px" }}>
        <Typography
          sx={{
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          variant="h5"
          component="h1"
        >
          Categories
        </Typography>
        <Stack
          direction="row"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mr: { md: "200px" },
          }}
        >
          <Stack direction="row" spacing={2} mt={3}>
            {list.map((el, i) => (
              <Box key={i}>
                <Typography
                  onClick={() =>handlerToolbar(el)}
                  id={el === active ? "setActive" : ""}
                  sx={{
                    cursor: "pointer",
                    ml: { md: "80px" },
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {el}
                </Typography>
              </Box>
            ))}
          </Stack>

          <div>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}

              disabled={(active==='Custom')?false :true}
              // onClick={() => setOpen(true)}
              disableElevation
              variant="contained"
              sx={{
                margin: "15px",
                ":hover": {
                  bgcolor: "#f9481a",
                },
                bgcolor: "#f9592a",
                textTransform: "none",
                borderRadius:'2px'
              }}
            >
              <Typography>Add Topics</Typography>
              {(open?<KeyboardArrowDown/>:<KeyboardArrowRight/>)}
            </Button>
          </div>
        </Stack>
      </header>

      {/* body box  */}

      {
        (active==='Custom')? <Topics/> : <Msg/>
      }

    </context.Provider>
  );
}

export default App;
