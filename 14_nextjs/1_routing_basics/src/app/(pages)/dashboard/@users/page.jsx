import { delay } from "@/app/(pages)/(auth)/login/page";

const Page = async () => {
  await delay(3000);

  //throw new Error("Kullanıcılar Bulunamadı");

  return <div>Kullanıcılar</div>;
};

export default Page;
