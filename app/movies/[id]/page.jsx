import Image from "next/image";

const getData = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });

  return response.json();
};

const Single = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <main className="container mx-auto my-12 flex">
      <section className="rounded-sm bg-gray-100 p-8 flex justify-between items-start w-[80%] m-auto">
        <div className="flex-1">
          <h1 className="font-bold text-2xl">{data.title}</h1>
          <p className="pt-6 text-lg font-semibold ">Year: {data.year}</p>
          <p className="text-lg font-semibold">Country: {data.country}</p>
          <p className="text-lg font-semibold">IMDB: {data.imdb_rating}</p>
          <p className="pt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quidem
            nihil, excepturi nesciunt reprehenderit sit ut deleniti, quas
            laboriosam repellat, eum eveniet officiis nobis. Velit aspernatur
            nostrum similique quos fugit! nihil, excepturi nesciunt
            reprehenderit sit ut deleniti, quas laboriosam repellat, eum eveniet
            officiis nobis. Velit aspernatur nostrum similique quos fugit!
          </p>
        </div>
        <div>
          <Image
            className="rounded-3xl flex-3"
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
            priority={true}
          />
        </div>
      </section>
    </main>
  );
};

export default Single;
