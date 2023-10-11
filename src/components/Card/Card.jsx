import { useState } from "react";
import parceAddress from "../../helpers/parceAddress";
import Modal from "../Modal";
import { PropTypes } from "prop-types";
import { AdditionalItem, AdditionalList, Heart, Img, ImgWrap, Info, ListBtn, Wrapper } from "./Card.styled";
import CardModal from "../CardModal";
import sprite from '../../assets/imgs/sprite.svg';
import { useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice";
import noImage from '../../assets/imgs/no-image.jpg'

export default function Card({ car, isFavorite }) {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLike, setIsLike] = useState(isFavorite)
  const address = parceAddress(car.address);
  const handleClick = () => { setIsOpenModal(!isOpenModal); }
  const handleHeartClick = () => {
    if (!isLike) {
      dispatch(addFavorite(car.id))
    } else {
      dispatch(removeFavorite(car.id))
    }
    setIsLike(!isLike);
  }

  return (
    <Wrapper>
      <ImgWrap>
        <Img src={car.img? car.img : noImage} alt={car.description} />
        <Heart onClick={handleHeartClick}>
          <use href={`${sprite}#heart${isLike ? 2 : 1}`}></use>
        </Heart>
      </ImgWrap>
      <Info>
        <p>{car.make} <span>{car.model}</span>, {car.year}</p>
        <p>{car.rentalPrice}</p>
      </Info>
      <AdditionalList>
        <AdditionalItem>{address.city}</AdditionalItem>
        <AdditionalItem>{address.country}</AdditionalItem>
        <AdditionalItem>{car.rentalCompany}</AdditionalItem>
        <AdditionalItem>{car.type}</AdditionalItem>
        <AdditionalItem>{car.model}</AdditionalItem>
        <AdditionalItem>{car.id}</AdditionalItem>
        <AdditionalItem>{car.functionalities?.[0]}</AdditionalItem>
      </AdditionalList>
      <ListBtn onClick={handleClick}>Learn more</ListBtn>
      {isOpenModal && (
        <Modal closeModal={handleClick}>
          <CardModal car={{...car, address}} />
        </Modal>
      )}
    </Wrapper>
  )
}

Card.propTypes = {
  car: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool,
}