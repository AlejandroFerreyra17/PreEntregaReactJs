import { link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <>
      <div className="col-md-4 text-center">
        <Link to={"/item/" + item.id}>
          <div className="card border-0">
            <img src={item.imagen} alt={item.nombre} className="img-fluid" />
            <div className="card-body">
              <p className="card-text text-uppercase">{item.nombre}</p>
              <p className="card-text">$ {item.precio}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Item;
