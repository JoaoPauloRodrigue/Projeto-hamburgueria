import { StyledCartTotal } from "./cartTotal";
import { StyledBtn } from "../../../style/button";

export const CartTotal = ({ currentSale, deleteProductFromSaleCart }) => {
  const totalValueSale = currentSale.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price;
  }, 0);

  return (
    <>
      <StyledCartTotal>
        <div>
          <h2>Total</h2>
          <span>{`R$ ${totalValueSale.toFixed(2)}`}</span>
        </div>
        <StyledBtn
          btnSize="default"
          btnStyleColor="btnGrey"
          onClick={() => deleteProductFromSaleCart()}
        >
          Remover todos
        </StyledBtn>
      </StyledCartTotal>
    </>
  );
};
