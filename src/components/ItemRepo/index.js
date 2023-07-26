import React from "react";
import { ItemContainer } from "./style";

function ItemRepo({ repo, deleteFunction }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver repositório
      </a>
      <button
        className={repo.id}
        onClick={(e) => deleteFunction(e.currentTarget.className)}
      >
        Remover
      </button>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
