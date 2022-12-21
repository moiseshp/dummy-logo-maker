import Icon from './Icon';

const Close = ({ ...rest }) => {
  return (
    <Icon {...rest}>
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7.5 7.5 6 6" />
        <path d="m13.5 7.5-6 6" />
      </g>
    </Icon>
  );
};

export default Close;
