import { useEffect, useState } from "react";
import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState(true)

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addForm(e) {
    e.preventDefault();
    if (!editId) {
      if (!title) {
        alert("Input some title");
      } else {
        setTasks([
          ...tasks,
          {
            id: Date.now(),
            title: title,
          },
        ]);
      }
    } else {
      if (!title) {
        alert("Input edit title");
      } else {
        setTasks(
          tasks.map((task) =>
            task.id === editId ? { ...task, title: title } : task
          )
        );
      }
    }
    setTitle("");
    setEditId(null);
  }

  function editTask(id, title) {
    console.log(`click id: ${id} and title: ${title}`);
    setTitle(title);
    setEditId(id);
  }

  function deleteTask(id) {
    setTasks(tasks.filter((element) => element.id !== id));
  }

  return (
    <div className={theme? "App light" : "App dark" }>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          addForm={addForm}
          title={title}
          setTitle={setTitle}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
