import { StyledDashboardPage } from "./dashboardPage";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { CartEmpty, CartNoEmpty } from "../../components/Cart";
import { useState } from "react";

export const DashboardPage = ({ product }) => {
  const [currentSale, setCurrentSale] = useState([]);

  const addProductToSaleCart = (saleProduct) => {
    if (
      !currentSale.find(
        (addProductToCart) => addProductToCart.id === saleProduct.id
      )
    ) {
      setCurrentSale([...currentSale, saleProduct]);
    } else {
      console.log("Já foi adicionado");
    }
  };

  const deleteProductFromSaleCart = (IdProductDelete) => {
    const deleteProduct = currentSale.filter(
      (product) => product.id !== IdProductDelete
    );
    setCurrentSale(deleteProduct);
  };

  return (
    <>
      <Header />
      <StyledDashboardPage>
        <main>
          <ProductList
            product={product}
            addProductToSaleCart={addProductToSaleCart}
          />
        </main>
        {currentSale.length == 0 ? (
          <CartEmpty />
        ) : (
          <CartNoEmpty
            currentSale={currentSale}
            deleteProductFromSaleCart={deleteProductFromSaleCart}
          />
        )}
      </StyledDashboardPage>
    </>
  );
};
