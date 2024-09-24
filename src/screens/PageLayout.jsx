import AddRemove from "../components/AddRemove";
import { useContext, useEffect, useRef, useState } from "react";
import IconButton from "../components/basic-components/IconButton";
import { ItemManagerContext } from "../context/ItemContext";
import Card from '../components/basic-components/OutlineCard'
import useFiltering from "../hooks/Filtering";
import useSorting from "../hooks/Sorting";

function PageLayout() {
  const [itemNew, setItemNew] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [nameorder, setNameOrder] = useState(true);
  const [descorder, setDescOrder] = useState(true);
  const [sortType, setSortType] = useState("name");
  const [ currentItem, setCurrentItem] = useState({})

  const searchRef = useRef(null);
  const selectRef = useRef(null);

  const { addItem, removeItem, items, editItem, getSingleItem } =
    useContext(ItemManagerContext);


//       const filtered = useFiltering(searchText);
//   const sorted = useSorting(sortType, nameorder, descorder);

  useEffect(() => {
    // console.log(data.name)
    setItemNew(items);
  },[items, currentItem]);

  useEffect(() => {
    //   setItemNew(filtered);
    }, [searchText]);
  
    useEffect(() => {
    //   setItemNew(sorted);
    }, [sortType, nameorder, descorder]);
  

  return (
    <div className="w-full h-screen bg-rose-100">
      <div className="flex w-[100%] h-full items-start  gap-y-4">
        
        <div className="flex flex-col  items-center my-20 w-[30%]">
            <div className="flex w-full justify-center gap-x-2 gap-y-4 mb-10">
            <div className="flex ">
            <input
              className="border-2 border-rose-200 px-2 rounded-l-md py-1 w-full focus:outline-rose-300"
              type="text"
              ref={searchRef}
              value={searchText}
              placeholder={"Search"}
              onChange={(e) => {
                setSearchText(String(e.target.value));
              }}
            />

            <IconButton
              className={"w-fit bg-rose-400 rounded-r-md text-white"}
              isIcon={true}
              icon={"search-icon.png"}
            />
          </div>
          <div className="border-2 border-rose-200  text-center rounded-md">
            <select
              name="Sort"
              id=""
              ref={selectRef}
              onChange={(e) => {
                setSortType(e.target.value);
              }}
              onFocus={() => {
                setNameOrder(!nameorder);
                setDescOrder(!descorder);
              }}
            >
              <option value="name">By Name</option>
              <option value="description">By Description</option>
            </select>
          </div>
            </div>
         
        
        <div className="gap-x-2 gap-y-2 flex justify-center flex-wrap ">
          {itemNew.map(
            (item, index) =>
              item.title && (
                <div key={index} onClick={()=>{getSingleItem(item.title)}} className="cursor-pointer">
                  {/* {console.log(item)} */}
                  <Card cardType={"feedback"} feedbackTitle={item.title} feedbackDescription={item.description} userName={item.progress} userOccupation={item.deadline} imgAlt={"profile"} imgSrc={item.image} avatarClassName={""}/>
                </div>
              )
          )}
        </div>
        </div>
        <div className="border border-r h-full  border-rose-200"></div>
        <div>
            {currentItem&&
            <AddRemove />
            }
          
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
