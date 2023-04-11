import React from "react";
import ReactDOM from "react-dom/client";

const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

const start = 0;
const end = 55;

const numbers = arrayRange(start, end, 1);
console.log(numbers);

const containerClass = {
  display: "grid",
  gridTemplateColumns: `repeat(8, 150px)`,
  gridTemplateRows: `repeat(${(numbers.length + 1) / 8}, 150px)`,
  gridGap: "1px",
  alignContent: "center",
};

const containerContainerStyle = {
  display: "flex" /* establish flex container */,
  flexDirection: "column" /* stack flex items vertically */,
  justifyContent: "center" /* center items vertically, in this case */,
  alignItems: "center",
};

const NumberItem = (data) => {
  console.log(data);

  const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  };

  const evenColor = "rgb(0, 192, 119)";
  const oddColor = "rgb(255, 220, 80)";
  const primeColor = "rgb(255, 94, 89)";

  const itemClass = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    placeSelf: "stretch",
    aspectRation: 1,
  };

  const textClass = {
    color: "white",
    textAlign: "center",
    fontSize: "5em",
  };

  if (isPrime(data.number)) {
    itemClass.backgroundColor = primeColor;
  } else if (data.number % 2 === 0) {
    itemClass.backgroundColor = evenColor;
  } else if (data.number % 2 === 1) {
    itemClass.backgroundColor = oddColor;
  }

  return (
    <div style={itemClass}>
      <div style={textClass}>{data.number}</div>
    </div>
  );
};

const Container = (data) => {
  console.log(data);
  const numberList = data.numbers.map((number) => (
    <NumberItem number={number} />
  ));
  return <div style={containerClass}>{numberList}</div>;
};

const Header = () => {
  const headerStyle = {
    textAlign: "center",
  };
  return (
    <header style={headerStyle}>
      <h1>30 Days Of React</h1>
      <h2>Number Generator</h2>
    </header>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <div style={containerContainerStyle}>
        <Container numbers={numbers} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
