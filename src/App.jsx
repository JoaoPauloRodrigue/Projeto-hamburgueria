import { useEffect, useState } from "react";
import { DashboardPage } from "./pages/dashboardPage";
import { apiHamburgueria } from "./service/api";

export const App = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiHamburgueria.get("products");
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="App">
      <DashboardPage product={product} />
    </div>
  );
};
