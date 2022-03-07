import './App.css';
import { useState } from "react";


function App() {
  const [book, setBook] = useState(0);
  const [pen, setPen] = useState(0);
  const [notebooks, setNotebooks] = useState(0);
  const [inkpens, setInkpens] = useState(0);


  return (
    <div className="App">
      <div className="items">
        <span>books:</span>
        <button className="addBook" onClick={() => {
          setBook(book + 1)
        }}>
          +
        </button>
        <button className="remBook" onClick={() => {
          setBook(book - 1)
        }}>
          -
        </button>
        <span className="totalBooks">{book}</span>
      </div>


      <div className="items">
        <span>pens:</span>
        <button className="addPen" onClick={() => {
          setPen(pen + 1)
        }}>
          +
        </button>
        <button className="remPen" onClick={() => {
          setPen(pen - 1)
        }}>
          -
        </button>
        <span className="totalPens">{pen}</span>
      </div>


      <div className="items">
        <span>notebooks:</span>
        <button className="addNotebook" onClick={() => {
          setNotebooks(notebooks + 1)
        }}>
          +
        </button>
        <button className="remNotebook" onClick={() => {
          setNotebooks(notebooks - 1)
        }}>
          -
        </button>
        <span className="totalNotebooks">{notebooks}</span>
      </div>


      <div className="items">
        <span>inkpens:</span>
        <button className="addInkpen" onClick={() => {
          setInkpens(inkpens + 1)
        }}>
          +
        </button>
        <button className="remInkpen" onClick={() => {
          setInkpens(inkpens - 1)
        }}>
          -
        </button>
        <span className="totalInkpens">{inkpens}</span>
      </div>


      <div className="total">{book + pen + notebooks + inkpens}</div>

    </div>
  );
}

export default App;
