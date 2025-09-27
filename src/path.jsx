import Layout from "./components/Layout";
import {Home,Skills,About,Projects,Resume,ContectMe}  from "./components/Index";
import { Routes, Route,BrowserRouter } from "react-router";
import NotFound from "./components/default/Defalult";

export default function Path(){
    return (
        <div>
        <BrowserRouter>
        <Routes>
        <Route path="" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About/>}/>
        <Route path="skills" element={<Skills/>} />
        <Route path="projects" element={<Projects/>}/>
        <Route path="resume" element={<Resume/>}/>
        <Route path="contectme" element={<ContectMe/>}/>
        <Route path="*" element={<NotFound />} />
         </Route>       
        </Routes>
        </BrowserRouter>
        </div>

    )
}
