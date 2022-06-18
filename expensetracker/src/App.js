import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import { History } from "./components/History";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
      </div>
    </div>
  );
}

export default App;
