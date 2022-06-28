import { Action } from "redux";

export const ITEM_ADD = "ITEM_ADD";
export const ITEM_EDIT = "ITEM_EDIT";
export const ITEM_DELETE = "ITEM_DELETE"
export const ITEM_DONE = "ITEM_DONE"

export type TodoAction = AddTodoAction | EditTodoAction | DeleteTodoAction |DoneTodoAction;

export interface AddTodoAction extends Action<typeof ITEM_ADD> {

}
export const addTodo = (): AddTodoAction => ({
  type: ITEM_ADD,

});

export interface EditTodoAction extends Action<typeof ITEM_EDIT> {
  itemId: string;
  text: string;
}
export const editTodo = (itemId: string, text: string): EditTodoAction => ({
  type: ITEM_EDIT,
  itemId,
  text,
});

export interface DeleteTodoAction extends Action<typeof ITEM_DELETE> {
  itemId: string;
}
export const deleteTodo = (itemId: string): DeleteTodoAction => ({
  type: ITEM_DELETE,
  itemId,

});
export interface DoneTodoAction extends Action<typeof ITEM_DONE> {
  itemId: string;
  itemDone: boolean;

}
export const doneTodo = (itemId: string, itemDone: boolean): DoneTodoAction => ({
  type: ITEM_DONE,
  itemId,
  itemDone,

});
