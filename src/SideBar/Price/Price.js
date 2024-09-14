import Input from "../../components/Input";

function Price({ handlePrice }) {
  return (
    <div>
      <h2 className="sidebar-title">Price</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handlePrice}
          type="radio"
          name="test3"
          value=""
          defaultChecked
        />
        <span className="checkmark"></span>All
      </label>
      <Input handlePrice={handlePrice} value="50" name="test3" title="$0-50" />
      <Input
        handlePrice={handlePrice}
        value="100"
        name="test3"
        title="$50-100"
      />
      <Input
        handlePrice={handlePrice}
        value="150"
        name="test3"
        title="$100-150"
      />
      <Input
        handlePrice={handlePrice}
        value="200"
        name="test3"
        title="Over 150"
      />
    </div>
  );
}

export default Price;
