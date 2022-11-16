import { createContext, useState } from "react";

// 1 etap context yaratish
export const AuthContext = createContext();

// 2 etap Provider yaratish
function AuthProvider(props) {
  const [currentUser, setCurrentUser] = useState({
    name: "Diyorbek",
    city: "Tashkent"
  });
  const myvalue = { currentUser, setCurrentUser };
  return (
    <AuthContext.Provider value={myvalue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
