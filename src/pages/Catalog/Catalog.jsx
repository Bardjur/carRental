import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operation";
import { selectCars, selectIsLastPage } from "../../redux/cars/selectors";
import { Btn, Wrapper } from "./Catalog.styled";
import SearchForm from "../../components/SearchForm";
import CardList from "../../components/CardList/CardList";
import { filteredCars } from "../../helpers";
import { selectFilter } from "../../redux/filter/selectors";

export default function Catalog() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const isLastPage = useSelector(selectIsLastPage);

  useEffect(() => {
    dispatch(fetchCars({page:1}));
  }, [dispatch]);

  const handleClick = () => {
    dispatch(fetchCars({page: page + 1}));
    setPage(page + 1);
  }

  const filter = useSelector(selectFilter);

  const carsResult = useMemo(() => filteredCars(cars, filter), [cars, filter]);


  return (
    <Wrapper>
      <SearchForm />
      <CardList cars={ carsResult } />

      {!isLastPage && <Btn type="button" onClick={handleClick}>Load more</Btn>}
    </Wrapper>
  )
}