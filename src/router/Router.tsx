import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import CreateTodo from "../screens/Create";

function AppRouter(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="/create" element={<CreateTodo/>}/>
                </Routes>
            </Router>
        </>
    );
}

export default AppRouter;