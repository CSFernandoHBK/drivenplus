import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyles";
import AuthProvider from "./context/auth";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import SubscriptionsIDPage from "./pages/SubscriptionsPage/SubscriptionsIDPage";
import SubscriptionsPage from "./pages/SubscriptionsPage/SubscriptionsPage";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/sign-up" element={<RegistrationPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/subscriptionsid" element={<SubscriptionsIDPage/>}/>
            <Route path="/home" element={<HomePage/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}