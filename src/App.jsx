/* eslint-disable react/prop-types */
import { useState, useEffect} from "react";
import budgetLogo from "./assets/budget.png";
import StockItem from "./StockItem";
import "./App.css";


<StockItem />

function App() {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [stockList, setStockList] = useState([]);
  const [profitLoss, setProfitLoss] = useState([]);
  const [stockSymbol, setStockSymbol] = useState("");



  function handleInputStock(event) {
    return setStockSymbol(event.target.value);
  }
  function handleInputQuantity(event) {
    return setQuantity(event.target.value);
  }
  function handleInputPrice(event) {
    return setPrice(event.target.value);
  }

  function addStock() {
    //clear input fields
    setStockSymbol('');
    setQuantity('');
    setPrice('');
 
   
    setStockList([
      ...stockList,
      {
        stockSymbol: stockSymbol,
        quantity: quantity,
        price: price
      },
    ]);
  }

  return (
    <>
      <img src={budgetLogo} className="logo" alt="Financial Dashboard" />
      <h1 className="header">Financial Dashboard</h1>
      <div className="dashboard">
        <input
          value={stockSymbol}
          placeholder="Stock Symbol"
          className="dashboard-input"
          onChange={handleInputStock}
        />
        <input
          value={quantity}
          placeholder="Quantity"
          className="dashboard-input"
          onChange={handleInputQuantity}
        />
        <input
          value={price}
          placeholder="Purchase Price"
          className="dashboard-input"
          onChange={handleInputPrice}
        />

        <button onClick={addStock}>Add Stock</button>
      </div>
      <div className="stock-list">
        <h2 class="header">Stock List</h2>
        {stockList.length === 0 ? (
          <p>No stocks added yet</p>
        ) : (
          stockList.map((stock) => (
            <StockItem
              key={stock.stockSymbol}
              stockSymbol={stock.stockSymbol}
              quantity={stock.quantity}
              price={stock.price}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
