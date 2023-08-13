import {Header} from './components/Header/Header';
import Book from "./Book";

import './assets/style.css';

function App() {
  return (
    <div>
      <Header />

      <Book author="Thunay Moreira" content="Thunay fodastico aaaaaaaa" />

      <Book
        author="Jimmy Neutron Africano"
        content="Um africano muito foda que se chama Jimmy Neutron"
      />
    </div>
  );
}

export default App;
