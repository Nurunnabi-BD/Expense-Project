import { useState } from "react";
import "./App.css";
import FilterExpenses from "./components/filterExpenes.jsx";
import Content from "./components/content.jsx";
import AddTable from "./components/addTable.jsx";
function App() {
  const [expense, setExpense] = useState([
    { id: 1, names: "Ganderton", category: "Personal", amount: 800 },
    { id: 2, names: "Hagerty", category: "Tour", amount: 200 },
    { id: 3, names: "Brice", category: "Tour", amount: 890 },
    { id: 4, names: "Smith", category: "Business", amount: 1200 },
    { id: 5, names: "Johnson", category: "Personal", amount: 450 },
    { id: 6, names: "Williams", category: "Tour", amount: 300 },
  ]);
  //Select Filter State
  const [selectedCategory, setSelectedCategory] = useState("");
  const onSelectCategory = selectedCategory
    ? expense.filter((expense) => expense.category === selectedCategory)
    : expense;

  return (
    <>
      <AddTable
        onSubmit={(data) =>
          setExpense([...expense, { ...data, id: expense.length + 1 }])
        }
      />
      <FilterExpenses
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <Content
        expenses={onSelectCategory}
        onDelete={(id) => setExpense(expense.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
