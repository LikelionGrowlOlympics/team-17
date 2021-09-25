import "./App.css";
import { useState } from "react";
import Main from "./components/Main";
import Loading from "./components/Loading";
import Result from "./components/Result";

function App() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [salary, setSalary] = useState(0);
  const [cost, setCost] = useState(0);
  const [car, setCar] = useState([
    { car: "현대", price: 4000, clicked: true },
    { car: "기아", price: 3600, clicked: false },
    { car: "BMW", price: 7000, clicked: false },
    { car: "벤츠", price: 7000, clicked: false },
    { car: "아우디", price: 10000, clicked: false },
    { car: "테슬라", price: 15000, clicked: false },
    { car: "람보르기니", price: 25000, clicked: false },
    { car: "페라리", price: 27000, clicked: false },
  ]);
  const [city, setCity] = useState([
    { city: "서울", price: 84000, clicked: true },
    { city: "경기", price: 53000, clicked: false },
    { city: "인천", price: 36000, clicked: false },
    { city: "강원", price: 20000, clicked: false },
    { city: "세종", price: 55000, clicked: false },
    { city: "부산", price: 33000, clicked: false },
    { city: "경북", price: 17000, clicked: false },
    { city: "충남", price: 22000, clicked: false },
    { city: "대전", price: 31000, clicked: false },
    { city: "충북", price: 19000, clicked: false },
    { city: "전북", price: 20000, clicked: false },
    { city: "전남", price: 19000, clicked: false },
    { city: "대구", price: 39000, clicked: false },
    { city: "울산", price: 31000, clicked: false },
    { city: "광주", price: 31000, clicked: false },
  ]);
  const [save, setSave] = useState(0);
  const [result, setResult] = useState(0);
  const [minResult, setMinResult] = useState(0);

  return (
    <body>
      <header>calcifer</header>
      {isSubmit ? (
        isLoading ? (
          <Result
            setIsSubmit={setIsSubmit}
            setIsLoading={setIsLoading}
            result={result}
            setResult={setResult}
            setMinResult={setMinResult}
            minResult={minResult}
          />
        ) : (
          <Loading />
        )
      ) : (
        <Main
          salary={salary}
          cost={cost}
          save={save}
          car={car}
          city={city}
          setMinResult={setMinResult}
          setIsSubmit={setIsSubmit}
          setSalary={setSalary}
          setCost={setCost}
          setCar={setCar}
          setSave={setSave}
          setCity={setCity}
          setIsLoading={setIsLoading}
          setResult={setResult}
        />
      )}
    </body>
  );
}
export default App;
