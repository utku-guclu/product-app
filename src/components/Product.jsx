export default function Product(props) {
  return (
    <div className="product-box">
      <div className="delete-checkbox">
        <input onClick={props.handleCheck} type="checkbox"></input>
        <div className="product-info">
          <ul>
            <li>{props.sku && props.sku} </li>
            <li>{props.name && "Name: " + props.name}</li>
            <li>{props.price && "Price: " + props.price}</li>
            <li>{props.size && "Size: " + props.size}</li>
            <li>{props.height && "Height: " + props.height}</li>
            <li>{props.width && "Width: " + props.width}</li>
            <li>{props.len && "Length: " + props.len}</li>
            <li>{props.weight && "Weight: " + props.weight}</li>
          </ul>
        </div>
      </div>
      <div className="product-item"></div>
    </div>
  );
}
