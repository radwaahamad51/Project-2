import React, { useEffect, useState,  } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import useAuth from "../hooks";
// import moment from "moment";


const UserOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/addfood-food?email=${user.email}`)
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

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addfood-foods/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your item has been deleted.", "success");
                            setOrders((prevOrders) => prevOrders.filter((order) => order._id !== id));
                        }
                    })
                    .catch((error) => {
                        console.error("Failed to delete the order:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "Failed to delete the item. Please try again later.",
                        });
                    });
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto my-8 p-6 border border-gray-300 rounded shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Your {orders.length}</h2>
            {orders.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {orders.map((order) => (
                        <div key={order._id} className="p-4 border border-gray-200 rounded shadow">
                            <img
                                src={order.image}
                                alt={order.foodname}
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-lg font-semibold mb-2">{order.foodname}</h3>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Price:</strong> ${order.price}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Quantity:</strong> {order.Quantity}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Category:</strong> {order.foodCategory}
                            </p>
                            <p className="text-sm text-gray-600 mb-1">
                                <strong>Owner:</strong> {order.UserName} ({order.UserEmail})
                            </p>
                            {/* <p className="text-sm text-gray-600 mb-4">
                                <strong>Ordered At:</strong> {moment(order.buyingDate).format("MMMM Do YYYY, h:mm:ss a")}
                            </p> */}
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                onClick={() => handleDelete(order._id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">You have no orders yet.</p>
            )}
        </div>
    );
};

export default UserOrders;
