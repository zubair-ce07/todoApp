import { getNewId } from "../utils";
import { ITEM_ADD, ITEM_EDIT, TodoAction, ITEM_DELETE, ITEM_DONE } from "./todoAC";

type Item = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  items: Array<Item>;
};

const initialState: State = {

  items: [{ id: getNewId(), text: '', done: false }],
};

const todoReducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case ITEM_ADD:
      console.log("item add");
      console.log(state.items)
      return {
        items: [
          ...state.items.filter(a => a.text !== ''),
          {
            id: getNewId(),
            done: false,
            text: '',
          },
        ],
      };
    case ITEM_EDIT:
      console.log("item edit");
      console.log(action.itemId)
      const index = state.items.findIndex((item) => item.id === action.itemId);
      // Feel free to use immutability-helper or an equivalent library.
      return {
        items: [
          ...state.items.slice(0, index),
          { ...state.items[index], text: action.text },
          ...state.items.slice(index + 1),
        ],
      };

    case ITEM_DELETE:
      console.log("item delete");
      console.log(state.items)
      return {
        items: [
          ...state.items.filter((item) => item.id !== action.itemId)


        ],
      };

    case ITEM_DONE:
      console.log("item done");
      console.log(state.items)
      const _index = state.items.findIndex((item) => item.id === action.itemId);
      return {
        items: [
          ...state.items.slice(0, _index),
          { ...state.items[_index], done: action.itemDone },
          ...state.items.slice(_index + 1),
        ],
      };

    default:
      return state;
  }
};

export default todoReducer;
