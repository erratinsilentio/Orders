import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../store/modalSlice";
import { RootState } from "../store/store";

let resolveCallback: (arg0: boolean) => void;

function useConfirm() {
  const confirmState = useSelector((state: RootState) => state.modal.show);
  const dispatch = useDispatch();

  const onConfirm = () => {
    unshowModal();
    resolveCallback(true);
  };

  const onCancel = () => {
    unshowModal();
    resolveCallback(false);
  };
  const showModal = () => {
    dispatch(openModal());
    return new Promise((res, rej) => {
      resolveCallback = res;
    });
  };

  function unshowModal() {
    dispatch(closeModal());
  }

  return { showModal, onConfirm, onCancel, confirmState, unshowModal };
}

export default useConfirm;
