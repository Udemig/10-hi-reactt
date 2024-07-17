// Model: API istekleri burada yer alır
export default class UserModel {
  // api'dan kullanıcı verilerini alıp döndüren fonksiyon
  static async getUsers() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");

      const data = await res.json();

      return data;
    } catch (err) {
      console.log(err);
    }
  }
}
