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
  const [car, setCar] = useState(0);
  const [house, setHouse] = useState(0);
  const [save, setSave] = useState(0);

  return (
    <body>
      <header></header>
      {isSubmit ? (
        isLoading ? (
          <Loading setIsLoading={setIsLoading} />
        ) : (
          <Result salary={salary} cost={cost} />
        )
      ) : (
        <Main
          salary={salary}
          cost={cost}
          save={save}
          setIsSubmit={setIsSubmit}
          setSalary={setSalary}
          setCost={setCost}
          setCar={setCar}
          setSave={setSave}
          setHouse={setHouse}
        />
      )}
    </body>
  );
}
export default App;
