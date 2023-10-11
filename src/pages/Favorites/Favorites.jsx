import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/cars/selectors";
import { selectFavorite } from "../../redux/favorites/selectors";
import { fetchFavoritesCars } from "../../redux/cars/operation";
import { useEffect } from "react";
import { H2, Wrapper } from "./Favorites.styled";
import CardList from "../../components/CardList";

export default function Favorites() {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavoriteCars);
  const favorites = useSelector(selectFavorite);

  useEffect(() => {
    dispatch(fetchFavoritesCars(favorites.join('|')));
  }, [dispatch,favorites]);

  return (
    <Wrapper>
      {favoriteCars.length
        ? <CardList cars={ favoriteCars }/>
        : <H2>There are no favorites yet</H2>
      }
    </Wrapper>
  )
}