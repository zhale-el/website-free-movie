import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const response = await fetch(
    "https://moviesapi.ir/api/v1/movies?page={page}",
    {
      cache: "no-store",
    }
  );

  return response.json();
};

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <div className="text-center mt-9">
        <h2 className="text-blue-950 text-4xl font-bold">Home page</h2>
        <div className="flex  items-center justify-between flex-wrap cursor-pointer">
          {data.data.map((item: any) => {
            return (
              <Link
                href={`/movies/${item.id}`}
                key={item.id}
                className="bg-gray-100 w-80 shadow-lg shadow-blue-100 rounded-2xl p-3 m-9 overflow-hidden flex items-center flex-col"
              >
                <h1 className="text-blue-950 text-xl font-bold mb-6">
                  {item.title}
                </h1>
                <Image
                  width={250}
                  height={50}
                  alt={item.title}
                  src={item.poster}
                />
                <div className="flex items-center flex-col gap-4  mt-3">
                  <p className="text-gray-900">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse repellat veritatis magnam omnis rerum quia
                    consequuntur! Vitae impedit eos magnam.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
