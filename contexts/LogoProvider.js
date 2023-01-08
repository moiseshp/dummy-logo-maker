import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import storage from 'utils/storage';

const LogoContext = createContext(null);

const initLogo = {
  color: '#ffffff',
  fontFamily: 'Courier_Prime',
  fontWeight: 'bold',
  fontSize: 60,
  letterSpacing: 1,
  backgroundColor: '#0033FF',
  iconId: 'Fingerprint',
  iconColor: '#ffffff',
  iconSize: 96,
  layout: 'Icon-Left',
  text: 'Logotype',
  padding: 70,
  gap: 25,
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
