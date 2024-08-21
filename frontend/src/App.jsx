import Display from "./Display";
import Home from "./Home";
import Insert from "./Insert";
import Layout from "./Layout";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Update from "./Update";
import Search from "./Search";
import Contact from "./Contact";
import About from "./About";
import EditData from "./EditData";
import Login from "./Login";
import Registration from "./Registration";
import Dashboard from "./Dashboard";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={(<Layout/>)}>
       <Route index element={(<Home/>)}/>
       <Route path="home" element={(<Home/>)}/>
       <Route path="about" element={(<About/>)}/>
       <Route path="insert" element={(<Insert/>)}/>
       <Route path="display" element={(<Display/>)}/>
       <Route path="update" element={(<Update/>)}/>
       <Route path="search" element={(<Search/>)}/>
       <Route path="contact" element={(<Contact/>)}/>
       <Route path="editdata/:id" element={(<EditData/>)}/>
       <Route path="login" element={<Login/>}/>
       <Route path="registration" element={<Registration/>}/>
       <Route path="dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App;