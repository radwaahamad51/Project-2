import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const AllFoodsPage = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/addfood")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((err) => console.error(err));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredFoods = foods.filter((food) =>
    food.foodname.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Page Title */}
      <div className="relative bg-blue-600 text-white py-16">
        <h1 className="text-4xl font-bold text-center">All Foods</h1>
      </div>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto my-6">
        <input
          type="text"
          placeholder="Search food by name"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Food Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food) => (
          <div
            key={food._id}
            className="bg-white border border-gray-300 rounded-lg shadow-md p-4"
          >
            <img
              src={food.image}
              alt={food.foodname}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{food.foodname}</h2>
            <p className="text-gray-700">Category: {food.foodCategory}</p>
            <p className="text-gray-700">Price: ${food.price}</p>
            <p className="text-gray-700">
              Quantity:{" "}
              {food.Quantity > 0 ? (
                <span>{food.Quantity}</span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
            <p className="text-gray-700">Added by: {food.UserName}</p>

            <Link to={`/food/${food._id}`}>
              <button
                className={`mt-4 w-full py-2 px-4 rounded-lg font-medium ${
                  food.Quantity === 0 || food.UserEmail === user.email
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600 text-white"
                }`}
                disabled={food.Quantity === 0 || food.UserEmail === user.email}
              >
                {food.Quantity === 0
                  ? "Out of Stock"
                  : food.UserEmail === user.email
                  ? "Cannot Purchase Own Item"
                  : "Details"}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoodsPage;
