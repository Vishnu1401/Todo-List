// Layout Component
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';
function Layout() {
  const styles={
    header:{
      position:"fixed",
      top:"0px",
      width:"100%"
    },
    main:{
      marginTop:"100px"
    }
  }
  
    return (
      <>
        <header style={styles.header}>
        <Navbar />
        </header>
        <main style={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </>
    )
  }

export default Layout;