import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/ReduxStore";
import { 
  createBrowserRouter,
  RouterProvider

} from "react-router-dom";





import Auth from "./pages/Auth/Auth"
import Home from "./pages/home/Home"
import Profile from "./pages/Profile/Profile"






const routes = createBrowserRouter([


  {
        path: "/",
        element: <Auth/>,
  },
  {
    path: "home",
    element: <Home/>,
    
  },
  {
    path: "profile/:id",
    element: <Profile/>,
  },

  
  
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store = {store}>
    <RouterProvider router={routes} />
  </Provider>
);

/*const routes = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' 
    element={user?<Navigate to = "home"/>: <Navigate to = 'auth'/>} 
    >
  
    <Route path='/home' 
    element={user? <Home/>: <Navigate to = '../auth'/>}
    />
  
    <Route path='/auth' 
    element={user? <Navigate to = '../home'/> : <Auth/>}
    />
    <Route path='/profile/:id' 
    element={user? <Profile /> : <Navigate to= '../auth'/>}
    />
    </Route>
)
);
*/
/*const routes = createBrowserRouter.([
  {
 
    path: "/",
    element: <Auth/>,
  

    
  },
  {
        path: "home",
        element: <Home/>,
  },
  {
    path: "profile",
    element: <Profile/>,
  },
  
]);
*/ 