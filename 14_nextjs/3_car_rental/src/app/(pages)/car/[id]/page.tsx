import Header from "@/app/components/Header";
import Link from "next/link";
import BreadCrumb from "./BreadCrumb";
import Container from "@/app/components/Container";

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  return (
    <div>
      <Header designs="bg-black text-white" />

      <Container designs="mt-5">
        <BreadCrumb />

        <h1 className="my-10">ARAÇ DETAY</h1>
        <h1>{params.id}</h1>
      </Container>
    </div>
  );
};

export default Page;
