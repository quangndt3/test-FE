import DefaultLayout from '../layout/DefaultLayout';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/UserPages/HomePage/HomePage';
import NotFoundPage from '../pages/UserPages/NotFoundPage';
import LoginPage from '../pages/UserPages/Login/LoginPage';
import AdminLayout from '../layout/AminLayout';
import ProductAdmin from '../pages/AdminPages/ProductAdmin/ProductAdmin';
import AddProduct from '../pages/AdminPages/ProductAdmin/AddProduct';
import UpdateProduct from '../pages/AdminPages/ProductAdmin/UpdateProduct';
import SignUpPage from '../pages/UserPages/SiginUp/SignUp';

const router = createBrowserRouter(
    [
       {
          path: '/',
          element: <DefaultLayout />,
          children: [
             {
                path: '/',
                element: <HomePage />,
                errorElement: <NotFoundPage />
             },
             {
                path: '/login',
                element: <LoginPage />,
                errorElement: <NotFoundPage />
             },
             {
                path: '/signup',
                element: <SignUpPage />,
                errorElement: <NotFoundPage />
             },
          ]
       },
       {
          path: '*',
          element: <NotFoundPage />,
          errorElement: <NotFoundPage />
       },
       {
          path: '/manage',
          element: <AdminLayout />,
          errorElement: <NotFoundPage />,
          children: [
             {
                path: '',
                element: <ProductAdmin />,
                errorElement: <NotFoundPage />
             },
             {
                path: 'products',
                element: <ProductAdmin />,
                errorElement: <NotFoundPage />
             },
             {
                path: 'add-product',
                element: <AddProduct />,
                errorElement: <NotFoundPage />
             },
             {
               path: 'update-product/:id',
               element: <UpdateProduct />,
               errorElement: <NotFoundPage />
            },

      
          ]
       }
    ],
    {
       basename: '/'
    }
 );
 
 export default router;