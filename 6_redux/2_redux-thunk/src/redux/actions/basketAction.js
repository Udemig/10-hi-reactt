import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../actionTypes";

//* Sepete yeni eleman ekleyecek fonksiyondur
export const addToBasket = (product, rest) => (dispatch) => {
  //* 1.adım:Sepete eklenilecek olan ürünün bilgilerini belirleyelim
  const newItem = {
    id: v4(),
    productId: product.id,
    title: product.title,
    price: product.price,
    photo: product.photo,
    restaurantName: rest.name,
    amount: 1,
  };
  //* 2.adım:Elemanı api ye ekle
  api.post("/cart", newItem).then(() =>
    //* 3.adım:Veri apiye eklenirse reducera da gönder
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: newItem,
    })
  );
};
