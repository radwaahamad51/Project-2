import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const PurchaseFood = () => {
    const food = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log(food)

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a purchase object
        const form = e.target;
        const foodname = form.foodname.value;
        const Quantity = form.Quantity.value;
        const price = form.price.value;
        const date = form.date.value;
        const UserName = user?.displayName || 'Anonymous';
        const UserEmail = user?.email || 'No Email';
        const allValue = {
            foodname, Quantity, price, UserName,
            UserEmail
        };
        console.log(allValue);

        fetch('http://localhost:5000/addfood-oders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allValue)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your item has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate(location?.state ? location.state : "/");
            })
    };


    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={food.image}
                    alt={food.foodname}
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800">{food.foodname}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            {/* Food Name */}
                            <div>
                                <label className="block text-gray-600">Food Name</label>
                                <input
                                    type="text"
                                    value={food.foodname}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name='foodname'
                                />
                            </div>

                            {/* Price */}
                            <div>
                                <label className="block text-gray-600">Price</label>
                                <input
                                    type="number"
                                    value={food.price}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name='price'
                                />
                            </div>

                            {/* Quantity */}
                            <div>
                                <label className="block text-gray-600">Quantity</label>
                                <input
                                    type="number"
                                    value={food.Quantity}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name='Quantity'
                                />
                            </div>

                            {/* Buyer Name (Read-only) */}
                            <div>
                                <label className="block text-gray-600">Buyer Name</label>
                                <input
                                    type="text"
                                    value={user?.displayName || 'Anonymous'}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="UserName"
                                />
                            </div>

                            {/* Buyer Email (Read-only) */}
                            <div>
                                <label className="block text-gray-600">Buyer Email</label>
                                <input
                                    type="email"
                                    value={user?.email || 'No Email'}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="UserEmail"
                                />
                            </div>

                            {/* Buying Date */}
                            <div>
                                <label className="block text-gray-600">Buying Date</label>
                                <input
                                    type="text"
                                    value={new Date().toLocaleString()} // Display the current date
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name='date'
                                />
                            </div>

                            {/* Purchase Button */}
                            <button
                                type="submit"
                                className="w-full py-3 px-4 rounded-lg font-medium bg-blue-500 hover:bg-blue-600 text-white"
                            >
                                Purchase
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseFood;
