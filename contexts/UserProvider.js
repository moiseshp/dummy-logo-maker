import { createContext, useContext, useReducer } from 'react';

const UserContext = createContext();

const userReducer = (state, action) => {
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

const user = {
  name: 'John Doe',
  id: '4RQGe7YgWvCEHY0VYji2',
};

// https://dev.to/edisonsanchez/next-js-react-con-context-api-3a05
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, user);
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserProvider;
