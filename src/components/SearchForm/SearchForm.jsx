import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input";
import SelectIpt from "../SelectIpt";
import { BrandWrap, Caption, Form, InputWrap, PriceWrap, SelectsWrap } from "./SearchForm.styled";
import { selectBrand } from "../../redux/filter/selectors";
import { useEffect, useState } from "react";
import { fetchBrand } from "../../redux/filter/operation";
import { clearFilter, setFilter } from "../../redux/filter/slice";


export default function SearchForm() {
  const dispatch = useDispatch();
  const brandData = useSelector(selectBrand);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  useEffect(() => {
    dispatch(fetchBrand());
  }, [dispatch])

  useEffect(() => {
    dispatch(clearFilter());
  }, [dispatch])

  const options = brandData.map(item => ({ value: item, label: item}))

  const priceData = [...Array(15)].map((_, i) => {
    const price = (i + 1) * 10;
    return { value: price, label: price}
  });

  const handleSubmit = e => {
    e.preventDefault()
    const filter = { brand, price, from, to }
    dispatch(setFilter(filter))
  }

  return (
    <Form onSubmit={handleSubmit}>
      <SelectsWrap>
        <BrandWrap>
          <Caption>Car brand</Caption>
          <SelectIpt
            onChange={e => {setBrand(e.value)}}
            options= {options}
            placeholder= 'Enter the text'
          />
        </BrandWrap>
        <PriceWrap>
        <Caption>Price/ 1 hour</Caption>
          <SelectIpt
            onChange={e => { setPrice(e.value) }}
            options= {priceData}
            placeholder= 'To $'
          />
        </PriceWrap>
      </SelectsWrap>

      <InputWrap>
        <Caption>Сar mileage / km</Caption>
        <Input caption="From" not_radius="right" onChange={e => { setFrom(e.target.value) }} type="number"/>
        <Input caption="To" not_radius="left" onChange={e => { setTo(e.target.value) }} style={{paddingLeft:38}} type="number"/>
      </InputWrap>

      <Button type="submit" style={{width:136, padding:15}}>Search</Button>
    </Form>
  )
}