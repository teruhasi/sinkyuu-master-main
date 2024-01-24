import Header from "./components/Header";
import Footer from "./components/Footer";
import Letgo from "./components/Letgo";
import Hamon from "./components/Hamon";
import Rain from "./components/Rain";
// import Insuta from "./components/insuta";
import Top from "./components/Top";
import Bg from "./components/Bg";

function App() {

  return (
    <>
      <Bg/>
      <Header />
      <Hamon />
      <main>
        <Top/>
        <Rain/>
        {/* <Fv />
        <Bfaf /> */}
        <Letgo />
        {/* <Insuta/> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
