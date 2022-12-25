// https://dev.to/edisonsanchez/next-js-react-con-context-api-3a05
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import storage from 'utils/storage';

const LogoContext = createContext(null);

const initLogo = {
  color: '#FF0000',
  fontFamily: 'Montserrat',
  fontWeight: 'regular',
  fontSize: 16,
  letterSpacing: 1,
  backgroundColor: '#00FF00',
  iconId: 'Dolphin',
  iconColor: 'purple',
  layout: 'logo',
  text: 'DummyLogo',
};

const LogoProvider = ({ children }) => {
  const [logo, setLogo] = useState(initLogo);
  const updateLogo = (value) => {
    const data = { ...logo, ...value };
    setLogo(data);
    storage.set(data);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => [logo, updateLogo], [logo]);

  useEffect(() => {
    if (!storage.get()) return;
    setLogo(storage.get());
  }, []);

  return <LogoContext.Provider value={value}>{children}</LogoContext.Provider>;
};

export const useLogo = () => {
  const context = useContext(LogoContext);
  if (!context) {
    throw new Error('useLogo must be used within a LogoProvider');
  }
  return context;
};

export default LogoProvider;
