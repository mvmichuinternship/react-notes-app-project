import React, { useContext } from "react";
import { ItemManagerContext } from "../context/ItemContext";

function useFiltering(searchTerm) {
  // console.log("term",searchTerm)
  const { items, singleUser } = useContext(ItemManagerContext);
  // const newItems = items.map(item => {item.name.toLowerCase(); item.description.toLowerCase()});
  const searchText = String(searchTerm).toLowerCase();
  // console.log(newItems)

  const filtered = items.filter((item) => {
    return (
      singleUser.id == item.uid && item.title.toLowerCase().includes(searchText)
    );
  });
  // console.log("filtered",filtered)
  return filtered;
}

export default useFiltering;
