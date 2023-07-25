import React from "react";
import { ItemContainer } from "./style";

function ItemRepo() {
  return (
    <ItemContainer>
      <h3>Bianca</h3>
      <p>/bncblnc</p>
      <a href="#">Ver repositório</a>
      <a href="#" className="remover">
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
