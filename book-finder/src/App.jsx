import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

import "./index.css";
import { Book } from "./components/Book/Book";

function App() {
  return (
    <div>
      <Header />

      <section className="container container mx-auto px-4 lg:px-20">
        <Form />
      </section>

      <section className="container mx-auto block gap-10 px-4 pb-10 lg:grid lg:grid-cols-3 lg:px-20">
        <Book />
        <Book />
        <Book />
      </section>
    </div>
  );
}

export default App;
