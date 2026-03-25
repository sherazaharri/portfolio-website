import { Routes, Route } from "react-router";
import LandingPage from "./Landing/LandingPage";
import AboutPage from "./About/AboutPage";
import ProjectPage from "./Projects/ProjectPage";
import ExperiencePage from "./Experience/ExperiencePage";

function App(){
    return(
        <>
        <Routes>
            <Route path="/" element={<LandingPage></LandingPage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
            <Route path="/experience" element={<ExperiencePage></ExperiencePage>}></Route>
        </Routes>
        </>
    );
}

export default App;