import React from "react";
import TextAnimation from "./components/animations/TextAnimation";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import Top from './components/Top/Top'
import Works from "./components/Works/Works";
function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Top />
        <Works />
      </main>
      <Footer />
    </>
  );
}

export default App;
