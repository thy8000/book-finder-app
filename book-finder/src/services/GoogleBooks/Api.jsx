class GoogleBooksAPI {
  constructor() {
    this.apiUrl = "https://www.googleapis.com/books/v1/volumes?maxResults=40&";
  }

  async searchBooks(queryString) {
    const requestURL = this.apiUrl + "q=" + queryString;

    try {
      const response = await fetch(requestURL);

      if (!response.ok) {
        throw new Error(
          "Houve um erro inesperado ao tentar fazer a requisição."
        );
      }

      const requestData = await response.json();

      return requestData;
    } catch (error) {
      console.error("Erro ao tentar fazer a requisição: ", error);

      throw error;
    }
  }
}

export default GoogleBooksAPI;
