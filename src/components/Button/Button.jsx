import { Btn } from "./Button.styled";
import { PropTypes } from "prop-types";

export default function Button({ children, ...prop }) {
  return (
    <Btn {...prop}>
      {children}
    </Btn>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  style: PropTypes.object,
}