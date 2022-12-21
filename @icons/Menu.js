import Icon from './Icon';

const Menu = ({ ...rest }) => {
  return (
    <Icon {...rest}>
      <path d="M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" />
    </Icon>
  );
};

export default Menu;
