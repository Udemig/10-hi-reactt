import Link from "next/link";

const Layout = ({ children, revenue, notifications, users }) => {
  return (
    <div className="flex flex-col gap-10">
      <div>{children}</div>

      <div className="text-lg flex justify-between">
        <Link href="/dashboard">Admin Paneline Git</Link>
        <Link href={"/dashboard/settings"}>Ayarlara Git</Link>
      </div>

      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-5">
          <div className="border p-6 rounded">{notifications}</div>
          <div className="border p-6 rounded">{revenue}</div>
        </div>

        <div className="border p-6 rounded">{users}</div>
      </div>
    </div>
  );
};

export default Layout;
