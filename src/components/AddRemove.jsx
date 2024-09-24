import React, { useState, useRef, useContext, useEffect } from "react";
import { ItemManagerContext } from "../context/ItemContext";
import useFiltering from "../hooks/Filtering";
import useSorting from "../hooks/Sorting";
import IconButton from "./basic-components/IconButton";

function AddRemove() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const progressRef = useRef(null);
  const completedRef = useRef(null);
  const deadlineRef = useRef(null);
  const reminderRef = useRef(null);

  const searchRef = useRef(null);
  const selectRef = useRef(null);

  const { addItem, removeItem, items, editItem, singleItem } =
    useContext(ItemManagerContext);


  const [itemData, setItemData] = useState({
    item_title: singleItem?.title || "",
    item_desc: singleItem?.description || "",
    item_image: "",
    item_progress: singleItem?.progress || "",
    item_completed: singleItem?.completed || false,
    item_deadline: singleItem?.deadline || "",
    item_reminder: singleItem?.reminder || true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setItemData((prev) => ({
        ...prev,

        [name]: checked,
      }));
    } else setItemData({ ...itemData, [name]: value });
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    // console.log(data.name)
    // setItemNew(items);
    console.log(singleItem);
    console.log(itemData);

    if (singleItem) {
      setItemData({
        item_title: singleItem.title || " ",
        item_desc: singleItem.description || "",
        item_image: "",
        item_progress: singleItem.progress || "",
        item_completed: singleItem.completed || false,
        item_deadline: singleItem.deadline || "",
        item_reminder: singleItem.reminder || true,
      });
    }
  }, [singleItem]);

  // useEffect(() => {
  //   // setItemNew(filtered);
  // }, [searchText]);

  // useEffect(() => {
  //   // setItemNew(sorted);
  // }, [sortType, nameorder, descorder]);
  return (
    <div className="flex flex-col w-[60%] my-20 mx-10 justify-center h-full gap-y-4">
      <div className="flex flex-col gap-x-3 gap-y-3">
        <input
          className="border border-rose-200 h-fit px-2 rounded-md py-1 focus:outline-rose-300"
          name="item_title"
          type="text"
          ref={nameRef}
          // defaultValue={singleItem.title}
          value={itemData.item_title}
          placeholder={"Add title"}
          onChange={handleInputChange}
        />
        <input
          className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300 h-20"
          name="item_desc"
          type="text"
          ref={descRef}
          value={itemData.item_desc}
          placeholder={"Add description"}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex gap-x-3 gap-y-3">
        <input
          className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300"
          name="item_image"
          type="file"
          accept="image/png, image/jpeg"
          ref={imageRef}
          value={itemData.item_image}
          onChange={handleInputChange}
        />
        <input
          className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300"
          name="item_progress"
          type="text"
          ref={progressRef}
          value={itemData.item_progress}
          placeholder={"Add progress in percentage"}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex gap-x-3 gap-y-3">
        <input
          className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300"
          name="item_deadline"
          type="date"
          ref={deadlineRef}
          value={itemData.item_deadline}
          placeholder={"Add Deadline"}
          onChange={handleInputChange}
        />
        <span className="flex gap-x-2 gap-y-2 justify-center items-center">
          <label htmlFor="itemCompleted">Completed?</label>
          <input
            className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300"
            name="item_completed"
            type="checkbox"
            ref={completedRef}
            value={itemData.item_completed}
            onChange={handleInputChange}
          />
        </span>
        <span className="flex gap-x-2 gap-y-2 justify-center items-center">
          <label htmlFor="itemReminder">Set Reminder?</label>
          <input
            className="border border-rose-200 px-2 rounded-md py-1 focus:outline-rose-300"
            name="item_reminder"
            type="checkbox"
            ref={reminderRef}
            value={itemData.item_reminder}
            onChange={handleInputChange}
          />
        </span>
      </div>
      <IconButton
        className={
          "w-full rounded-md bg-rose-400 border border-rose-200-none text-white shadow-md"
        }
        title={"Add"}
        isRightArrow={false}
        onClick={() => {
          console.log("Added note", itemData);
          addItem(itemData);
        }}
      />
    </div>
  );
}

export default AddRemove;
