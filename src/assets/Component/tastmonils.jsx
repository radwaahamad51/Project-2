import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Emily Watson",
    review: "The food here is absolutely amazing! The flavors are incredible, and the service is top-notch.",
    image: "https://i.ibb.co.com/w7rC6s8/images-11.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    review: "A fantastic dining experience. The atmosphere is cozy, and the dishes are bursting with flavor.",
    image: "https://i.ibb.co.com/fFLPmvL/images-12.jpg",
  },
  {
    id: 3,
    name: "Sophia Brown",
    review: "I love this place! The desserts are heavenly, and the chefs are incredibly talented.",
    image: "https://i.ibb.co.com/FV9PL4V/MV5-BYz-Iz-Zm-Vh-Zjgt-NWQw-My00-Ym-Rj-LTg1-Zj-Mt-OTY2-NWMw-ODUw-MDBm-Xk-Ey-Xk-Fqc-Gc-V1.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 bg-gradient-to-br from-teal-500 to-teal-700 rounded-lg shadow-lg text-white text-center space-y-4"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full border-4 border-white shadow-lg"
              />
              <p className="italic text-lg">{testimonial.review}</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

