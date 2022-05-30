import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import { useGetAllProductsQuery } from "../productsApi";

const Products = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
      <section className='section'>
      <div className="home-container">
        {status === "success" ? (
              <div className="products">
                {data &&
                data?.map((product) => (
                    <div key={product.id} className="product">
                      <h3>{product.name}</h3>
                      <img src={product.image} alt={product.name} />
                      <div className="details">
                        <span>{product.desc}</span>
                        <span className="price">${product.price}</span>
                      </div>
                      <button onClick={() => handleAddToCart(product)}>
                        Add To Cart
                      </button>
                    </div>
                ))}
              </div>
        ) : status === "pending" ? (
          <p>Loading...</p>
          ) : (
          <p>Unexpected error occured...</p>
          )}
      </div>
      </section>
  );
};

export default Products;
