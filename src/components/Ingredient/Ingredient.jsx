const Ingredient = ({ ingredient, onClick, showButton, buttonText }) => {
    return (
      <li style={{ backgroundColor: ingredient.color, cursor: "pointer", padding: "8px", margin: "4px", borderRadius: "5px" }}>
        {ingredient.name}
        {showButton && <button onClick={() => onClick(ingredient)}>{buttonText}</button>}
      </li>
    );
  };
  
  export default Ingredient;
  
  