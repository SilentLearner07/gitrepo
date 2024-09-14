function Input({
  handleColor,
  value,
  title,
  color,
  name,
  handleCategory,
  handlePrice,
}) {
  return (
    <>
      {handleColor ? (
        <label className="sidebar-label-container">
          <input
            type="radio"
            name={name}
            onChange={handleColor}
            value={value}
          />
          <span className="checkmark" style={{ backgroundColor: color }}></span>
          {title}
        </label>
      ) : handleCategory ? (
        <label className="sidebar-label-container">
          <input
            type="radio"
            name={name}
            onChange={handleCategory}
            value={value}
          />
          <span className="checkmark" style={{ backgroundColor: color }}></span>
          {title}
        </label>
      ) : handlePrice ? (
        <label className="sidebar-label-container">
          <input
            type="radio"
            name={name}
            onChange={handlePrice}
            value={value}
          />
          <span className="checkmark" style={{ backgroundColor: color }}></span>
          {title}
        </label>
      ) : null}
    </>
  );
}

export default Input;
