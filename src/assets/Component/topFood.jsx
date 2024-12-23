import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BannerPage from "./banner";
import ChefSpotlight from "./chafesection";
import Testimonials from "./tastmonils";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/addfood")
      .then((res) => res.json())
      .then((data) => {
        // Sort by purchaseCount and take the top 6
        const sortedFoods = data
          .sort((a, b) => b.purchaseCount - a.purchaseCount)
          .slice(0, 6);
        setTopFoods(sortedFoods);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        🍴 Top Selling Foods 🍴
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {topFoods.map((food) => (
          <div
            key={food._id}
            className="group relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={food.image}
                alt={food.foodname}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-white text-sm px-3 py-1 rounded-lg font-bold shadow-md">
                {food.purchaseCount} Sold
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700 truncate">
                {food.foodname}
              </h3>
              <p className="text-sm text-gray-500">{food.foodCategory}</p>
              <p className="text-lg text-green-600 font-semibold">
                ${food.price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {food.Description.slice(0, 50)}...
              </p>
              <Link
                
                to={`/addfood/${food._id}`}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          to={"/AllFoods/:id"}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
        >
          See All Foods
        </Link>
      </div>

      <div className="mt-8 mb-8">
        <BannerPage></BannerPage>
      </div>
      <div>
        <ChefSpotlight></ChefSpotlight>
      </div>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default TopFoods;
