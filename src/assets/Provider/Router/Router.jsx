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
import Orders from "../../server-rileted/Oder";
import Gallery from "../../Main-design/gallery";
import PrivateRoute from "./PrivetRoute";
import Update from "../../server-rileted/update";




const router = createBrowserRouter([

    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: '/',
                element: <TopFoods></TopFoods>,
                loader: () => fetch(`https://restorent-2-server.vercel.app/addfood`),

            },

            {
                path: "/login",
                element: <Login></Login>

            },
            {
                path: '/addfood/:id',
                element: <SingleFoodPage></SingleFoodPage>,
                loader: ({ params }) => fetch(`https://restorent-2-server.vercel.app/addfood/${params.id}`)
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
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/useroder',
                element: <PrivateRoute><UserOrders></UserOrders></PrivateRoute>
            },
            {
                path: "purchase/:id",
                element: <PrivateRoute><PurchaseFood></PurchaseFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://restorent-2-server.vercel.app/addfood/${params.id}`)

            },
            {
                path: "/oder",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>


            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>,
            },
            {
                path:"/addfood-food/:id",
                element: <Update></Update>,
                loader: ({params}) => fetch(`https://restorent-2-server.vercel.app/addfood-food/${params.id}`)
                
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