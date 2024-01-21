import "./ProductCard.css";

type ProductCardProps = {
  name: string;
};

function handleClick(name: string) {
  console.log(`${name} was added to cart!`);
}

function ProductCard({ name }: ProductCardProps) {
  return (
    <div className="productCard">
      <img className="productImage" src="" alt="PRODUCT" />
      <div className="productTitle">{name}</div>
      <span className="productPrice">
        <div>0000$</div>
        <button onClick={() => handleClick(name)}>BUY</button>
      </span>
    </div>
  );
}

export default ProductCard;
