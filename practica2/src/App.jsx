import "./App.css";
import Table from "./components/Table";

// En el componente App.js poseo el siguiente arreglo de ingresos brutos por compañia:

// const netIncomes = [{brand: ´McDonalds´, income: 1291283}, {brand: Burger King, income: 1927361}, {brand: ‘KFC’, income: 1098463}];

// En el componente App:

// Escribir un componente Table.js que arme una tabla de HTML donde las columnas sean el nombre de la marca y el ingreso neto.

// Escribir una etiqueta p que muestre el promedio de ingreso neto entre todas las marcas. Utilizar obligatoriamente la función reduce para calcular el promedio.

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  const totalIncome = netIncomes.reduce((acc, item) => acc + item.income, 0);

  const average = totalIncome / netIncomes.length;

  return (
    <>
      {netIncomes.map((item) => (
        <Table key={item.brand} brand={item.brand} income={item.income} />
      ))}
      <p>Promedio de ingreso de todas las marcas: ${Math.round(average)}</p>
    </>
  );
}

export default App;
