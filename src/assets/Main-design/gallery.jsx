import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const foodItems = [
  {img: "https://i.ibb.co.com/fSxXPz3/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg", name: "Cheese Burger", description: "Juicy beef patty with cheese" },
  {img: "https://i.ibb.co.com/Wvf8GwH/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg", name: "Pepperoni Pizza", description: "Crispy crust with pepperoni toppings" },
  {img: "https://i.ibb.co.com/0KmwvzN/67700-Rich-Pastaforthe-Poor-Kitchen-ddmfs-4x3-2284-220302ec8328442096df370dede357d7.jpg", name: "Creamy Alfredo", description: "Rich and creamy fettuccine pasta" },
  {img: "https://i.ibb.co.com/NC2728h/19511smoked-salmon-sushi-rollfabeveryday4x3-159a22b4d3ac49fe9a146db94b53c930.jpg", name: "Sushi Platter", description: "Fresh sushi with assorted flavors" },
  {img: "https://i.ibb.co.com/JxjNV6n/Simply-Recipes-Easy-Greek-Salad-LEAD-2-4601eff771fd4de38f9722e8cafc897a.jpg", name: "Caesar Salad", description: "Classic Caesar with croutons" },
  {img: "https://i.ibb.co.com/sss8Jkd/images-9.jpg", name: "Grilled Steak", description: "Perfectly grilled to your taste" },
  {img: "https://i.ibb.co.com/phh2Ng9/k-Photo-Recipes-2024-04-tacos-tacos-490.jpg", name: "Spicy Tacos", description: "Mexican tacos with a kick" },
  {img: "https://i.ibb.co.com/MyvSwLj/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg", name: "Fluffy Pancakes", description: "Topped with syrup and berries" },
  {img: "https://i.ibb.co.com/ftHtDCC/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg", name: "Ice Cream Sundae", description: "Cool treat with toppings" },
  {img: "https://i.ibb.co.com/47nrvnd/images-8.jpg", name: "Latte Art", description: "Delicious coffee with a heart" },
];

const FoodGallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="py-8">
      <h2 className="text-center text-3xl font-extrabold mb-10 text-gray-800">Food Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <img
              src={item.img}
            //   alt={item.description}
              className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={foodItems.map((item) => ({ src: item.img }))}
        index={currentIndex}
        animation={{ fadeIn: 250, fadeOut: 250 }}
      />
    </div>
  );
};

export default FoodGallery;
