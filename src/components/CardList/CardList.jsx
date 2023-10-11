import { useSelector } from "react-redux";
import { selectFavorite } from "../../redux/favorites/selectors";
import Card from "../Card";
import { List } from "./CardList.styled";
import { PropTypes } from "prop-types";

export default function CardList({ cars }) {
  const favorites = useSelector(selectFavorite);
  
  return (
    <List>
      {cars.map(car => <Card
        key={car.id}
        car={car}
        isFavorite={favorites.includes(car.id)}
      />)}
    </List>
  )
}

CardList.propTypes = {
  cars: PropTypes.array.isRequired,
}