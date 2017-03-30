export const RECEIVE_EDIT = "RECEIVE_EDIT";
export const REMOVE_EDIT  = "REMOVE_EDIT";

export const receiveEdit = edit => ({
  type: RECEIVE_EDIT, edit
});

export const removeEdit = edit => ({
  type: REMOVE_EDIT, edit
});
