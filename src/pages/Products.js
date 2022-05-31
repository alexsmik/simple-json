import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../cartSlice";
import { useGetAllProductsQuery } from "../productsApi";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const Products = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const history = useNavigate();
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("Api", isLoading);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
      history('/cart')
  };

  return (
      <Wrapper>
      <div className="products-container">
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
          <p>Unexpected error... {error}</p>
          )}
      </div>
      </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    height: 175px;
  }
  .product-container {
    display: grid;
    gap: 2rem 1.5rem;
  }
  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
export default Products;
