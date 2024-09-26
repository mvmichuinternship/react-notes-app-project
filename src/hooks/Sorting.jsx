import React, { useContext } from "react";
import { ItemManagerContext } from "../context/ItemContext";

function useSorting(category, nameorder,descorder){

    console.log("term",category, nameorder, descorder)
    const {items} = useContext(ItemManagerContext)
    const sorted = items
    if(String(category)==="name"){
        // if(nameorder===true){
            sorted.sort((a,b)=> a.title.localeCompare(b.title))
            console.log("a",sorted)
        // }
        // else if(nameorder===false){
            // sorted.sort((a,b)=> b.title.localeCompare(a.title))
            // console.log("b",sorted)
        // }
    }
    else if(String(category)==="description"){
        // if(descorder===true){
            sorted.sort((a,b)=> a.description.localeCompare(b.description))
            console.log(sorted)
        // }
        // else if(descorder===false){
            // sorted.sort((a,b)=> b.description.localeCompare(a.description))
            // console.log(sorted)
        // }
    }
    // console.log(sorted);
    return sorted;
}

export default useSorting;