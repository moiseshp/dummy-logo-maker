import Icon from '../Icon';

const Typography = (props) => {
  return (
    <Icon {...props}>
      <line x1="4" y1="20" x2="7" y2="20" />
      <line x1="14" y1="20" x2="21" y2="20" />
      <line x1="6.9" y1="15" x2="13.8" y2="15" />
      <line x1="10.2" y1="6.3" x2="16" y2="20" />
      <polyline points="5 20 11 4 13 4 20 20" />
    </Icon>
  );
};

export default Typography;
