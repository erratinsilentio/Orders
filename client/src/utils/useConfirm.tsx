import { useContext } from "react";
import { HIDE_CONFIRM, SHOW_CONFIRM } from "../store/Reducer";
import { ModalContext, useModalContext } from "./ModalContext";

let resolveCallback;
function useConfirm() {
  const [confirmState, dispatch] = useContext(ModalContext);

  const onConfirm = () => {
    closeConfirm();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeConfirm();
    resolveCallback(false);
  };
  const confirm = (text) => {
    dispatch({
      type: SHOW_CONFIRM,
      payload: {
        text,
      },
    });
    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  const closeConfirm = () => {
    dispatch({
      type: HIDE_CONFIRM,
    });
  };

  return { confirm, onConfirm, onCancel, confirmState, closeConfirm };
}

export default useConfirm;
