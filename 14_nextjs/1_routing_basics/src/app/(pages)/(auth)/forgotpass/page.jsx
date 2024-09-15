import { delay } from "../login/page";

const Page = async () => {
  await delay(1000);

  // api'dan hata geldiğini düşünelim
  // throw new Error("İstek Kotanız Doldu");

  return <div>Şifremi Unuttum Sayfası</div>;
};

export default Page;
