import React from 'react';
import Box from 'components/commons/Box';

const IconButton = React.forwardRef(({ children, onClick, href, component, box, ...rest }, ref) => {
  return (
    <Box
      ref={ref}
      component={component}
      onClick={onClick}
      href={href}
      width={box}
      height={box}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      {children}
    </Box>
  );
});

IconButton.defaultProps = {
  component: 'button',
  box: 50,
  isCircle: false,
};

export default IconButton;
