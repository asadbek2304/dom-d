import './assets/scss/main.scss';

import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Sponsors from './components/Sponsors';
import { useState } from 'react';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
   const openModal = (bool) => {
     setIsModalOpen(bool);
   };
   const closeModal = (bool) => {
     setIsModalOpen(bool);
   };
  const openSidebar = (bool) => {
    setIsSidebarOpen(bool)
  }
  const closeSidebar = (bool) => {
    setIsSidebarOpen(bool)
  }
  return (
<>
<Navbar action={openSidebar} />
<Sidebar state={isSidebarOpen} action={closeSidebar} />
<Home action={openModal} />
<Modal state={isModalOpen} action={closeModal}/>
<Sponsors />
<Contact />
<Footer />
</>
  );
}

export default App;
