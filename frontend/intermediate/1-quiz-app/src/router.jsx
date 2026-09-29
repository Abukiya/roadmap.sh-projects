import { Routes, Route } from "react-router";
import { Layout } from "./components/layout";
import { Start } from "./components/start";
import { Questions } from "./components/question";
export function Approuter(){
    return(
        <Routes>
            <Route element ={<Layout/>}>
            <Route path="/" element={<Start />} />
            <Route path="/question" element={<Questions />} />
            </Route>
        </Routes>
    )
}