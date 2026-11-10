import { Link } from "react-router-dom"

export default function ProductCard({product}){
    return(
        <div className="product-card">
                        <img src={product.image} alt={product.name} className="product-card-image" />
                        <div product-card-content>
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className="product-card-price">Kes {Math.round(product.price*130)}</p>
                        </div>
                        <div className="product-card-actions">
                            <Link className="btn btn-secondary">View Details</Link>
                            <Link className="btn btn-primary">View Details</Link>
                            <button >Add to Cart</button>
                        </div>
        </div>
    )
}