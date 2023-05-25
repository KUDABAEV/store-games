import {Routes, Route} from "react-router-dom";
import {Homepage} from "./pages/home-page";
import {Header} from "./components/header";
import {GamePage} from "./pages/game-page";
import {OrderPage} from "./pages/order-page";

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path="/app/:title" element={<GamePage />} />
            <Route path='/order' element={<OrderPage />}/>
        </Routes>
    </div>
  );
}

export default App;
