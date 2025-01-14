import {BrowserRouter, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from "./Users"
import CreateUsers from "./CreateUsers"
import UpdateUser from "./UpdateUser"
function App() {
  

  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<CreateUsers/>}></Route>
        <Route path="/update" element={<UpdateUser/>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App