import React, { useReducer } from "react";
import { initialState } from "../reducers/todoReducer";
import todoReducer from "../reducers/todoReducer";
import { v4 } from "uuid";
const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault(); // sayfanın yenilenmesini engelle
    const text = e.target[0].value; // inputtaki yazıya eriştik
    // Kaydedeceğimiz nesneyi tanımladık
    const newTodo = {
      id: v4(),
      title: text,
    };
    // Veriyi reducerdaki state'e gönderdik
    dispatch({ type: "CREATE", payload: newTodo });
    // formu temizle
    e.target.reset();
  };

  console.log(state);
  return (
    <div
      className={`vh-100 vw-100 p-5 ${
        state.isDarkMode ? "bg-dark" : "bg-white text-dark"
      }`}
    >
      <div className="d-flex justify-content-lg-between align-items-center w-100 mb-5">
        <h1>TODO REDUCER</h1>
        <button
          onClick={() => dispatch({ type: "CHANGE_THEME" })}
          className={`${
            state.isDarkMode ? " btn-light" : "btn-dark"
          }  btn shadow ms-5`}
        >
          {state.isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex gap-3 align-items-center my-5"
      >
        <input className="form-control shadow" type="text" />
        <button className="btn btn-success shadow" type="submit">
          Gönder
        </button>
        <button
          type="button"
          className="btn btn-secondary shadow"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Temizle
        </button>
      </form>

      <ul className="list-group">
        {state.todos.map((item) => (
          <li
            key={item.id}
            className={`list-group-item d-flex justify-content-between align-items-center shadow ${
              state.isDarkMode ? "bg-dark text-white" : "bg-white text-dark"
            }`}
          >
            <span>{item.title}</span>
            <button
              className="btn btn-danger"
              onClick={() =>
                dispatch({
                  type: "DELETE",
                  payload: item.id,
                })
              }
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
