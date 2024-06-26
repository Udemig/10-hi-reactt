import React, { useReducer, useState } from "react";
import counterReducer from "./../reducers/counterReducer";
const Counter = () => {
  /*
    
  * useReducer:
  * Bir bileşenin state yönetimi useState ile birlikte zor bir hale geldiği zaman useReducer'ı tercih ederiz.
      
        
  * useReducer ın isteği argümanlar:
  * reducer >> state'in nasıl değişeceğine karar veren fonksiyondur
  * initialState >> tutacağımız statein ilk değeri
  
  * Bize dönderdiği değerler:
  * count >> statein güncel hali
  * dispatch >> state i güncellemek için kullanacağımız method

    */

  const initialState = {
    count: 10,
  };

  const [state, dispatch] = useReducer(counterReducer, initialState);
  console.log(state);
  return (
    <div className="d-flex gap-4 align-items-center">
      <button className="btn btn-secondary" onClick={() => dispatch("SIFIRLA")}>
        Sıfırla
      </button>
      <button className="btn btn-primary" onClick={() => dispatch("AZALT")}>
        Azalt
      </button>
      <span className="lead fs-1">{state.count}</span>
      <button className="btn btn-success" onClick={() => dispatch("ARTTIR")}>
        Arttır
      </button>
    </div>
  );
};

export default Counter;
