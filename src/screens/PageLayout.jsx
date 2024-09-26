import AddRemove from "../components/AddRemove";
import { useContext, useEffect, useRef, useState } from "react";
import IconButton from "../components/basic-components/IconButton";
import { ItemManagerContext } from "../context/ItemContext";
import Card from '../components/basic-components/OutlineCard'
import useFiltering from "../hooks/Filtering";
import useSorting from "../hooks/Sorting";
import { RWebShare } from "react-web-share";

function PageLayout() {
  const [itemNew, setItemNew] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [nameorder, setNameOrder] = useState(true);
  const [descorder, setDescOrder] = useState(true);
  const [sortType, setSortType] = useState("name");
  const [ currentItem, setCurrentItem] = useState({})

  const [emptyData,setEmptyData] =  useState(false)

  const searchRef = useRef(null);
  const selectRef = useRef(null);

  const { addItem, removeItem, items, editItem, getSingleItem, emptySingleItem } =
    useContext(ItemManagerContext);

    const [shareData, setShareData] = useState({
      file:items
    })

      const filtered = useFiltering(searchText);
  const sorted = useSorting(sortType, nameorder, descorder);

  const HandleShare = async()=>{
    // if(navigator.canShare(shareData))
    // const res = await navigator.share({title:"See your notes", text:"Shared by mv", url:"http://localhost:3000/"})
    // if(res.ok){
    //   console.log("Share successfull")
    // }
    // else{
    //   console.log("Share failed")
    // }

  }


  useEffect(() => {
    // console.log(data.name)
    setItemNew(items);
  },[items, currentItem]);

  useEffect(() => {
      setItemNew(filtered);
    }, [searchText]);
  
    useEffect(() => {
      setItemNew(sorted);
      // if(sortType=="name"){
      //   setNameOrder(!nameorder)
      // }
      // else if(sortType=="description"){
      //   setDescOrder(!descorder)
      // }
    }, [sortType]);
  

  return (
    <div className="w-full h-screen bg-white">
      <div className="flex w-[100%] h-full items-start  gap-y-4">
        
        <div className="flex flex-col  items-center w-[40%] space-y-3  h-[95%] overflow-y-auto">
            <div className="flex w-full justify-center gap-x-2 gap-y-4 pt-20  ">
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
              className={"w-fit bg-rose-300 rounded-r-md text-white"}
              isIcon={true}
              icon={"search-icon.png"}
            />
          </div>
          <div className="border-2 border-rose-200 bg-white text-center rounded-md">
            <select
            className="text-center py-1"
              name="Sort"
              id=""
              ref={selectRef}
              onChange={(e) => {
                setSortType(e.target.value);
              }}
              onFocus={() => {
                // setNameOrder(!nameorder);
                // setDescOrder(!descorder);
              }}
            >
              <option value="name">By Name</option>
              <option value="description">By Description</option>
            </select>
          </div>
            </div>
            <div className="border border-rose-200 rounded-md bg-rose-300 text-white py-1 px-2 w-[50%]" >
            <button className="w-full" onClick={()=>{emptySingleItem()}}>
            New Note
            </button>
           
          </div>
        
        <div className="gap-x-2 gap-y-2 flex flex-col items-center py-4  px-4 rounded-xl bg-rose-300 overflow-y-auto">
         
          {itemNew.map(
            (item, index) =>
              item.title &&(
                <div key={index} onClick={()=>{getSingleItem(item.title)}} className="cursor-pointer">
                  {/* {console.log(item)} */}
                  <Card cardType={"feedback"} feedbackTitle={item.title} feedbackDescription={item.description} userName={item.progress} userOccupation={item.deadline} imgAlt={"profile"} imgSrc={item.image} avatarClassName={""}/>
                </div>
              )
          )}
        </div>
        </div>
        <div className="border border-r h-full  border-rose-200"></div>
        <div className="flex flex-col w-full items-center">
            {currentItem&&
            <AddRemove />
            }
            {/* <RWebShare data={
              {title:"See your notes", text:"Shared by mv", url:"http://localhost:3000/"}
            }onClick={HandleShare}>
              <IconButton className={
          "w-fit rounded-md bg-rose-300 border border-rose-200 text-white shadow-md"
        }
        title={"Share"}
        isRightArrow={false}
        />
            </RWebShare> */}
          
        </div>
      </div>
    </div>
  );
}

export default PageLayout;
