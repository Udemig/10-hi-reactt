// başlangıç değeri
export const initialState = {
  todos: [],
  isDarkMode: true,
};

const reducer = (state, action) => {
  console.log(action);
  console.log({ ...state, isDarkMode: !state.isDarkMode });
  // aksiyonun tipine göre return edilmesi gereken veriye karar veriyoruz
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, isDarkMode: !state.isDarkMode };

    case "CREATE":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "DELETE":
      // Aksiyonun payloadı ile gönderilen id dışarısındakileri al
      const filtred = state.todos.filter((i) => i.id !== action.payload);
      // state'i güncelle
      return { ...state, todos: filtred };
    case "CLEAR":
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default reducer;
