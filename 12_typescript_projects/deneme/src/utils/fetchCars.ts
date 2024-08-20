import { CarType } from "../types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// Fonksiyon asenkron olduğundan ve bir return değerine sahip olduğundan dolayo return tipini belirlerken sadece return edilen tipi "CarType[]" ifade etmek yerine bu fonksiyonun hata da döndürebilecğeinden ve asenkdron olduğunda dolayı bu tipi react'ın içerisnde bulnan Promise tipine generic olarak göndererek return tipini belirledik
const fetchCars = async (): Promise<CarType[]> => {
  const url = "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m4";

  const res = await fetch(url, options);

  const data = await res.json();

  return data;
};

export default fetchCars;
