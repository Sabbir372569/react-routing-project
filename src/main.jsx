import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {                            
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Users from './Component/Users/Users';
import UserDetails from './Component/UserDetails/UserDetails';
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';
import Albums from './Component/Albums/Albums';
import MoreAlbums from './Component/MoreAlbums/More Albums';
import ErrorPage from './Component/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,   // set a error page route
    children:[
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path:'/user/:userId',   //:mane bujay Dynamic       //params take distructure kore use kora hoyeche.(params name ekta peramiter set kora hoyeche)
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
                                        // params hocce ekta object  sei object er vitor ekta property thakbe ami je nam disi seita
        element: <UserDetails></UserDetails>                // chaile params er poriborte onno kono nam oo dite partam.
                                                            // params.userId dile sorasori  value ta peye jabo. 
      },
      {
        path:'/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path:'/albums',
        loader:() => fetch('https://jsonplaceholder.typicode.com/albums'),
        element:<Albums></Albums>
      },
      {
        path:'/album/:albumId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}`),
        element:<MoreAlbums></MoreAlbums>
      }                                    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
