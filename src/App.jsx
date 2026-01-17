import './App.css'
import { Contacts } from './components/contacts'
import Silk from './components/silk'
import { FaHome, FaInfo, FaFolderOpen } from "react-icons/fa";
import GlassIcons from './components/glassicons'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AboutMe } from './components/aboutMe'
import { Projects } from './components/projects'
import { RedirectToHome } from './components/redirectHomeComp';

function App() {

  const items = [
    {
      label: "Home",
      icon: <FaHome />,
      color: "clear",
      to: "/"
    },
    {
      label: "About Me",
      icon: <FaInfo />,
      color: "clear",
      to: "/about"
    },
    {
      label: "Projects",
      icon: <FaFolderOpen />,
      color: "clear",
      to: "/projects"
    },
];

  return (
    <>
      <HashRouter>
      
          <div className="fixed inset-0 z-0 flex-grow overflow-y-auto xs:visible invisible ">
            <Silk
              speed={3}
              scale={0.85}
              color="#4954bd" //4954bd, de7639, 6c0000
              noiseIntensity={0.1}
              rotation={2.78}
            />
          </div>
          <div className='relative z-20 flex flex-col items-center'>
            <div className='absolute z-20'>
              <GlassIcons items={items} className='grid xs:gap-[5em] grid-cols-3 py-[3em] overflow-visible relative'/>
            </div>
            
            <div>
              <Routes>
                <Route path='/' element={<Contacts/>}/>
                <Route path='/about' element={<AboutMe/>}/>
                <Route path='projects' element={<Projects/>}/>
                <Route path='*' element={<RedirectToHome/>}/>
              </Routes>
            </div>
          </div>
      </HashRouter>
    </>
  )
}

export default App
