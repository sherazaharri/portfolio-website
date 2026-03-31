import { AnimatePresence } from 'framer-motion';
import { useLocation, Routes, Route } from 'react-router-dom';

import LandingPage from "./Landing/LandingPage";
import AboutPage from "./About/AboutPage";
import ProjectPage from "./Projects/ProjectPage";
import ExperiencePage from "./Experience/ExperiencePage";

function App(){
    const location = useLocation();
    return(
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<LandingPage></LandingPage>}></Route>
                <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
                <Route path="/experience" element={<ExperiencePage></ExperiencePage>}></Route>
            </Routes>
        </AnimatePresence>
    );
}

export default App;