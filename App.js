import { Homepage } from "./Components/Page/Homepage";
// import {Store }from './Components/Page/Store';
// import {About }from './Components/Page/About';
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { Product } from "./Components/Page/Product";
// import ProductDetails from "./Components/Page/ProductDetails";
import AuthForm from "./Components/Auth/AuthForm";
import Layout from "./Components/Profile/Layout";
function App() {
  return (
    <>
      <Container>
        <Layout>
        <Navbar />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>

        <Routes>
          <Route path="/authform" element={<AuthForm />} />
        </Routes>
        </Layout>

      </Container>
    </>
  );
}

export default App;
