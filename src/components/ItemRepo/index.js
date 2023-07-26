import React from "react";
import { ItemContainer } from "./style";
import { FaExternalLinkAlt, FaTrashAlt } from "react-icons/fa";

function ItemRepo({ repo, deleteFunction }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div>
        <a href={repo.html_url} rel="noreferrer" target="_blank">
          <FaExternalLinkAlt />
        </a>
        <button
          className={repo.id}
          onClick={(e) => deleteFunction(e.currentTarget.className)}
        >
          <FaTrashAlt />
        </button>
      </div>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
