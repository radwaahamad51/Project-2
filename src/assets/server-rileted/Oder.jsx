import React, { useEffect, useState } from 'react';
import useAuth from '../hooks';
import moment from 'moment';
import Swal from 'sweetalert2';

// import moment from 'moment';


const Orders = () => {
   // Fetch orders from loader

  const { user } = useAuth()
    const [orders, setOrders] = useState([]);


  useEffect(() => {
    if (user?.email) {
        fetch(`http://localhost:5000/addfood-oder?email=${user.email}`)
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
            fetch(`http://localhost:5000/addfood-oder/${id}`, {
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
    <div className="min-h-screen  py-12">
      <div className="max-w-6xl mx-auto  shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">My Orders</h1>
        {orders.length > 0 ? (
          <table className="min-w-full ">
            <thead>
              <tr className="w-full border-b">
                <th className="py-2 px-4 text-left">Food Info</th>
                <th className="py-2 px-4 text-left">Owner</th>
                <th className="py-2 px-4 text-left">Price</th>
                <th className="py-2 px-4 text-left">Buying Date</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <img
                      src={order.foodImage}
                      alt={order.foodName}
                      className="w-12 h-12 object-cover mr-4"
                    />
                    <span>{order.foodName}</span>
                  </td>
                  <td className="py-2 px-4">{order.foodOwner}</td>
                  <td className="py-2 px-4">${order.price}</td>
                  <td className="py-2 px-4">
                    {moment(order.buyingDate).format('MMMM Do YYYY, h:mm:ss a')}
                  </td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-600">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
