import Button from "../components/Button";
import "./Recommended.css";

function Recommended({ handleClick }) {
  return (
    <div className="recommended">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Button handleClick={handleClick} value="" title="All products" />
        <Button handleClick={handleClick} value="Nike" title="Nike" />
        <Button handleClick={handleClick} value="Adidas" title="Adidas" />
        <Button handleClick={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  );
}

export default Recommended;
