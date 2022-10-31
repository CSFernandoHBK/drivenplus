import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SubscriptionsIDPage from "./pages/SubscriptionsPage/SubscriptionsIDPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";
import UpdateUserPage from "./pages/UpdateUserPage/UpdateUserPage";
import UserContext from "./context/UserContext"
import { useEffect } from "react";

export default function App() {
  const [estadoInfoUser, setEstadoInfoUser] = useState();
  
  useEffect(() => {
    const infoUser = JSON.parse(localStorage.getItem("infoUser"));
    console.log(infoUser);
  }, [estadoInfoUser])

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <UserContext.Provider value={estadoInfoUser}>
          <Routes>
            <Route path="/" element={<LoginPage setEstadoInfoUser={setEstadoInfoUser}/>} />
            <Route path="/sign-up" element={<RegistrationPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscriptions/:id" element={<SubscriptionsIDPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/users/:id/update" element={<UpdateUserPage/>}/>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    </>
  )
}