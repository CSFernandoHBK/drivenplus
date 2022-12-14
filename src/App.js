import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SubscriptionsIDPage from "./pages/SubscriptionsPage/SubscriptionsIDPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";
import UpdateUserPage from "./pages/UserPage/UpdateUserPage";
import UserContext from "./context/UserContext"
import UserPage from "./pages/UserPage/UserPage";

export default function App() {
  const [estadoInfoUser, setEstadoInfoUser] = useState();

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
            <Route path="/users/:id" element={<UserPage/>}/>
            <Route path="/users/:id/update" element={<UpdateUserPage/>}/>
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>

    </>
  )
}