import React from "react";
import cn from "clsx";
import IconButton from "./IconButton";
import Avatar from "./Avatar";

function Card({
  className,
  cardType,
  dishType,
  dishName,
  dishPrice,
  onClick,
  feedbackTitle,
  feedbackDescription,
  userName,
  userOccupation,
  wideName,
  widePrice,
  infoData,
  infoName,
  classNameLeft,
  classNameRight,
  buttonClass,
  imgSrc,
  imgAlt,
  avatarClassName,
}) {
  return (
    <div
      className={cn(
        `px-2 py-1 `,
        // flex  justify-center items-center`,
        className
      )}
      onClick={onClick}
    >
      {cardType === "ecom" && (
        <div className="w-48 h-64 p-2 flex flex-col justify-between rounded-md shadow-md bg-white">
          <div className="w-full h-[60%] bg-amber-100 rounded-sm flex justify-center items-center">
            <Avatar
              imgAlt={imgAlt}
              imgSrc={imgSrc}
              className={avatarClassName}
            />
          </div>
          <div className="flex flex-col w-full text-start">
            <div className="text-xs">{dishType}</div>
            <div className="text-normal">{dishName}</div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-xs">₹ {dishPrice}</div>
              <svg
                width="84"
                height="15"
                viewBox="0 0 84 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76.1951 2.33238C76.3701 1.79513 77.1301 1.79513 77.3046 2.33238L78.1906 5.05888C78.2288 5.17583 78.3029 5.27774 78.4024 5.35003C78.502 5.42231 78.6218 5.46129 78.7448 5.46138H81.6119C82.1771 5.46138 82.4116 6.18471 81.9549 6.51721L79.6356 8.20188C79.5359 8.27431 79.4618 8.37642 79.4237 8.49357C79.3857 8.61072 79.3857 8.73691 79.4238 8.85405L80.3093 11.5805C80.4843 12.1184 79.8689 12.5652 79.4121 12.2327L77.0928 10.548C76.9931 10.4756 76.8731 10.4366 76.7498 10.4366C76.6266 10.4366 76.5065 10.4756 76.4068 10.548L74.0875 12.2327C73.6307 12.5652 73.0153 12.1178 73.1903 11.5805L74.0758 8.85405C74.1139 8.73691 74.1139 8.61072 74.0759 8.49357C74.0378 8.37642 73.9637 8.27431 73.8641 8.20188L71.5447 6.51721C71.0874 6.18471 71.3231 5.46138 71.8877 5.46138H74.7542C74.8773 5.46141 74.9973 5.42249 75.0969 5.3502C75.1966 5.2779 75.2708 5.17593 75.309 5.05888L76.1951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.19506 2.33238C6.37006 1.79513 7.13014 1.79513 7.30456 2.33238L8.19064 5.05888C8.22878 5.17583 8.30291 5.27774 8.40243 5.35003C8.50196 5.42231 8.6218 5.46129 8.74481 5.46138H11.6119C12.1771 5.46138 12.4116 6.18471 11.9549 6.51721L9.63556 8.20188C9.53593 8.27431 9.46179 8.37642 9.42375 8.49357C9.38571 8.61072 9.38573 8.73691 9.42381 8.85405L10.3093 11.5805C10.4843 12.1184 9.86889 12.5652 9.41214 12.2327L7.09281 10.548C6.99313 10.4756 6.87305 10.4366 6.74981 10.4366C6.62657 10.4366 6.50649 10.4756 6.40681 10.548L4.08748 12.2327C3.63073 12.5652 3.01531 12.1178 3.19031 11.5805L4.07581 8.85405C4.11389 8.73691 4.11391 8.61072 4.07587 8.49357C4.03784 8.37642 3.96369 8.27431 3.86406 8.20188L1.54473 6.51721C1.08739 6.18471 1.32306 5.46138 1.88773 5.46138H4.75423C4.87734 5.46141 4.9973 5.42249 5.09695 5.3502C5.1966 5.2779 5.27081 5.17593 5.30898 5.05888L6.19506 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.6951 2.33238C23.8701 1.79513 24.6301 1.79513 24.8046 2.33238L25.6906 5.05888C25.7288 5.17583 25.8029 5.27774 25.9024 5.35003C26.002 5.42231 26.1218 5.46129 26.2448 5.46138H29.1119C29.6771 5.46138 29.9116 6.18471 29.4549 6.51721L27.1356 8.20188C27.0359 8.27431 26.9618 8.37642 26.9237 8.49357C26.8857 8.61072 26.8857 8.73691 26.9238 8.85405L27.8093 11.5805C27.9843 12.1184 27.3689 12.5652 26.9121 12.2327L24.5928 10.548C24.4931 10.4756 24.3731 10.4366 24.2498 10.4366C24.1266 10.4366 24.0065 10.4756 23.9068 10.548L21.5875 12.2327C21.1307 12.5652 20.5153 12.1178 20.6903 11.5805L21.5758 8.85405C21.6139 8.73691 21.6139 8.61072 21.5759 8.49357C21.5378 8.37642 21.4637 8.27431 21.3641 8.20188L19.0447 6.51721C18.5874 6.18471 18.8231 5.46138 19.3877 5.46138H22.2542C22.3773 5.46141 22.4973 5.42249 22.5969 5.3502C22.6966 5.2779 22.7708 5.17593 22.809 5.05888L23.6951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.1951 2.33238C41.3701 1.79513 42.1301 1.79513 42.3046 2.33238L43.1906 5.05888C43.2288 5.17583 43.3029 5.27774 43.4024 5.35003C43.502 5.42231 43.6218 5.46129 43.7448 5.46138H46.6119C47.1771 5.46138 47.4116 6.18471 46.9549 6.51721L44.6356 8.20188C44.5359 8.27431 44.4618 8.37642 44.4237 8.49357C44.3857 8.61072 44.3857 8.73691 44.4238 8.85405L45.3093 11.5805C45.4843 12.1184 44.8689 12.5652 44.4121 12.2327L42.0928 10.548C41.9931 10.4756 41.8731 10.4366 41.7498 10.4366C41.6266 10.4366 41.5065 10.4756 41.4068 10.548L39.0875 12.2327C38.6307 12.5652 38.0153 12.1178 38.1903 11.5805L39.0758 8.85405C39.1139 8.73691 39.1139 8.61072 39.0759 8.49357C39.0378 8.37642 38.9637 8.27431 38.8641 8.20188L36.5447 6.51721C36.0874 6.18471 36.3231 5.46138 36.8877 5.46138H39.7542C39.8773 5.46141 39.9973 5.42249 40.0969 5.3502C40.1966 5.2779 40.2708 5.17593 40.309 5.05888L41.1951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M58.6951 2.33238C58.8701 1.79513 59.6301 1.79513 59.8046 2.33238L60.6906 5.05888C60.7288 5.17583 60.8029 5.27774 60.9024 5.35003C61.002 5.42231 61.1218 5.46129 61.2448 5.46138H64.1119C64.6771 5.46138 64.9116 6.18471 64.4549 6.51721L62.1356 8.20188C62.0359 8.27431 61.9618 8.37642 61.9237 8.49357C61.8857 8.61072 61.8857 8.73691 61.9238 8.85405L62.8093 11.5805C62.9843 12.1184 62.3689 12.5652 61.9121 12.2327L59.5928 10.548C59.4931 10.4756 59.3731 10.4366 59.2498 10.4366C59.1266 10.4366 59.0065 10.4756 58.9068 10.548L56.5875 12.2327C56.1307 12.5652 55.5153 12.1178 55.6903 11.5805L56.5758 8.85405C56.6139 8.73691 56.6139 8.61072 56.5759 8.49357C56.5378 8.37642 56.4637 8.27431 56.3641 8.20188L54.0447 6.51721C53.5874 6.18471 53.8231 5.46138 54.3877 5.46138H57.2542C57.3773 5.46141 57.4973 5.42249 57.5969 5.3502C57.6966 5.2779 57.7708 5.17593 57.809 5.05888L58.6951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="w-full flex justify-between gap-x-1">
              <IconButton
                className={
                  "w-fit rounded-sm bg-orange-400 border-none text-white text-[10px] shadow-md"
                }
                title={"ADD TO CART"}
                isRightArrow={true}
                onClick={() => {
                  console.log("Added to cart");
                }}
              />
              <div className=" flex gap-x-1">
                <IconButton
                  className={"w-fit bg-amber-400 rounded-sm"}
                  isIcon={true}
                  icon={"heart-icon.png"}
                />
                <IconButton
                  className={"w-fit bg-amber-400 rounded-sm"}
                  isIcon={true}
                  icon={"eye-icon.png"}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {cardType === "feedback" && (
        <div className="w-80 h-36 rounded-md shadow-md bg-white text-sm p-3 text-center">
          <div className="flex w-full h-full flex-col justify-between">
            <div className="flex  justify-between items-start">
              <div>
                <div className="text-start w-[90%] text-sm font-bold">
                  {feedbackTitle}
                </div>
                <div className="text-start w-[90%] text-xs text-ellipsis">
                  {feedbackDescription}
                </div>
              </div>

              <img src="quotes-icon.png" className="w-8 h-5" alt="" />
            </div>
            <div className=" bg-rose-200 text-white flex-col h rounded-md p-3">
              <div className="text-start text-xs font-bold">
                Progress percentage: {userName}
              </div>
              <div className="text-start text-xs">{userOccupation}</div>
            </div>
          </div>
          <Avatar
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            className={
              "w-[44px] border border-white rounded-md relative bottom-20 left-56"
            }
          />
        </div>
      )}

      {cardType === "wide" && (
        <div className="w-64 p-2 flex justify-start gap-x-4 bg-white rounded-sm shadow-md">
          <div className="w-20 h-20 bg-amber-100 rounded-sm">
            <Avatar imgAlt={imgAlt} imgSrc={imgSrc} className={"w-full"} />
          </div>
          <div className="flex flex-col justify-around items-start">
            <div className="text-sm">{wideName}</div>
            <div>
              <svg
                width="84"
                height="15"
                viewBox="0 0 84 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M76.1951 2.33238C76.3701 1.79513 77.1301 1.79513 77.3046 2.33238L78.1906 5.05888C78.2288 5.17583 78.3029 5.27774 78.4024 5.35003C78.502 5.42231 78.6218 5.46129 78.7448 5.46138H81.6119C82.1771 5.46138 82.4116 6.18471 81.9549 6.51721L79.6356 8.20188C79.5359 8.27431 79.4618 8.37642 79.4237 8.49357C79.3857 8.61072 79.3857 8.73691 79.4238 8.85405L80.3093 11.5805C80.4843 12.1184 79.8689 12.5652 79.4121 12.2327L77.0928 10.548C76.9931 10.4756 76.8731 10.4366 76.7498 10.4366C76.6266 10.4366 76.5065 10.4756 76.4068 10.548L74.0875 12.2327C73.6307 12.5652 73.0153 12.1178 73.1903 11.5805L74.0758 8.85405C74.1139 8.73691 74.1139 8.61072 74.0759 8.49357C74.0378 8.37642 73.9637 8.27431 73.8641 8.20188L71.5447 6.51721C71.0874 6.18471 71.3231 5.46138 71.8877 5.46138H74.7542C74.8773 5.46141 74.9973 5.42249 75.0969 5.3502C75.1966 5.2779 75.2708 5.17593 75.309 5.05888L76.1951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.19506 2.33238C6.37006 1.79513 7.13014 1.79513 7.30456 2.33238L8.19064 5.05888C8.22878 5.17583 8.30291 5.27774 8.40243 5.35003C8.50196 5.42231 8.6218 5.46129 8.74481 5.46138H11.6119C12.1771 5.46138 12.4116 6.18471 11.9549 6.51721L9.63556 8.20188C9.53593 8.27431 9.46179 8.37642 9.42375 8.49357C9.38571 8.61072 9.38573 8.73691 9.42381 8.85405L10.3093 11.5805C10.4843 12.1184 9.86889 12.5652 9.41214 12.2327L7.09281 10.548C6.99313 10.4756 6.87305 10.4366 6.74981 10.4366C6.62657 10.4366 6.50649 10.4756 6.40681 10.548L4.08748 12.2327C3.63073 12.5652 3.01531 12.1178 3.19031 11.5805L4.07581 8.85405C4.11389 8.73691 4.11391 8.61072 4.07587 8.49357C4.03784 8.37642 3.96369 8.27431 3.86406 8.20188L1.54473 6.51721C1.08739 6.18471 1.32306 5.46138 1.88773 5.46138H4.75423C4.87734 5.46141 4.9973 5.42249 5.09695 5.3502C5.1966 5.2779 5.27081 5.17593 5.30898 5.05888L6.19506 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M23.6951 2.33238C23.8701 1.79513 24.6301 1.79513 24.8046 2.33238L25.6906 5.05888C25.7288 5.17583 25.8029 5.27774 25.9024 5.35003C26.002 5.42231 26.1218 5.46129 26.2448 5.46138H29.1119C29.6771 5.46138 29.9116 6.18471 29.4549 6.51721L27.1356 8.20188C27.0359 8.27431 26.9618 8.37642 26.9237 8.49357C26.8857 8.61072 26.8857 8.73691 26.9238 8.85405L27.8093 11.5805C27.9843 12.1184 27.3689 12.5652 26.9121 12.2327L24.5928 10.548C24.4931 10.4756 24.3731 10.4366 24.2498 10.4366C24.1266 10.4366 24.0065 10.4756 23.9068 10.548L21.5875 12.2327C21.1307 12.5652 20.5153 12.1178 20.6903 11.5805L21.5758 8.85405C21.6139 8.73691 21.6139 8.61072 21.5759 8.49357C21.5378 8.37642 21.4637 8.27431 21.3641 8.20188L19.0447 6.51721C18.5874 6.18471 18.8231 5.46138 19.3877 5.46138H22.2542C22.3773 5.46141 22.4973 5.42249 22.5969 5.3502C22.6966 5.2779 22.7708 5.17593 22.809 5.05888L23.6951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.1951 2.33238C41.3701 1.79513 42.1301 1.79513 42.3046 2.33238L43.1906 5.05888C43.2288 5.17583 43.3029 5.27774 43.4024 5.35003C43.502 5.42231 43.6218 5.46129 43.7448 5.46138H46.6119C47.1771 5.46138 47.4116 6.18471 46.9549 6.51721L44.6356 8.20188C44.5359 8.27431 44.4618 8.37642 44.4237 8.49357C44.3857 8.61072 44.3857 8.73691 44.4238 8.85405L45.3093 11.5805C45.4843 12.1184 44.8689 12.5652 44.4121 12.2327L42.0928 10.548C41.9931 10.4756 41.8731 10.4366 41.7498 10.4366C41.6266 10.4366 41.5065 10.4756 41.4068 10.548L39.0875 12.2327C38.6307 12.5652 38.0153 12.1178 38.1903 11.5805L39.0758 8.85405C39.1139 8.73691 39.1139 8.61072 39.0759 8.49357C39.0378 8.37642 38.9637 8.27431 38.8641 8.20188L36.5447 6.51721C36.0874 6.18471 36.3231 5.46138 36.8877 5.46138H39.7542C39.8773 5.46141 39.9973 5.42249 40.0969 5.3502C40.1966 5.2779 40.2708 5.17593 40.309 5.05888L41.1951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M58.6951 2.33238C58.8701 1.79513 59.6301 1.79513 59.8046 2.33238L60.6906 5.05888C60.7288 5.17583 60.8029 5.27774 60.9024 5.35003C61.002 5.42231 61.1218 5.46129 61.2448 5.46138H64.1119C64.6771 5.46138 64.9116 6.18471 64.4549 6.51721L62.1356 8.20188C62.0359 8.27431 61.9618 8.37642 61.9237 8.49357C61.8857 8.61072 61.8857 8.73691 61.9238 8.85405L62.8093 11.5805C62.9843 12.1184 62.3689 12.5652 61.9121 12.2327L59.5928 10.548C59.4931 10.4756 59.3731 10.4366 59.2498 10.4366C59.1266 10.4366 59.0065 10.4756 58.9068 10.548L56.5875 12.2327C56.1307 12.5652 55.5153 12.1178 55.6903 11.5805L56.5758 8.85405C56.6139 8.73691 56.6139 8.61072 56.5759 8.49357C56.5378 8.37642 56.4637 8.27431 56.3641 8.20188L54.0447 6.51721C53.5874 6.18471 53.8231 5.46138 54.3877 5.46138H57.2542C57.3773 5.46141 57.4973 5.42249 57.5969 5.3502C57.6966 5.2779 57.7708 5.17593 57.809 5.05888L58.6951 2.33238V2.33238Z"
                  stroke="#FFBA43"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="text-xs">₹ {widePrice}</div>
          </div>
        </div>
      )}

      {cardType === "info" && (
        <>
          <div className={cn("w-72 h-44 flex shadow-md bg-white")}>
            <div
              className={cn(
                "w-48 bg-amber-100 flex flex-col z-1 text-center justify-center items-start px-4",
                classNameLeft
              )}
            >
              <div className="text-sm satisfy-regular">{infoData}</div>
              <div className="text-xl">{infoName}</div>
              <IconButton
                className={cn(
                  "w-fit bg-amber-400 rounded-md text-white text-xs mt-4",
                  buttonClass
                )}
                isIcon={false}
                title={"Shop now"}
              />
            </div>
            <div className={cn("w-24 bg-amber-400", classNameRight)}></div>
          </div>
          <Avatar
            imgAlt={imgAlt}
            imgSrc={imgSrc}
            className={"relative bottom-40 left-[64px] w-[224px]  z-500"}
          />
        </>
      )}
    </div>
  );
}

export default Card;
