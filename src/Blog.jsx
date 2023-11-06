


const Blog = ({value}) => {
  return (<>
    <div style={{
      display:'flex',
      flexWrap:'wrap',
      flexDirection:'column',
      margin:'10px 20px',

      }} dangerouslySetInnerHTML={{__html : value}} />
    </>
  )
}

export default Blog