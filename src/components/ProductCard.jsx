function ProductCard(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow">
        <img 
          src={props.image} 
          className="card-img-top" 
          alt={props.name}
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <span className="badge bg-secondary mb-2 align-self-start">
            {props.category}
          </span>
          <h6 className="card-title text-gold">{props.name}</h6>
          <p className="card-text small text-muted flex-grow-1">
            {props.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <h5 className="text-black mb-0 fw-bold">฿{props.price.toLocaleString()}</h5>
            <button className="btn btn-sm btn-outline-primary">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;