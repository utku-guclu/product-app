import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="App-header">
      <h1>Product List</h1>
      <div className="buttons">
        <button id="add-product-btn">
          <Link
            to="/addproduct"
            style={{ textDecoration: "none", color: "#282c34" }}
          >
            ADD
          </Link>
        </button>
        <button onClick={props.handleDelete} id="delete-product-btn">
          MASS DELETE
        </button>
      </div>
    </header>
  );
}
