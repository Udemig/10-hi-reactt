import { getUsers } from "@/utils/api";

const Table = async () => {
  const data = await getUsers();

  return (
    <div>
      <table
        border={4}
        className="border shadow w-full bg-white rounded-md mt-5"
      >
        <thead>
          <tr className="border-b shadow">
            <th className="py-4 px-4">#</th>
            <th>İsim</th>
            <th>Eposta</th>
            <th>Ülke</th>
            <th>Şehir</th>
            <th>Eylem</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, key) => (
            <tr className="border-b" key={user.id}>
              <td className="py-8 px-4">{key}</td>
              <td>{user.name}</td>
              <td>{user.name}</td>
              <td>{user.name}</td>
              <td>{user.name}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
