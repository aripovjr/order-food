import "./App.css";
import Header from "./component/Header";
import OrderList from "./component/OrderList";
import IntroDescription from "./component/IntroDescription";

function App() {
  return (
    <div className="App">
      <Header />
      <IntroDescription />
      <OrderList />
    </div>
  );
}

export default App;
