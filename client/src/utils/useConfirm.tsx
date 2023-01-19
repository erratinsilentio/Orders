import { useContext } from "react";
import { HIDE_MODAL, SHOW_MODAL } from "../store/Reducer";
import { ModalContext, useModalContext } from "./ModalContext";

let resolveCallback;
function useConfirm() {
  const [confirmState, dispatch] = useContext(ModalContext);

  const onConfirm = () => {
    closeModal();
    resolveCallback(true);
  };

  const onCancel = () => {
    closeModal();
    resolveCallback(false);
  };
  const showModal = () => {
    dispatch({
      type: SHOW_MODAL,
    });
    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  const closeModal = () => {
    dispatch({
      type: HIDE_MODAL,
    });
  };

  return { showModal, onConfirm, onCancel, confirmState, closeModal };
}

export default useConfirm;
