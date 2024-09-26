import { useContext, useEffect, useState } from "react";
import { ItemManagerContext } from "../context/ItemContext";

function WorkSpace() {
  const [newUser, setNewUser] = useState([]);

  const {
    addItem,
    removeItem,
    items,
    editItem,
    getSingleItem,
    emptySingleItem,
    users,
    getSingleUser
  } = useContext(ItemManagerContext);

  useEffect(() => {
    // console.log(data.name)
    setNewUser(users);
  }, [users]);
  return (
    
    <div className="w-full h-full flex flex-col  bg-rose-100">
        <div className="pt-20 text-rose-300 font-black px-2">
            MY WORKSPACES
        </div>
 {newUser?(
            <div className="w-full h-full flex flex-col justify-start items-start bg-rose-100 gap-y-4 pt-10">
            {newUser.map(
              (item) =>
                item.name && (
                  <div
                    key={item.id}
                    onClick={() => {
                      //   getSingleItem(item.title);
                      getSingleUser(item.id)
                      
      
                    }}
                    className="cursor-pointer text-start text-rose-300 font-black w-full px-4 py-2 bg-rose-100 rounded-sm hover:bg-rose-200 hover:text-white"
                  >
                    {/* {console.log(item)} */}
                    {/* <div className=""> */}
                      {item.name}
                    {/* </div> */}
                  </div>
                )
            )}
          </div>
        ):(
            <div className=""> No workspace found</div>
        )
}
    </div>
       
   
  );
}
export default WorkSpace;
