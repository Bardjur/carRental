import { Caption, Ipt, Wrapper } from "./Input.styled";
import { PropTypes } from "prop-types";

export default function Input({caption, ...props}) {
  return (
    <Wrapper not_radius={props.not_radius}>
      <Caption>{caption}</Caption>
      <Ipt {...props} />
    </Wrapper>
  )
}

Input.propTypes = {
  caption: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder:PropTypes.string,
  style: PropTypes.object,
  not_radius: PropTypes.string,
}