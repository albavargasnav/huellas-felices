import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

function Layout() {
  const layoutStyle = {
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <>
    <div style={layoutStyle}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default Layout;
