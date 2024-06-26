## json-server kurulum

- npm i json-server
- Proje klasöründe db.json dosyası oluşturduk ve güncelledik.
- json-server --watch db.json --port 3000 komutu ile json-serverı ayağa kaldırdık

## Get İsteği

### Fetch

```js
fetch("http://localhost:3000/todos")
  .then((res) => res.json())
  .then((data) => setTodos(data));
```

## Axios

- npm install axios
- HTTP istekleri için modern çözüm
- Yerleşik değil pakedini indirmek gerekli
- İsteklerde fetche göre daha az kod yazarız
- Hataları ve istek detaylarını daha detaylı bir şekilde gösterir
- Veri gönderirken otomatik olarak js verisini json verisini çevirir

## Axios GET

```js
axios.post("http://localhost:3000/todos", newTodo);
```
