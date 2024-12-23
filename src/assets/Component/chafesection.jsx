import React from "react";

const chefs = [
  {
    id: 1,
    name: "Chef Alex Johnson",
    specialty: "Italian Cuisine",
    bio: "Master of authentic pasta dishes and wood-fired pizzas.",
    image: "https://i.ibb.co.com/XpBkckH/reddotalexjohnson-fullsize-story1.jpg",
  },
  {
    id: 2,
    name: "Chef Maria Lopez",
    specialty: "Desserts & Pastries",
    bio: "Creating magic with sugar, flour, and chocolate.",
    image: "https://i.ibb.co.com/TtX3nvP/images-10.jpg",
  },
  {
    id: 3,
    name: "Chef Liam Patel",
    specialty: "Fusion Cuisine",
    bio: "Innovating dishes with a mix of global flavors.",
    image: "https://i.ibb.co.com/g6DVzHN/IMG-5740.jpg",
  },
];

const ChefSpotlight = () => {
  return (
    <section className="bg-gradient-to-r from-emerald-200 via-white to-emerald-200 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Meet Our Expert Chefs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center space-y-2">
                <h3 className="text-xl font-bold text-gray-700 group-hover:text-emerald-600">
                  {chef.name}
                </h3>
                <p className="text-sm text-gray-600">{chef.specialty}</p>
                <p className="text-gray-500 text-sm">{chef.bio}</p>
              </div>
              <div className="absolute inset-0 bg-emerald-600 bg-opacity-0 group-hover:bg-opacity-80 transition duration-300 flex items-center justify-center">
                <h4 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                  {chef.specialty}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefSpotlight;
