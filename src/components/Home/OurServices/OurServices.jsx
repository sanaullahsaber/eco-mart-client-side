import group15Image from "../../../assets/our-services/Group 15.png";
import homeDeliveryImage from "../../../assets/our-services/home-delivery (1) 1.png";
import shoppingDiscountImage from "../../../assets/our-services/Shopping_Discount_2_.png";
import discountVegetablesImage from "../../../assets/our-services/Group 18.png";

const OurServices = () => {
  const services = [
    {
      id: 1,
      image: group15Image,
      title: "Product from",
      subTitle: "organic farm",
    },
    {
      id: 2,
      image: homeDeliveryImage,
      title: "Free home",
      subTitle: "delivery",
    },
    {
      id: 3,
      image: shoppingDiscountImage,
      title: "Promotion of",
      subTitle: "delivery",
    },
    {
      id: 4,
      image: discountVegetablesImage,
      title: "20% discount",
      subTitle: "on all vegetables",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.id}>
            <div
              style={{
                boxShadow: "5px 5px 50px 0px rgba(0, 0, 0, 0.1)",
                background: " rgb(245, 247, 246)",
              }}
              className="flex items-center rounded-md gap-3 p-4"
            >
              <div className="bg-orange-400 rounded-md p-2">
                <img src={service.image} alt={service.title} />
              </div>
              <div>
                <h6
                  className="text-2xl font-semibold leading-8 capitalize 
              text-lime-600"
                >
                  {service.title}
                </h6>
                <h6
                  className="text-2xl font-semibold leading-8 capitalize 
              text-lime-600"
                >
                  {service.subTitle}
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
