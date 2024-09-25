import { Order, Product, User } from "@/types";

export const getOrders = async (): Promise<Order[]> => {
  try {
    const res = await fetch("http://localhost:3090/orders");
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Siparişler alınırken bir sorun oluştu");
  }
};

export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost:3090/products?_sort=-id", {
      cache: "no-store",
    });
    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün verileri alınırken bir sorun oluştu");
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const res = await fetch(`http://localhost:3090/products/${id}`, {
      method: "DELETE",
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürünü silerken oluştu");
  }
};

export const createProduct = async (data: Product) => {
  try {
    const res = await fetch(`http://localhost:3090/products`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün eklenirken oluştu");
  }
};

export const getProductById = async (id: string): Promise<Product> => {
  try {
    const res = await fetch(`http://localhost:3090/products/${id}`, {
      cache: "no-store",
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün verileri alınırken bir sorun oluştu");
  }
};

export const editProduct = async (data: Product) => {
  try {
    const res = await fetch(`http://localhost:3090/products/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün eklenirken oluştu");
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch(`http://localhost:3090/users`);

    return res.json();
  } catch (err) {
    console.log(err);
    throw Error("Ürün eklenirken oluştu");
  }
};
