import Button from "../components/button";
import Input from "../components/input";

const Page = () => {
  console.log("😀 İletişim Sayfası Render Oldu");

  return (
    <div className="text-4xl text-center my-40 flex flex-col gap-20">
      <div>
        <h1>İletişim Sayfası</h1>

        <span className="bg-blue-500 px-2 py-1 text-white rounded-md mt-4 text-lg">
          server comp
        </span>
      </div>

      <Button />
      <Input />
    </div>
  );
};

export default Page;
