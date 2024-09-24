    Button Component
    <div className="w-[100%]">
    
    <IconButton
        className={"w-fit border-2 border-black"}
        icon={"account.png"}
        isDropdown={false}
        isIcon={true}
        onClick={() => {
          console.log("Clicked");
        }}
        title={"Account"}
      />
    <IconButton
        className={
          "w-fit rounded-md bg-orange-400 border-none text-white shadow-md"
        }
        title={"Coloured"}
        isRightArrow={true}
        onClick={() => {
          console.log("This is a coloured button");
        }}
      />
    <IconButton
        className={"w-fit bg-yellow-400 rounded-md"}
        isIcon={true}
        icon={"heart-icon.png"}
      />

    </div>


    <Card cardType={"ecom"} dishName={"Chips"} dishPrice={"10"} dishType={"Breakfast"} imgAlt={"food"} imgSrc={"food/fries.png"} avatarClassName={""}/>
      <Card cardType={"feedback"} feedback={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."} userName={"Mridula Vinod"} userOccupation={"Associate Engineer"}/>
      <Card cardType={"wide"} wideName={"Bread"} widePrice={10}/>
      <Card cardType={"info"} infoData={"flat 20% off"} infoName={"VEGETABLES"} classNameLeft={"bg-emerald-100"} classNameRight={"bg-emerald-400 "} buttonClass={"bg-emerald-500"} imgAlt={"info-food"} imgSrc={"food/info-card/veg.png"} avatarClassName={""}/>

      <Card cardType={"ecom"} dishName={"Chips"} dishPrice={"10"} dishType={"Breakfast"} imgAlt={"food"} imgSrc={"food/fries.png"} avatarClassName={""}/>
      <Card cardType={"feedback"} feedback={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam."} userName={"Mridula Vinod"} userOccupation={"Associate Engineer"} imgAlt={"profile"} imgSrc={"avatars/avatar1.png"} avatarClassName={""}/>
      <Card cardType={"wide"} wideName={"Bread"} widePrice={10} imgAlt={"imgAlt"} imgSrc={"food/bread.png"}/>
      <Card cardType={"info"} infoData={"flat 20% off"} infoName={"VEGETABLES"} classNameLeft={"bg-emerald-100"} classNameRight={"bg-emerald-400 "} buttonClass={"bg-emerald-500"} imgAlt={"info-food"} imgSrc={"food/info-card/veg.png"} avatarClassName={""}/>
    


