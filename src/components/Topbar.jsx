import { RWebShare } from "react-web-share";
import IconButton from "./basic-components/IconButton";

function Topbar() {
  return (
    <div className="flex justify-between w-full px-4 py-3 shadow-lg">
      <div className="w-full flex justify-between items-center font-bold">
        <a href="/" className="text-3xl text-rose-300">
          Notes!
        </a>
        <ul className="flex text-xl gap-x-4" >
          <li>
          <RWebShare data={
              {title:"See your notes", text:"Shared by mv", url:"http://localhost:3000/"}
            }onClick={()=>{console.log("Sharing")}}>
              <IconButton className={
          "w-fit rounded-md bg-rose-300 border border-rose-200 text-white shadow-md"
        }
        title={"Share"}
        isRightArrow={false}
        />
            </RWebShare>
          </li>
          
        </ul>
      </div>
      
    </div>
  );
}

export default Topbar;
