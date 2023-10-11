import addComa from "../../helpers/addComa";
import { PropTypes } from "prop-types";
import {
  AdditionalItem,
  AdditionalList,
  Box,
  BoxItem,
  BoxP,
  Img,
  ImgWrap,
  Info,
  Text,
  Title,
  Wrapper,
  Link
} from "./CardModal.styled";

export default function CardModal({ car }) {

  return (
    <Wrapper>
      <ImgWrap>
        <Img src={car.img} alt={car.description} />
      </ImgWrap>

      <Info>
        {car.make} <span>{car.model}</span>, {car.year}
      </Info>

      <AdditionalList>
        <AdditionalItem>{car.address.city}</AdditionalItem>
        <AdditionalItem>{car.address.country}</AdditionalItem>
        <AdditionalItem>Id: {car.id}</AdditionalItem>
        <AdditionalItem>Year: {car.year}</AdditionalItem>
        <AdditionalItem>Type: {car.type}</AdditionalItem>
      </AdditionalList>

      <AdditionalList>
        <AdditionalItem>Fuel Consumption: {car.fuelConsumption}</AdditionalItem>
        <AdditionalItem>Engine Size: {car.engineSize}</AdditionalItem>
      </AdditionalList>

      <Text>{car.description}</Text>

      <Title>Accessories and functionalities:</Title>

      <AdditionalList>
        {car.accessories.map(item => (
          <AdditionalItem key={item}>{item}</AdditionalItem>
        ))}
      </AdditionalList>

      <AdditionalList>
        {car.functionalities.map(item => (
          <AdditionalItem key={item}>{item}</AdditionalItem>
        ))}
      </AdditionalList>

        <Title>Rental Conditions: </Title>
      <Box>
        {car.rentalConditions.split('\n').map(item => (
          <BoxItem key={item}>{item}</BoxItem>
        ))}
      </Box>
      
      <BoxP>Mileage: <span>{addComa(car.mileage)}</span></BoxP>
      <BoxP>Price: <span>{car.rentalPrice}</span></BoxP>
      <Link href="tel:+380730000000">Rental car</Link>
    </Wrapper>
  )
}

CardModal.propTypes = {
  car: PropTypes.object.isRequired,
}