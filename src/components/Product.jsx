export default function Product(props) {
  return (
    <div className="product-box">
      <div className="delete-checkbox">
        <input onClick={props.handleCheck} type="checkbox"></input>
        <div className="product-info">
          <ul>
            <li>{props.sku}</li>
            <li>{props.name}</li>
            <li>{props.price}</li>
            <li>{props.size}</li>
            <li>{props.height}</li>
            <li>{props.width}</li>
            <li>{props.len}</li>
            <li>{props.weight}</li>
          </ul>
        </div>
      </div>
      <div className="product-item"></div>
    </div>
  );
}
