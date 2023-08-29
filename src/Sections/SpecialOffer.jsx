import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={787}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span> Offer
        </h2>

        <p className=" mt-4 lg:max-w-lg info-text ">
          Step into savings with our exclusive special offer on shoes! Discover
          a world of style, comfort, and affordability as we present you with an
          irresistible opportunity to upgrade your footwear collection.
        </p>
        <p className="mt-6 lg:max-w-lg info-text ">
          Our dedication to details and excillence ensures your stisfaction
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button lable="Shop now"  iconURL={arrowRight}/>
          <Button lable="Learn More" backgroundColor ="bg-white" borderColor="border-slate-gray" textColor="text-slate-grey"/>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
