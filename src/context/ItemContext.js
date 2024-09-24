// REDUCER

import { type } from "@testing-library/user-event/dist/type";
import { notesData } from "../data/notesData";

const { createContext, useReducer } = require("react");

// initial state
const initialState = {
  items: notesData,
  singleItem:{},
};
// actions
const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  GET_BY_ID: "GET_BY_ID"
};
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
        console.log(action)
      return {
        singleItem: state.singleItem,
        items: [
          ...state.items,
          {
            title: action.payload.item_title,
            description: action.payload.item_desc,
            image: action.payload.item_image,
            progress: action.payload.item_progress,
            isComplete: action.payload.item_completed,
            deadline: action.payload.item_deadline,
            isReminder: action.payload.item_reminder,
          },
        ],
      };
    case actions.REMOVE_ITEM:
      const removed = state.items.filter(
        (item) => item.title !== action.item_title
      );
      return {
        items: removed,
        singleItem: state.singleItem,
      };
      case actions.GET_BY_ID:
        const getById = state.items.filter(
          (item) => item.title === action.item_title
        );
        return {
          singleItem: getById[0],
          items:[...state.items]
        };
    case actions.EDIT_ITEM:
      return {
        singleItem: state.singleItem,
        items: [
          ...state.items,
          {
            title: action.item_title,
            description: action.item_desc,
            image: action.item_image,
            progress: action.item_progress,
            isComplete: action.item_completed,
            deadline: Date(action.item_deadline),
            isReminder: action.item_reminder,
          },
        ],
      };
    default:
        return state
  }
};

// CREATE CONTEXT AND PROVIDER TO MAKE STATE GLOBALLY AVAILABLE

// create context

export const ItemManagerContext = createContext();

export const ItemManagerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // assigning dispatch functions for reusability
  const value = {
    items: state.items,
    singleItem:state.singleItem,
    addItem: ({item_title, item_desc, item_image, item_progress, item_completed, item_deadline, item_reminder}) => {
      dispatch({ type: actions.ADD_ITEM, payload:{
        item_title, item_desc, item_image, item_progress, item_completed, item_deadline, item_reminder

      } });
    },
    removeItem: (item_title) => {
      dispatch({ type: actions.REMOVE_ITEM, item_title });
    },
    getSingleItem: (item_title) => {
        dispatch({ type: actions.GET_BY_ID, item_title });
      },
    editItem:(item_title, item_desc, item_image, item_progress, item_completed, item_deadline, item_reminder)=>{
        dispatch({type:actions.EDIT_ITEM, item_title, item_desc, item_image, item_progress, item_completed, item_deadline, item_reminder})
    }
  };

  return (
    <ItemManagerContext.Provider value={value}>
      {children}
    </ItemManagerContext.Provider>
  );
};
