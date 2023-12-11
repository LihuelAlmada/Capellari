import GoBack from "@/app/ui/GoBack";

export default function NotFound() {
  return (
    <main className="container m-auto">
      <h1 className="text-4xl text-red-600 my-4">Error 404</h1>
      <hr />
      <GoBack />
    </main>
  );
}
