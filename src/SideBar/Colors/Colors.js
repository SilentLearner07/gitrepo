import Input from "../../components/Input";

function Colors({ handleColor }) {
  return (
    <div>
      <h2 className="sidebar-title">Colors</h2>
      <label className="sidebar-label-container">
        <input
          onChange={handleColor}
          type="radio"
          name="test2"
          value=""
          defaultChecked
        />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleColor={handleColor}
        value="black"
        title="black"
        name="test2"
        color="black"
      />
      <Input
        handleColor={handleColor}
        value="blue"
        title="blue"
        name="test2"
        color="blue"
      />
      <Input
        handleColor={handleColor}
        value="green"
        title="green"
        name="test2"
        color="green"
      />
      <Input
        handleColor={handleColor}
        value="red"
        title="red"
        name="test2"
        color="red"
      />
      <Input
        handleColor={handleColor}
        value="white"
        title="White"
        name="test2"
        color="white"
      />
    </div>
  );
}

export default Colors;
