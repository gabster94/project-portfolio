import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";

export const HeroImage = () => {
  return (
    <div className="hero-images">
      <img src={image1} alt="Hero image" />
      <img src={image2} alt="Hero image" />
      <img src={image3} alt="Hero image" />
    </div>
  );
};
