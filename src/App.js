import ZomatoHome from "./Pages/Home/ZomatoHome";
import ZomatoLogin from "./Pages/Login/ZomatoLogin";
import ZomatoSignUp from "./Pages/SignUp/ZomatoSignUp";
import ZomatoViewFood from "./Pages/ViewResto/ZomatoViewFood";
import CityDescription from "./Pages/Cities/Description/CityDescription";
import {BrowserRouter, Routes,Route } from 'react-router-dom'


function App() {
  return (
   <div>
    <Routes>
      <Route path='/' element={<ZomatoHome/>}/>
      <Route path='/login' element={<ZomatoLogin/>}/>
      <Route path='/signup' element={<ZomatoSignUp/>}/>
      <Route path='/viewfood' element={<ZomatoViewFood/>}/>
      <Route path='/citydata' element={<CityDescription/>}/>
    </Routes>
   </div>
  );
}

export default App;
