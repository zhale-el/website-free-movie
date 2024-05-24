import Image from "next/image";

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
  console.log("------------------------");
  console.log(data);
  console.log("------------------------");

  return (
    <main>
      <div className="text-center mt-9">
        <h2 className="text-gray-800 text-4xl font-semibold">Home page</h2>
        <div className="flex items-center justify-between flex-wrap cursor-pointer">
          {data.data.map((item: any) => {
            return (
              <div
                key={item.id}
                className="bg-gray-400  w-80 shadow-lg rounded-2xl p-3 m-9 overflow-hidden  flex items-center flex-col "
              >
                <h1 className="text-white text-xl font-semibold mb-3">
                  {item.title}
                </h1>
                <Image
                  width={250}
                  height={50}
                  alt={item.title}
                  src={item.poster}
                />
                <div className="flex items-center flex-col gap-4  mt-3">
                  <p className="font-semibold">{item.genres}</p>
                  <p className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Esse repellat veritatis magnam omnis rerum quia
                    consequuntur! Vitae impedit eos magnam.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
