import React from 'react'

function Footer() {
    const styles={
        footer:{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            heigth:"500px",
            padding:"100px 100px",
            background:"rgba(0,0,0,0.5)",
            color:"white"
        },
        copyrights:{
            textAlign:"center",
        }
    }
  return (
    <>
     <div className="footer" style={styles.footer}>
        <div className="block1">Home</div>
        <div className="block2">About</div>
        <div className="block3">Services</div>
        <div className="block4">Contact Us</div>
     </div>
     <div className='copyrights' style={styles.copyrights}>Copy Rights by &copy; <b>Vani</b> </div>
    </>
  )
}

export default Footer
