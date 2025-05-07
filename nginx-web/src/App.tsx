import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col">
        <div className="h-full flex flex-col justify-between bg-gradient-to-br from-sky-50 to-indigo-100">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
