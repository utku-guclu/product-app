import { Link } from "react-router-dom";

export default function ProductHeader(props) {
  return (
    <header className="App-header">
      <h1>Product Add</h1>
      <div className="buttons">
        <button onClick={props.handleClick} id="save-product-btn">
          SAVE
        </button>
        <button id="cancel-product-btn">
          <Link to="/" style={{ textDecoration: "none", color: "#282c34" }}>
            CANCEL
          </Link>
        </button>
      </div>
    </header>
  );
}
