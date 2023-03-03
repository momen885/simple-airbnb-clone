import zack from "../assets/image-12.png";
import star from "../assets/Star-1.png";

const SingleCard = () => {
  return (
    <div className="card">
      <img src={zack} alt="zeferes img" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="star" />
        <span>5.0</span>
        <span className="gray"> (6) . </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with katie Zaferes</p>
      <p>
        <strong> From $136 </strong> / person
      </p>
    </div>
  );
};
export default SingleCard;
