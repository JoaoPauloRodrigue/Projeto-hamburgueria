import { StyledProductListContainer } from "./productList";
import { ProductCard } from "./ProductCard";

export const ProductList = ({ product, addProductToSaleCart }) => {
  return (
    <div>
      <StyledProductListContainer>
        <ul>
          {product.map((hamburger, index) => (
            <ProductCard
              key={index}
              hamburger={hamburger}
              addProductToSaleCart={addProductToSaleCart}
            />
          ))}
        </ul>
      </StyledProductListContainer>
    </div>
  );
};
