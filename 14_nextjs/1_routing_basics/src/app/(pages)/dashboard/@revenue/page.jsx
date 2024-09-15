import { delay } from "@/app/(pages)/(auth)/login/page";

const Page = async () => {
  await delay(2000);

  return (
    <div className="text-lg">
      <h1>Gelir Tablosu</h1>

      <table className="border text-lg mt-6">
        <tr>
          <th>ay</th>
          <th>....</th>
          <th>gelir</th>
        </tr>

        <tr>
          <td>Ocak</td>
          <td>...</td>
          <td>5000000</td>
        </tr>
        <tr>
          <td>Şubat</td>
          <td>...</td>
          <td>2000000</td>
        </tr>
      </table>
    </div>
  );
};

export default Page;
