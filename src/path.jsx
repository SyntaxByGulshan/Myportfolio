import Layout from "./components/Layout";
import {Home,Skills,About,Projects,Resume,ContectMe}  from "./components/Index";
import { Routes, Route,BrowserRouter } from "react-router";


export default function Path(){
    return (
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="" element={<Layout />} >
        <Route path="" element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="skills" element={<Skills/>} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="resume" element={<Resume/>}/>
         </Route>       
        </Routes>
        </BrowserRouter>
        </div>

    )
}
