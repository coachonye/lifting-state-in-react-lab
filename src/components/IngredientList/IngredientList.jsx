import Ingredient from "../Ingredient/Ingredient";

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={addToBurger} 
          showButton={true}
          buttonText="Add"
        />
      ))}
    </ul>
  );
};

export default IngredientList;

