import { createContext, useContext, useReducer } from 'react';

const LogoContext = createContext();

const logoReducer = (state, action) => {
  switch (action.type) {
    case 'increment': {
      return { name: 'Moisés Huaringa' };
    }
    case 'decrement': {
      return { name: 'Eduardo' };
    }
    default: {
      throw new Error('action type not found');
    }
  }
};

const initLogo = {
  color: 'red',
  fontFamily: 'Arial',
  backgroundColor: 'yellow',
  iconName: 'IconName',
  iconColor: 'purple',
  id: '4RQGe7YgWvCEHY0VYji2',
  layout: 'logo',
  text: 'DummyLogo',
};

// https://dev.to/edisonsanchez/next-js-react-con-context-api-3a05
const LogoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logoReducer, initLogo);
  const value = { state, dispatch };
  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (context === undefined) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};

export default LogoProvider;
