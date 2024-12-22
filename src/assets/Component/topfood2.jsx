
import { Link } from "react-router-dom";


const EqCard = ({ items,  }) => {
    const { _id, image, foodname, foodCategory, purchaseCount, price, Description } = items;
    console.log(_id)

    
    return (
        <div >
            <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        🍴 Top Selling Foods 🍴
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
       
          <div
           
            className="group relative bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative">
              <img
                src={image}
                alt={foodname}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-yellow-400 text-white text-sm px-3 py-1 rounded-lg font-bold shadow-md">
                {purchaseCount} Sold
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-700 truncate">
                {foodname}
              </h3>
              <p className="text-sm text-gray-500">{foodCategory}</p>
              <p className="text-lg text-green-600 font-semibold">
                ${price.toFixed(2)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {Description.slice(0, 50)}...
              </p>
              <button
                onClick={() => navigate(`/food/${_id}`)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                View Details
              </button>
            </div>
          </div>
       
      </div>
      <div className="text-center mt-12">
        <Link
          to={`/addfood/${_id}`}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300"
        >
          See All Foods
        </Link>
      </div>
        </div>
    );
};

export default EqCard;