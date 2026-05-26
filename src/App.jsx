import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import CodeProfiles from './components/CodeProfiles'
import BlogPosts from './components/BlogPosts'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CVModal from './components/CVModal'
import './App.css'

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  return (
    <>
      <Header onCVClick={openCVModal} />
      <Hero onCVClick={openCVModal} />
      <Projects />
      <CodeProfiles />
      <BlogPosts />
      <Footer />
      <BackToTop />
      <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} />
    </>
  )
}

export default App
