import React, { useContext, } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const PurchaseFood = () => {
    const food = useLoaderData();
    const { image }=food
    console.log(food)
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const maxQuantity = Math.min(20, food.Quantity);







    const handleSubmit = (e) => {
        e.preventDefault();


        const form = e.target;
        const foodname = form.foodname.value;
        const Quantity = parseInt(form.Quantity.value, 10);
        const price = form.price.value;
        const date = form.date.value;
        const UserName = user?.displayName || "Anonymous";
        const UserEmail = user?.email || "No Email";

        if (Quantity > maxQuantity) {
            Swal.fire({
                icon: "error",
                title: "Invalid Quantity",
                text: `You can only purchase up to ${maxQuantity} items.`,
            });
            return;
        }


        const allValue = {
            image,
            foodname,
            Quantity,
            price,
            UserName,
            UserEmail,
        };

        fetch("http://localhost:5000/addfood-oders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(allValue),
        })
            .then((res) => res.json())
            .then((data) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your item has been saved",
                    showConfirmButton: false,
                    timer: 1500,
                });

                navigate(location?.state ? location.state : "/");
            });
    };

    const isOwnItem = food.UserEmail === user?.email;
    const isOutOfStock = food.Quantity === 0;

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
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">

                            <div>
                                <label className="block text-gray-600">Food Name</label>
                                <input
                                    type="text"
                                    value={food.foodname}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="foodname"
                                />
                            </div>


                            <div>
                                <label className="block text-gray-600">Price</label>
                                <input
                                    type="number"
                                    value={food.price}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="price"
                                />
                            </div>


                            <div>
                                <label className="block text-gray-600">Quantity</label>
                                <input
                                    type="number"
                                    max={maxQuantity}
                                    min={1}
                                    placeholder={`Max: ${maxQuantity}`}
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="Quantity"
                                    required
                                    disabled={isOwnItem || isOutOfStock}
                                />
                            </div>


                            <div>
                                <label className="block text-gray-600">Buyer Name</label>
                                <input
                                    type="text"
                                    value={user?.displayName || "Anonymous"}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="UserName"
                                />
                            </div>


                            <div>
                                <label className="block text-gray-600">Buyer Email</label>
                                <input
                                    type="email"
                                    value={user?.email || "No Email"}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="UserEmail"
                                />
                            </div>


                            <div>
                                <label className="block text-gray-600">Buying Date</label>
                                <input
                                    type="text"
                                    value={new Date().toLocaleString()}
                                    disabled
                                    className="w-full px-4 py-2 border rounded-lg text-gray-600"
                                    name="date"
                                />
                            </div>


                            <button
                                type="submit"
                                className={`w-full py-3 px-4 rounded-lg font-medium ${isOwnItem || isOutOfStock
                                    ? "bg-gray-400 cursor-not-allowed text-gray-800"
                                    : "bg-blue-500 hover:bg-blue-600 text-white"
                                    }`}
                                disabled={isOwnItem || isOutOfStock}
                            >
                                {isOutOfStock
                                    ? "Out of Stock"
                                    : isOwnItem
                                        ? "Cannot Purchase Own Item"
                                        : "Purchase"}
                            </button>


                            {isOwnItem && (
                                <p className="text-red-500 mt-4">
                                    You cannot purchase your own added item.
                                </p>
                            )}
                            {isOutOfStock && (
                                <p className="text-red-500 mt-4">This item is out of stock.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseFood;
