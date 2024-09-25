import Loader from "@/components/loaders/Loader";
import Table from "@/components/table";
import Title from "@/components/title";
import { Suspense } from "react";

const Users = async () => {
  return (
    <div>
      <Title>Kullanıcılar</Title>

      <Suspense fallback={<Loader designs="mt-20" />}>
        <Table />
      </Suspense>
    </div>
  );
};

export default Users;
