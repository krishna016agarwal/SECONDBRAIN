import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import { Signup } from "./components/signup"
import { Login } from "./components/login"
import Home from "./components/home"
import Creativity from "./components/creativity"
import Ideas from "./components/ideas"
import Questions from "./components/questions"
import Links from "./components/links"

const App=()=> {
  const router =createBrowserRouter([
    {
      path:"/signup",
      element: <Signup></Signup>
    },
    {
      path:"/login",
      element:<Login></Login>
    },
    {
      path:"/",
      element:<Home></Home>

    },
    {
      path:"/links",
      element:<Links></Links>
    },
    {
      path:"/creativity",
      element:<Creativity></Creativity>
    },
    {
      path:"/ideas",
      element:<Ideas></Ideas>
    },
    {
      path:"/questions",
      element:<Questions></Questions>
    },
   
  ])

  return <RouterProvider router={router}></RouterProvider>;
  
}

export default App