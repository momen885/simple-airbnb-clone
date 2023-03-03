import imgGalary from "../assets/Airbnb Experiences (Copy)/Group 77.png";

const Hero = () => {
  return (
    <section className="hero">
      <img src={imgGalary} alt="image grid" className="hero--photo" />
      <h1 className="hero--header">Online Experiences</h1>
      <p className="hero--text">
        Join unique interactive activities led by on-of-a-kind hosts-all without
        leaving home.
      </p>
    </section>
  );
};
export default Hero;
