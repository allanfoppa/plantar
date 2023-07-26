import { RouterProvider } from 'react-router-dom';
import Router from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return(
    <RouterProvider
      router={Router}
      fallbackElement={<p>Loading...</p>}
    />
  )
}
