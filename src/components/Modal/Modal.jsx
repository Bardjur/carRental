import { createPortal } from "react-dom";
import { Close, ModalBlock, Overlay } from "./Modal.styled";
import sprite from '../../assets/imgs/sprite.svg';
import { PropTypes } from "prop-types";
import { useEffect } from "react";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ closeModal, children }) {
  useEffect(() => {
    const handlerKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    document.addEventListener('keydown', handlerKey);

    return () => {
      document.removeEventListener('keydown', handlerKey);
    }
  }, [closeModal]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }
  return createPortal((
    <Overlay onClick={handleClick}>
      <ModalBlock>
        <Close onClick={closeModal}>
          <use href={`${sprite}#close`}></use>
        </Close>

        {children}
      </ModalBlock>
    </Overlay>
  ), modalRoot)
}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  closeModal: PropTypes.func.isRequired,
};
