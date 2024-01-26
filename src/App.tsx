import { RouterProvider } from 'react-router-dom';
import React from 'react';
import router from './routers';
function App() {
   return <RouterProvider router={router} />;
}

export default App;
