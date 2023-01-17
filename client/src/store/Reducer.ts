export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const initialState = {
  show: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
      };
    case HIDE_MODAL:
      return initialState;
    default:
      return initialState;
  }
};
