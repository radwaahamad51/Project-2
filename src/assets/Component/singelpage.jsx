import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks";


// Component for displaying a single food item
const SingleFoodPage = () => {
   const food = useLoaderData(); // Get the loaded data

//   const navigate = useNavigate();



const [orders, setOrders] = useState([]);
const { user } = useAuth()
    
    

// extra 
useEffect(() => {
    if (user?.email) {
        fetch(`https://restorent-2-server.vercel.app/addfood-oder?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
                console.log(data)
            })
            .catch((error) => {
                console.error("Failed to fetch orders:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to load your orders. Please try again later.",
                });
            });
    }
}, [user]);




  return (
    <div className="min-h-screen  py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={food.image}
          alt={food.foodname}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800">{food.foodname}</h1>
          <p className="text-gray-600 text-sm mt-2">Category: {food.foodCategory}</p>
          <p className="text-gray-600 text-sm mt-1">Origin: {food.Origin}</p>
          <p className="text-gray-600 text-sm mt-1">
            Description: {food.Description}
          </p>
          <p className="text-gray-600 text-sm mt-1">Added By: {food.UserName}</p>
          <p className="text-gray-600 text-sm mt-1">
            Price: <span className="text-green-600 font-semibold">${food.price}</span>
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Quantity Available:{" "}
            {food.Quantity > 0 ? (
              <span className="text-green-600 font-semibold">{food.Quantity}</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>
          <p className="text-gray-600 text-sm mt-1 mb-4">
            Purchase Count: <span className="font-semibold">{orders.purchaseCount || 0}</span>
          </p>

          {/* Purchase Button */}
          <Link
            to={`/purchase/${food._id}`}
            className={`mt-6 w-full py-3 px-4 rounded-lg font-medium ${
              food.Quantity === 0
                ? "bg-gray-400 cursor-not-allowed text-gray-800"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
            disabled={food.Quantity === 0}
          >
            {food.Quantity === 0 ? "Out of Stock" : "Purchase"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodPage;
