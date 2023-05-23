import { Fragment } from "react";
import mealsImage from "../../assets.meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <header>
        <h1>ReactMeals</h1>
        <Button>Cart</Button>
      </header>
      <div>
        <img src={mealsImage} alt="a table full of delicious food" />
      </div>
    </Fragment>
  );
};

export default Header;
