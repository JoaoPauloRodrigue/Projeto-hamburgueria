import { StyledCartContainer } from "./cart";
import { CartProduct } from "./CartProduct";
import { CartTotal } from "./CartTotal";

export const CartEmpty = () => {
  return (
    <>
      <StyledCartContainer>
        <section className="container-title-cart">
          <h2>Carrinho de compra</h2>
        </section>
        <section className="container-cart-empty">
          <h2>Sua sacola está vazia</h2>
          <p>Adicionar itens</p>
        </section>
      </StyledCartContainer>
    </>
  );
};

export const CartNoEmpty = ({ currentSale, deleteProductFromSaleCart }) => {
  return (
    <>
      <StyledCartContainer>
        <section className="container-title-cart">
          <h2>Carrinho de compra</h2>
        </section>
        <section className="container-cart-no-empty">
          <ul>
            {currentSale.map((cardCurrentSale, index) => (
              <CartProduct
                cardCurrentSale={cardCurrentSale}
                deleteProductFromSaleCart={deleteProductFromSaleCart}
              />
            ))}
          </ul>
        </section>
        <CartTotal
          currentSale={currentSale}
          deleteProductFromSaleCart={deleteProductFromSaleCart}
        />
      </StyledCartContainer>
    </>
  );
};
