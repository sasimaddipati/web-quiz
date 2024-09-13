import './App.css';
import Display from './components/display/Display';
import Login from './components/login/Login';
import Home from './components/home/Home';
import Register from './components/register/Register';
import Create from './components/create/Create';
import Skillspace from './components/skillspace/Skillspace';
import Classzone from './components/classzone/Classzone';
import Displayquiz from './components/displayquiz/Displayquiz';
import Displaycode from './components/displaycode/Displaycode';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Createquiz from './components/createquiz/Createquiz';
import Createcontest from './components/createcontest/Createcontest';
import Unassigned from './components/unassigned/Unassigned';
import Upcoming from './components/upcoming/Upcoming'
import Codeeditor from './components/codeeditor/Codeeditor'
import Joinedzone from './components/joinzone/Joinzone'
import Createzone from './components/createzone/Createzone';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Display />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login/>,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'skillspace',
        element: <Skillspace />,
         children:[
            {
               path:'',
               element:<Codeeditor/>
            },
            {
              path:'codeeditor',
              element:<Codeeditor/>
           }
         ]
      },
      {
        path: 'classzone',
        element: <Classzone />,
        children:[
          {
            path:'',
            element:<Createzone />
          },
          {
            path:'createzone',
            element:<Createzone />
          },
          {
             path:'joinedzone',
             element:<Joinedzone/>
          }

        ]
      },
    ],
  },
  {
    path: 'create',
    element: <Create />,
    children: [
      {
        path: 'createquiz',
        element: <Createquiz />,
      },
      {
        path: 'createcontest',
        element: <Createcontest />,
      },
      {
        path: 'unassigned',
        element: <Unassigned />,
      },
      {
        path: 'upcoming',
        element: <Upcoming />,
      }
    ],
  },
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
