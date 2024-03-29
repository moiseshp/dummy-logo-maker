import Icon from '../Icon';

const SquaresFilled = (props) => {
  return (
    <Icon {...props}>
      <rect x="8" y="8" width="12" height="12" rx="2" />
      <path d="M8 14.5l6.492 -6.492" />
      <path d="M13.496 20.004l6.504 -6.504l-6.504 6.504z" />
      <path d="M8.586 19.414l10.827 -10.827" />
      <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2" />
    </Icon>
  );
};

export default SquaresFilled;
