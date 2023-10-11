import colors from '../../helpers/colors';

export const customStyle = {
  control: baseStyles => ({
    ...baseStyles,
    padding: '6px 18px',
    backgroundColor: colors.input,
    borderRadius: '14px',
    border: 'none',
    outline: 'none',
    fontSize: 18,
    fontWeight: 500,
  }),

  input: baseStyle => ({
    ...baseStyle,
    fontSize: 18,
    fontWeight: 500,
    margin: 0,
    padding: 0,
  }),

  valueContainer: baseStyle => ({
    ...baseStyle,
    margin: 0,
    padding: 0,
  }),

  option: (baseStyle, { isFocused, isSelected }) => ({
    ...baseStyle,
    color: isFocused
      ? colors.textMain
      : isSelected
      ? colors.textSecondary
      : colors.textSecondary02,
    fontSize: 16,
    lineHeight: '1.25',
    padding: 0,
    marginBottom: 8,
    backgroundColor: 'inherit',
  }),

  dropdownIndicator: baseStyle => ({
    ...baseStyle,
    color: colors.textMain,
  }),

  indicatorSeparator: () => ({ display: 'none' }),

  placeholder: baseStyle => ({
    ...baseStyle,
    color: colors.textMain,
  }),

  menu: baseStyle => ({
    ...baseStyle,
    padding: '14px 8px 6px 18px',
    borderRadius: 14,
    border: '1px sold rgba(18, 20, 23, 0.05)',
  }),
};
