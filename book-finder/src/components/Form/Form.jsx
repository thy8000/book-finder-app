import { MagnifyingGlass } from "phosphor-react";

export function Form() {
  return (
    <div className="flex justify-center">
      <form className="w-[350px] lg:w-[500px]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MagnifyingGlass size={24} color="red" />
          </div>

          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 line-clamp-1"
            placeholder="Digite o nome do livro"
            required
          />

          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Pesquisar
          </button>
        </div>
      </form>
    </div>
  );
}
