import Select from 'react-select';
import { customStyle } from './SelectIpt.styled';
import { PropTypes } from "prop-types";

export default function SelectIpt(props) {
  return (
    <Select
      {...props}
      styles= {customStyle}
    />
  );
}

SelectIpt.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder:PropTypes.string,
}
