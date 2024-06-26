/*
    * reducer: useReducer ile yönetilen statein nasıl değişeceğine karar veren fonksiyondur

    * Aldığı parametreler:
    * >> state'in son hali
    * >> aldığı action( emir/ eylem)
    
    * reducer fonksiyonuna gelen aksiyona göre state'in nasıl değişeceğine karar verir.

    * Aksiyonları bileşenleri içerisinden dispatch methodu yardımıyla reducer'a gönderebiliyoruz.

    * reducer fonksiyonunun return ettiği değer state'in son halidir.

*/

const reducer = (state, action) => {
  console.log(state);
  console.log(action);
  if (action === "SIFIRLA") {
    return { count: 0 };
  }

  if (action === "AZALT") {
    return { count: state.count - 1 };
  }

  if (action === "ARTTIR") {
    return { count: state.count + 1 };
  }

  return state;
};

export default reducer;
