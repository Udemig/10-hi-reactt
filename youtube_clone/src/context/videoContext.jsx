import { createContext, useEffect } from "react";
import api from "../utils/api";

//* 1)Context temelini oluştur.
export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  useEffect(() => {
    api.get("/home").then((res) => console.log(res));
  }, []);

  return <VideoContext.Provider value={{}}>{children}</VideoContext.Provider>;
};
