import { useState } from "react";
import { BounceLoader  } from "react-spinners";

import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";

import "./index.css";
import { Book } from "./components/Book/Book";

const overrideStyles = {
  display: "block",
  position: "absolute",
  width: "150px",
  height: "150px",
  margin: "0px auto",
  borderColor: "red",
  left: "50%",
  top: "10px",
  transform: "translateX(-50%)",
};

function App() {
  const [booksData, setBooksData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Header />

      <section className="container container mx-auto px-4 lg:px-20">
        <Form setBooksData={setBooksData} setLoading={setLoading} />
      </section>

      <section className="container relative mx-auto block gap-10 px-4 pb-10 lg:grid lg:grid-cols-3 lg:px-20">
        <BounceLoader
          loading={loading}
          cssOverride={overrideStyles}
          size={150}
          color={"#dc2626"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />

        {booksData.map((book, index) => (
          <Book key={index} data={book} />
        ))}
      </section>
    </div>
  );
}

export default App;
