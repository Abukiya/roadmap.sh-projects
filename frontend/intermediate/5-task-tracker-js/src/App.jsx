import { Check, LogIn, Trash2 } from "lucide-react";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (input) => {
    setTodos([{ id: Date.now(), text: input, done: false }, ...todos]);
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handlSubmit = (e) => {
    e.preventDefault();
    const task = input.trim();
    if (!task) {
      alert("Type a task first");
      return
    }
    addTodo(task);
    setInput("")
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-full sm:max-w-xl mt-20">
          <header className="text-start p-2 text-2xl w-full">
            Task Tracker
          </header>
          <div className="flex gap-2 flex-col">
            <form
              onSubmit={handlSubmit}
              className="border-2 flex justify-between"
            >
              <input
                type="text"
                className="outline-none w-full p-2"
                placeholder="Start writing and press enter to create a task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                aria-label="add a task"
              />
              <button type="submit" className="p-2 hover:scale-110">
                <LogIn />
              </button>
            </form>

            <div className="flex flex-col gap-2">
              <ul className="flex flex-col gap-2">
                {todos.map((todo) => {
                  return (
                    <li
                      key={todo.id}
                      className="flex justify-between border-b border-gray-300 pb-1"
                    >
                      <div
                        onClick={() => {
                          toggleTodo(todo.id)
                        }}
                        className="flex gap-2 w-full group cursor-pointer"
                      >
                        <div className="border-2 size-7 rounded-lg">
                          <div className={`justify-center items-center h-full ${todo.done? "flex":"hidden"} group-hover:flex`}>
                            <Check />
                          </div>
                        </div>
                        <div className={`self-center w-full ${todo.done?"line-through text-gray-400":"text-black"}`}>{todo.text}</div>
                      </div>
                      <button
                        className="hover:scale-110"
                        onClick={() => {
                          removeTodo(todo.id);
                        }}
                      >
                        <Trash2 className="self-center" />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
