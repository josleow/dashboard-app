import { useState, useEffect } from "react";
import "./App.css";


function StockItem(props) {
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentSymbol, setCurrentSymbol] = useState("");


  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+
                props.stockSymbol + "&apikey=VTWCPFMAIXIDRRTR");
      // const data = await fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo")
      // convert the data to json
      const json = await data.json();
      // set state with the result
      setCurrentPrice(json["Global Quote"]["05. price"]);
      setCurrentSymbol(json["Global Quote"]["01. symbol"]);
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);;
  }, [])


  const profitLoss = parseFloat(
    ((currentPrice - props.price) / props.price) * 100
  ).toFixed(2);

  if(currentSymbol != props.stockSymbol){
    return<></>
  }

  if (!currentPrice) {
    return <><div className="loading-text" id="loading">{loading}</div></>;
  }
  

  return (
    <>
      <div className="info" key="{index}">
        <h3>Symbol: {props.stockSymbol}</h3>
        <p>Quantity: {props.quantity}</p>
        <p>Purchase Price: {props.price}</p>
        <p>
          {profitLoss >= 0 ? (
            <span className="text-green">Profit/Loss: {profitLoss}%</span>
          ) : (
            <span className="text-red">Profit/Loss: {profitLoss}%</span>
          )}
        </p>
      </div>
    </>
  );
}

export default StockItem;