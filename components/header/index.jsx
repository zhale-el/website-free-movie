import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full h-28 bg-gray-500 ">
      <div className="flex items-center justify-between p-6 text-center container">
        <h1 className="text-3xl font-semibold text-orange-500">
          <Link href={"/"}>free movies 📺</Link>
        </h1>
        <nav className="flex items-center justify-center">
          <ul className="flex items-center justify-between gap-9 font-semibold text-xl text-white ">
            <li className="border border-orange-400 p-3 rounded transition-all duration-500 hover:bg-orange-200 ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="border border-orange-400 p-3 rounded transition-all duration-500 hover:bg-orange-200">
              <Link href={"/movies"}>Movie</Link>
            </li>
            <li className="border border-orange-400 p-3 rounded transition-all duration-500 hover:bg-orange-200">
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
