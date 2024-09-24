import IconButton from "./basic-components/IconButton";

function Topbar() {
  return (
    <div className="flex justify-between w-full">
      <div className="w-[60%] flex justify-evenly items-center font-bold">
        <a href="/" className="text-3xl">
          Farmiest!
        </a>
        <ul className="flex text-xl gap-x-4">
          <li>
            <a href="" className="text-emerald-400 underline">
              Home
            </a>
          </li>
          <li>
            <a href="">Store</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
      </div>
      <div className="w-[40%] flex text-xl gap-x-4 ">
        <div className="flex">
          <IconButton
            className={"w-max px-4 border-2 border-black"}
            icon={"location.png"}
            isIcon={true}
            onClick={() => {
              console.log("Clicked");
            }}
          />
          <IconButton
            className={"w-max px-4 border-2 border-black"}
            icon={"search.png"}
            isIcon={true}
            onClick={() => {
              console.log("Clicked");
            }}
          />
        </div>
        <div>
          <IconButton
            className={"w-max border-2 border-black"}
            icon={"account.png"}
            isDropdown={false}
            isIcon={true}
            onClick={() => {
              console.log("Clicked");
            }}
            title={"Account"}
          />
        </div>
        <div>
          <IconButton
            className={"w-max border-2 border-black"}
            icon={"bag.png"}
            isDropdown={false}
            isIcon={true}
            onClick={() => {
              console.log("Clicked");
            }}
            title={"Bag"}
          />
        </div>
        <div>
          <IconButton
            className={"w-max border-2 border-black"}
            icon={"globe.png"}
            isDropdown={true}
            isIcon={true}
            onClick={() => {
              console.log("Clicked");
            }}
            title={"EN"}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
