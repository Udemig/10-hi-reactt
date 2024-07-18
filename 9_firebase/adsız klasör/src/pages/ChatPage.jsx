import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";

const ChatPage = ({ room, setRoom }) => {
  // form gönderilince mesajı veritbanına kaydet
  const handleSubmit = async (e) => {
    e.preventDefault();

    // mesaj document'inin kaydedileceği kolleksiyonun referansını al
    const messagesCol = collection(db, "messages");

    // referansı alınan kolleksiyonu document'ı ekle
    await addDoc(messagesCol, {
      text: e.target[0].value,
      room,
      author: {
        id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        photo: auth.currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });
  };

  return (
    <div className="chat-page">
      <header>
        <p>{auth.currentUser?.displayName}</p>
        <p>{room}</p>
        <button onClick={() => setRoom(null)}>Farklı Oda</button>
      </header>

      <main></main>

      <form onSubmit={handleSubmit}>
        <input placeholder="mesajınızı yazınız" type="text" />
        <button>Gönder</button>
      </form>
    </div>
  );
};

export default ChatPage;
