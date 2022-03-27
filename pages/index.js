import AdBlock from "../components/AdBlock";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";

export default function Home() {
  return (
    <div className="">
      <Carousel />
      <AdBlock />
      <ProductList />
    </div>
  );
}
