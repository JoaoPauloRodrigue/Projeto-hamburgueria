import { StyledBtn } from "../../../style/button";
import { StyledProductContainer } from "./productCard";

export const ProductCard = ({ hamburger, addProductToSaleCart }) => {
  return (
    <StyledProductContainer>
      <li id={hamburger.id}>
        <div className="image-product">
          <img src={hamburger.img} alt="imagem do hamburguer" />
        </div>
        <div className="container-information-product">
          <h2>{hamburger.name}</h2>
          <p>{hamburger.category}</p>
          <span>{`R$ ${Math.round(hamburger.price)},00`}</span>
          <StyledBtn
            btnSize="medium"
            btnStyleColor="btnGreen"
            onClick={() => addProductToSaleCart(hamburger)}
          >
            Adicionar
          </StyledBtn>
        </div>
      </li>
    </StyledProductContainer>
  );
};
