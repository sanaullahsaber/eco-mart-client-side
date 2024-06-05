
const Blog = () => {
  const blogs = [
    {
      id: 1,
      image:
        "https://greengrocery.com.bd/wp-content/uploads/2022/09/png-dates-mb-2-595x595-1.png",
      title: "Benefits of Dates",
      description:
        "Dates are an extremely delicious and well-known fruit. It is rich in fructose and glycemic content. It increases sugar levels in the blood. Dates are considered as an alternative to sugar. They are a good source of energy. So, consuming dates helps to alleviate fatigue. They contain plenty of Vitamin B, which helps in increasing the efficiency of the nervous system. Regarding the nutritional elements of dates, it is said that there are 90 calories in four or 30 grams of dates, one gram of protein, 13 milligrams of calcium, and 2.8 grams of fiber. Additionally, dates contain many other nutritional elements. For example, Khurma dates.",
    },
    {
      id: 2,
      image:
        "https://greengrocery.com.bd/wp-content/uploads/2022/09/Pretty-chai-tea-cropped-595x278-1.jpg",
      title: "Benefits of spice tea",
      description:
        "Who does not love to drink two or four cups of tea every day? There are very few people who do not love to touch their lips to a cup of tea in the middle of a hundred activities, tiredness or alchemy, chatting, entertaining guests at home or office and generally at any time of the day. Many people cannot start their morning without drinking a cup of tea. Because with a cup of tea the start of the day is beautiful, in the same way a cup of tea in the middle of the day's work removes all the fatigue of the body. Green Grocery's spice tea usually contains cardamom, cinnamon, cloves, saffron, bay leaf, etc. and 10 other spices that are rich in herbal properties. These spices contain vitamin B, vitamin C, potassium, magnesium, carotene and essential minerals that bring additional health benefits. The amount of caffeine in this tea is very little. According to Ayurvedic theory, the ingredients used in masala tea refresh and invigorate the body and keep the mind cheerful.",
    },
    {
      id: 3,
      image:
        "https://samakal.com/media/imgAll/uploads/2019/03/online/photos/pic-4-5c80d905135ce.jpg",
      title: "The qualities of bell pepper",
      description:
        "The food market thrives on adulterated products, the same is true of mustard oil. Unscrupulous traders mix nominal mustard and cheap spandel oil with toxic chemicals, dry chilli powder, onion powder, mustard and yeast chemicals to make adulterated oil due to which we are facing deadly health risks. But with a little effort you can tell the difference between pure and adulterated mustard oil, how - without looking at it. You can test with your hands. Rub the oil on your palms well. If after rubbing the hands, a different smell comes out or you see a different color, then you will know that it is not pure, something sticky has been added to it. Keep a cup of mustard oil in the fridge for two to three hours. When you take out the cup, if you see white color floating on the oil then you have to understand that it is adulterated oil.You make a mixture by mixing 5 ml of mustard oil with 5 ml of nitric acid in a test tube. If you see, the color is unchanged then the oil is pure. And if you see that it is red then it is adulterated oil.If you find adulterated mustard oil in the kitchen, discard it immediately, search, slowly and carefully select the right oil. All the best to you and your family stay safe.",
    },
    {
      id: 4,
      image:
        "https://cdn.shopify.com/s/files/1/0552/5159/9557/files/4.jpg?v=1635252453",
      title: "How to recognize adulterated mustard oil",
      description: "The food market thrives on adulterated products, the same is true of mustard oil. Unscrupulous traders mix nominal mustard and cheap spandel oil with toxic chemicals, dry chilli powder, onion powder, mustard and yeast chemicals to make adulterated oil due to which we are facing deadly health risks. But with a little effort, you can tell the difference between pure and adulterated mustard oil, without looking at how. You can test with your hands. Rub the oil on your palms well. If after rubbing the hands, a different smell comes out or you see a different color, then you will know that it is not pure, something sticky has been added to it. Keep a cup of mustard oil in the fridge for two to three hours. When you take out the cup, if you see white color floating on the oil, then you have to understand that it is adulterated oil. You make a mixture by mixing 5 ml of mustard oil with 5 ml of nitric acid in a test tube. If you see, the color is unchanged then the oil is pure. And if you see that it is red then it is adulterated oil.If you find adulterated mustard oil in the kitchen, discard it immediately, search, slowly and carefully select the right oil. All the best to you and your family stay safe."
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      <p className="text-center text-3xl text-[#3CB814] mb-5">Best Grocers</p>
      <p className="text-5xl font-bold text-center mb-8">Browse Our Grocers</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover object-center"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;