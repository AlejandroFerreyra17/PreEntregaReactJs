import { useEffect, useState } from "react";
import arrayProductos from "./json/productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          id
            ? arrayProductos.filter((item) => item.categoria == id)
            : arrayProductos
        );
      }, 2000);
    });

    promesa.then((respuesta) => {
      setItems(respuesta);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <div className="row my-5">
          <ItemDetail item={item} />
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
