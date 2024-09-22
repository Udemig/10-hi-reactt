import { Order } from "@/types";

export const getOrders = async (): Promise<Order[]> => {
  try {
    const res = await fetch("http://localhost:3090/orders");
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Siparişler alınırken bir sorun oluştu");
  }
};
