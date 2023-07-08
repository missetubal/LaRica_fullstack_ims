import { Header } from "./components/Header/Header.component";
import { Orders } from "./components/Orders/Orders.component";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}

export default App;
