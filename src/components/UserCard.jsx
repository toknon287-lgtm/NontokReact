function UserCard(props) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card h-100 shadow-sm text-center">
        <img 
          src={props.image} 
          className="card-img-top mx-auto mt-3 rounded-circle" 
          alt={props.name}
          style={{ height: '120px', width: '120px', objectFit: 'cover', border: '3px solid #b5924a', transition: 'transform 0.3s' }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <span className="badge bg-dark-overlay">{props.role}</span>
          </p>
          <p className="card-text text-muted">
            <small>📧 {props.email}</small><br/>
            <small>📱 {props.phone}</small>
          </p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <button className="btn btn-primary btn-sm w-75">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserCard;