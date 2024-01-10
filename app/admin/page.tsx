import Link from "next/link";
import LogoutButton from "@/app/ui/admin/LogoutButton";
import ProductsTable from "@/app/ui/admin/ProductsTable";

const Admin = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-around">
        <Link
          className="flex w-32 py-2 text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
          href={"/admin/new-product"}
        >
          New Product
        </Link>
        <LogoutButton />
      </div>
      <ProductsTable />
    </div>
  );
};

export default Admin;
