/* eslint-disable react/prop-types */

export function Book({ data }) {
  var author = data.volumeInfo.authors ?? 'Autor desconhecido';

  if (Array.isArray(author)) {
    author = author[0];
  }

  return (
    <div className="flex flex-col items-center pt-20">
      <a
        className="w-full bg-white p-10 shadow-lg rounded-md max-w-[300px]"
        href={data.volumeInfo.canonicalVolumeLink}
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div className="flex justify-center">
            {data.volumeInfo.imageLinks &&
            data.volumeInfo.imageLinks.thumbnail ? (
              <img
                className="w-[150px]"
                src={data.volumeInfo.imageLinks.thumbnail}
              />
            ) : (
              <div className="w-[150px] h-[233px] flex items-center">
                Imagem indisponível
              </div>
            )}
          </div>

          <div className="pt-10 flex flex-col gap-4">
            <h2 className="text-lg text-red-700 font-bold">
              {data.volumeInfo.title}
            </h2>

            <h3 className="text-base text-red-500">
              {author}
            </h3>

            <h3 className="text-sm text-gray-500">
              {" "}
              {data.volumeInfo.publisher
                ? data.volumeInfo.publisher
                : "Publicadora desconhecida"}
            </h3>
          </div>
        </div>
      </a>
    </div>
  );
}
