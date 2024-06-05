import AccordionComponent from "../../components/Home/AccordionComponent/AccordionComponent";
import Banner from "../../components/Home/Banner/Banner";
import BestSelling from "../../components/Home/BestSelling/BestSelling";
import Discount from "../../components/Home/Discount/Discount";
import Features from "../../components/Home/Features/Features";
import OurServices from "../../components/Home/OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <Discount></Discount>
      <BestSelling></BestSelling>
      <Features></Features>
      <AccordionComponent></AccordionComponent>
    </div>
  );
};

export default Home;
