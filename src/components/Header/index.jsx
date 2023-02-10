import { StyledHeader } from "./header";
import logo from "../../assets/image/logo.svg";
import { InputSearch } from "../InputSearch";
import { StyledBtn } from "../../style/button";

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <img src={logo} alt="logo" />
        <div className="container-input">
          <InputSearch />
          <StyledBtn
            btnSize="inputSearch"
            btnStyleColor="btnGreen"
            type="submit"
          >
            Pesquisar
          </StyledBtn>
        </div>
      </StyledHeader>
    </div>
  );
};
