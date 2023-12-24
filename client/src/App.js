import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return(
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider
        router={Router}
      />
    </Suspense>
  )
}
