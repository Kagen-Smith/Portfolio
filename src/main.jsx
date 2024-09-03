import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/App.jsx';
import AboutMe from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/pages/AboutMe.jsx';
import Portfolio from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/pages/Portfolio.jsx';
import ContactMe from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/pages/ContactMe.jsx';
import Resume from '/Users/kagensmith/Desktop/bootcamp/Portfolio/src/components/pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'Portfolio',
        element: <Portfolio />,
      },
      {
        path: 'Contact',
        element: <ContactMe />,
      },
      {
        path: 'Resume',
        element: <Resume />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);