// REDUCER

import { type } from "@testing-library/user-event/dist/type";
import { notesData } from "../data/notesData";
import { registerData } from "../data/registerData";

const { createContext, useReducer } = require("react");

// initial state
const initialState = {
  items: notesData,
  singleItem: {},
  users: registerData,
  singleUser: {},
};
// actions
const actions = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  EDIT_ITEM: "EDIT_ITEM",
  GET_BY_ID: "GET_BY_ID",
  EMPTY_SINGLE_ITEM: "EMPTY_SINGLE_ITEM",
  ADD_USER: "ADD_USER",
  GET_USER_BY_ID: "GET_USER_BY_ID",
};
// reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_ITEM:
      console.log(action);
      return {
        singleItem: state.singleItem,
        singleUser: state.singleUser,
        users: [...state.users],
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
            uid: action.payload.uid,
          },
        ],
      };
    case actions.ADD_USER:
      console.log(action);
      return {
        singleItem: state.singleItem,
        singleUser: state.singleUser,
        items: state.items,
        users: [
          ...state.users,
          {
            id: action.payload.id,
            name: action.payload.name,
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
        singleUser: state.singleUser,
        users: [...state.users],
      };
    case actions.GET_BY_ID:
      var getById = state.items.find(
        (item) => item.title === action.item_title
      );

      return {
        singleItem: getById,
        singleUser: state.singleUser,
        users: [...state.users],
        items: [...state.items],
      };
    case actions.GET_USER_BY_ID:
      var getUserById = state.users.find((user) => user.id === action.uid);

      // var currentData = [...state.items.filter( item => item.uid === getUserById.id)]
      return {
        singleItem: state.singleItem,
        singleUser: getUserById,
        users: [...state.users],
        items: [...state.items],
      };
    case actions.EMPTY_SINGLE_ITEM:
      const empty = {};
      return {
        singleItem: empty,
        singleUser: state.singleUser,
        users: [...state.users],
        items: [...state.items],
      };
    case actions.EDIT_ITEM:
      console.log(action.payload);
      const newEdit = {
        title: action.payload.item_title,
        description: action.payload.item_desc,
        image: action.payload.item_image,
        progress: action.payload.item_progress,
        isComplete: action.payload.item_completed,
        deadline: action.payload.item_deadline,
        isReminder: action.payload.item_reminder,
        uid: action.payload.uid,
      };
      return {
        singleItem: state.singleItem,
        singleUser: state.singleUser,
        users: [...state.users],

        items: state.items.map((item) =>
          item.title == newEdit.title ? newEdit : item
        ),
      };
    default:
      return state;
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
    singleItem: state.singleItem,
    singleUser: state.singleUser,
    users: state.users,
    addItem: ({
      item_title,
      item_desc,
      item_image,
      item_progress,
      item_completed,
      item_deadline,
      item_reminder,
      uid,
    }) => {
      dispatch({
        type: actions.ADD_ITEM,
        payload: {
          item_title,
          item_desc,
          item_image,
          item_progress,
          item_completed,
          item_deadline,
          item_reminder,
          uid,
        },
      });
    },
    addUser: ({ id, name }) => {
      dispatch({
        type: actions.ADD_USER,
        payload: {
          id,
          name,
        },
      });
    },
    removeItem: (item_title) => {
      dispatch({ type: actions.REMOVE_ITEM, item_title });
    },
    getSingleItem: (item_title) => {
      dispatch({ type: actions.GET_BY_ID, item_title });
    },
    getSingleUser: (uid) => {
      dispatch({ type: actions.GET_USER_BY_ID, uid });
    },
    emptySingleItem: () => {
      dispatch({ type: actions.EMPTY_SINGLE_ITEM });
    },
    editItem: ({
      item_title,
      item_desc,
      item_image,
      item_progress,
      item_completed,
      item_deadline,
      item_reminder,
      uid,
    }) => {
      dispatch({
        type: actions.EDIT_ITEM,
        payload: {
          item_title,
          item_desc,
          item_image,
          item_progress,
          item_completed,
          item_deadline,
          item_reminder,
          uid,
        },
      });
    },
  };

  return (
    <ItemManagerContext.Provider value={value}>
      {children}
    </ItemManagerContext.Provider>
  );
};
