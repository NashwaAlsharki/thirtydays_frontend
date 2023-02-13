import React, { createContext, useState } from 'react';

interface UserContextProps {
  userId: string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextProps>({
  userId: '',
  setUserId: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState('');

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};