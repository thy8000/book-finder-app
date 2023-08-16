import logo from "../../assets/images/book-finder-logo.png";

export function Header() {
  return (
    <header className="flex flex-col justify-center items-center p-10">
      <img className="w-[250px]" src={logo} />

      <h1 className="pt-8 text-4xl text-center text-orange-600 font-medium max-w-[600px]">
        Pesquise os livros que você está procurando de qualquer lugar
      </h1>
    </header>
  );
}

<Header />;
