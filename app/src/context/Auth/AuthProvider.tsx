import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext"
import login from "./functions/login";
import IUserData from "./interfaces/IUserData";
import IUserRequest from "./interfaces/IUserRequest";

const AuthProvider = ({ children }: { children: JSX.Element }) => {

  const [user, setUser] = useState<IUserData | null>(null!);

  useEffect(() => {
    async function init() {
      const storageUser = localStorage.getItem('user')
      if (isLoaded() && storageUser) {
        setUser(JSON.parse(storageUser))
      }
    }

    init();
  }, [])


  async function signIn(user: IUserRequest) {
    const response = await login(user);

    console.log('kjasghd')

    if (response) {
      setUser(response.user);
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
  }

  async function signOut() {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    setUser(null);
  }

  function isLoaded() {
    const storageUser = localStorage.getItem('user')
    const storageToken = localStorage.getItem('token');
    if (storageToken && storageUser)
      return true;
    return false;
  }
  return (
    <AuthContext.Provider value={{ user, isLoaded, signIn, signOut }} >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider