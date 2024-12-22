import { createBrowserRouter } from "react-router-dom";
import Home from "../../Component/Home";
import Login from "../../Page/login";
import Register from "../../Page/Ragester";
import Allfood from "../../server-rileted/AllFood";
import AddFood from "../../server-rileted/AddFood";
import UserOrders from "../../server-rileted/myoder";
import TopFoods from "../../Component/topFood";
import SingleFoodPage from "../../Component/singelpage";
import PurchaseFood from "../../server-rileted/foodpurchase";


const router = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <TopFoods></TopFoods>,
                loader: () => fetch(`http://localhost:5000/addfood`),

            },
            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: '/addfood/:id',
                element: <SingleFoodPage></SingleFoodPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/addfood/${params.id}`)
            },
            {
                path: "/regester",
                element: <Register></Register>
            },
            {
                path: "/AllFoods/:id",
                element: <Allfood></Allfood>,

            },
            {
                path: "addfood",
                element: <AddFood></AddFood>
            },
            {
                path: '/useroder',
                element: <UserOrders></UserOrders>
            },
            {
                path:"purchase/:id",
                element:<PurchaseFood></PurchaseFood>,
                 loader: ({ params }) => fetch(`http://localhost:5000/addfood/${params.id}`)

            }


        ]
    },
    {
        path: "/about",
        element: <div>radwa</div>
    },
    {
        path: '*',
        element: <div>radwa</div>
    },






]);


export default router;