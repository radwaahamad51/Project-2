import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import useAuth from "../hooks";

const AddFood = () => {
   const {user} = useAuth();
   const { id }= useParams();
   console.log(id)
    // const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const foodname = form.foodname.value;
        const image = form.image.value;
        const foodCategory = form.foodCategory.value;
        const Quantity = form.Quantity.value;
        const price = form.price.value;
        const Origin = form.Origin.value;
        const Description = form.Description.value;
      
        const UserName = user?.displayName || 'Anonymous';
        const UserEmail = user?.email || 'No Email';
        const allValue = {
            foodname, image, foodCategory, Quantity, price, Origin, Description,  UserName,
            UserEmail
        };
        console.log(allValue);

       

        fetch('http://localhost:5000/addfood-foods', {
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

    }

  return (
    <div className="max-w-lg mx-auto my-8 p-6 border border-gray-300 rounded shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Food Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Food Name</label>
          <input
            type="text"
            
           
            className="w-full p-2 border border-gray-300 rounded"
            name="foodname"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Food Image URL</label>
          <input
            type="url"
           
            className="w-full p-2 border border-gray-300 rounded"
            name="image"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Food Category</label>
          <input
            type="text"
           
           
            className="w-full p-2 border border-gray-300 rounded"
            name="foodCategory"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Quantity</label>
          <input
            type="number"
           
            className="w-full p-2 border border-gray-300 rounded"
            name="Quantity"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Price</label>
          <input
            type="number"
           
            name="price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Food Origin (Country)</label>
          <input
            type="text"
           
            className="w-full p-2 border border-gray-300 rounded"
            name="Origin"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold">Description</label>
          <textarea
           
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            name="Description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Description</label>
         <input type="text" 
           value={user?.displayName || 'Anonymous'}
           
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            name="UserName"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Description</label>
         <input 
           type="email"
           value={user?.email || 'No Email'}
           
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            name="UserEmail"
            readOnly
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
