import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import { HomePage } from '../components/HomePage/HomePage';
import ViewCars from '../components/Cars/ViewCars';
import CarDetails from '../components/Cars/CarDetails/CarDetails';
import CreateCars from '../components/Cars/CreateCars/CreateCars';
import UpdateCar from '../components/Cars/UpdateCar/UpdateCar';
import ManageCars from '../components/Cars/ManageCars/ManageCars';
import Favorites from '../components/Favorites/Favorites';
import Trips from '../components/Trips/Trips';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/cars",
        element: <ViewCars />
      },
      {
        path: "/cars/:carId",
        element: <CarDetails />
      },
      {
        path: "/cars/current",
        element: <ManageCars />
      },
      {
        path: "/cars/new",
        element: <CreateCars />
      },
      {
        path: "/cars/:carId/edit",
        element: <UpdateCar />
      },
      {
        path: "/users/:userId/favorites",
        element: <Favorites />
      },
      {
        path: "/users/trips",
        element: <Trips />
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
    ],
  },
]);
