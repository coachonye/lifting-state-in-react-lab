import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={removeFromBurger} 
            showButton={true}
            buttonText="Remove"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;

