import "./ProductCard.css"

type ProductCardProps = {
  name: string
}

function ProductCard({ name }: ProductCardProps) {

  const handleClick = (name: string) => {
    console.log(`${name} was added to cart!`)
  }

  return (
    <div className="productCard">
      <img className="productImage" src="" alt="PRODUCT" />
      <div className="productTitle">{name}</div>
      <span className="productPrice">
        <div>0000$</div>
        <button onClick={() => handleClick(name)}>BUY</button>
      </span>
    </div>
  )

}

export default ProductCard
