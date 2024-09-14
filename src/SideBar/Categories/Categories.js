import Input from "../../components/Input";
import "./Categories.css";

function Categories({ handleCategory }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          onChange={handleCategory}
          value=""
          defaultChecked
        />
        <span className="checkmark"></span>All
      </label>
      <Input
        handleCategory={handleCategory}
        value="sneakers"
        title="Sneakers"
        name="test"
      />
      <Input
        handleCategory={handleCategory}
        value="flats"
        title="Flats"
        name="test"
      />
      <Input
        handleCategory={handleCategory}
        value="sandals"
        title="Sandals"
        name="test"
      />
      <Input
        handleCategory={handleCategory}
        value="heels"
        title="Heels"
        name="test"
      />
    </div>
  );
}
export default Categories;
