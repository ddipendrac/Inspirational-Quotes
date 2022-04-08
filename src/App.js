import { QuotesProvider } from "./components/QuotesContext";
import Navbar from "./components/Navbar";
import Quotations from "./components/Quotations";

function App() {
  return (
    <QuotesProvider>
      <div className="relative">
       <Navbar />
       <Quotations />
      </div>
    </QuotesProvider>
  );
}

export default App;
