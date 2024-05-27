import Image from "next/image";
import NotFound from "../../not-found";
const getData = async (id) => {
  const response = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`, {
    cache: "no-store",
  });

  return response.json();
};

const Single = async ({ params }) => {
  const data = await getData(params.id);

  if (!data.id) {
    return NotFound();
  }

  return (
    <div className=" my-6 flex flex-col gap-10">
      <section className="rounded-lg bg-gray-100 p-6 flex justify-between  w-[95%] mr-9 shadow-xl">
        <div className="flex-1">
          <h1 className="font-bold text-2xl">{data.title}</h1>

          <p className="pt-6 text-lg font-semibold text-gray-800 ">
            Year: {data.year}
          </p>
          <p className="pt-4 text-lg font-semibold text-gray-800">
            Country: {data.country}
          </p>
          <p className="pt-4 text-lg font-semibold text-gray-800">
            IMDB: {data.imdb_rating}
          </p>
          <p className="pt-6">{data.plot}</p>

          <div className="flex justify-start items-center gap-3 pt-9 flex-wrap ">
            {data.genres.map((genre, i) => (
              <h2
                key={i}
                className="bg-zinc-200 rounded-md px-4 py-1 transition-all duration-500 hover:bg-zinc-400 cursor-pointer "
              >
                {genre}
              </h2>
            ))}
          </div>
        </div>
        <div>
          <Image
            className="rounded-3xl flex-4"
            width={250}
            height={300}
            alt={data.title}
            src={data.poster}
            priority={true}
          />
        </div>
      </section>
      <section className=" my-12 flex justify-around items-center flex-wrap">
        {data.images.map((img, i) => (
          <Image
            key={i}
            className="rounded-xl my-6 shadow-xl"
            width={450}
            height={300}
            alt={data.title}
            src={img}
            priority={true}
          />
        ))}
      </section>
    </div>
  );
};

export default Single;
