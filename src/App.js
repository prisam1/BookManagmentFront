import './App.css'
import RegisterForm from "./components/Signup"
import Login from './components/Login'
import Home from './components/home'
import Dashboard from './components/dashBoard'
import GetBooks from './components/getBooks'
import GetBookByID from "./components/getBookById"
import {


  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<RegisterForm />}/>
     <Route path="/login" element={<Login />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/dashboard/books" element={<GetBooks />} />
     <Route path="/dashboard/books/:bookId" element={<GetBookByID />} />
     </Routes>
     </BrowserRouter>

       </>
  )
}

export default App
