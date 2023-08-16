import placeholderLivro from "../../assets/images/placeholder-livro.jpg";

export function Book() {
  return (
    <div className="flex flex-col items-center pt-20">
      <div className="w-full bg-white p-10 shadow-lg rounded-md max-w-[300px]">
        <div className="flex justify-center">
          <img className="w-[150px]" src={placeholderLivro} />
        </div>

        <div className="pt-10 flex flex-col gap-4">
          <h2 className="text-lg text-red-700 font-bold">Soviet T-10 Heavy Tank and Variants</h2>

          <h3 className="text-base text-red-500">James Kinnear Stephen Sewell</h3>

          <h3 className="text-sm text-gray-500">Bloomsbury Publishing</h3>

          <h3 className="text-xs text-gray-400">Publicado em 2017-06-29</h3>
        </div>
      </div>
    </div>
  );
}
