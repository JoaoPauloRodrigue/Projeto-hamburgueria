import { StyledBtn } from "../../../style/button";
import { StyledCartProduct } from "./cartProduct";

export const CartProduct = ({ cardCurrentSale, deleteProductFromSaleCart }) => {
  return (
    <>
      <StyledCartProduct key={cardCurrentSale.id}>
        <div className="container-img-title-subtitle">
          <div className="container-img-sale-cart">
            <img src={cardCurrentSale.img} alt="Imagem do hamburguer" />
          </div>
          <div className="container-information-product-sale">
            <h2>{cardCurrentSale.name}</h2>
            <p>{cardCurrentSale.category}</p>
          </div>
        </div>
        <StyledBtn
          btnSize="delete"
          btnStyleColor="btnStyledDelete"
          onClick={() => deleteProductFromSaleCart(cardCurrentSale.id)}
        >
          Remover
        </StyledBtn>
      </StyledCartProduct>
    </>
  );
};
