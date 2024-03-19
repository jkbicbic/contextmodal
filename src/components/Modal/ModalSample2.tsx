import { FC, ReactNode, useContext } from "react";
import { ModalStateContext } from "./context";
import { Button } from "antd";

interface ModalSample2Props {
  onAccept: () => void;
}

const ModalSample2: FC<ModalSample2Props> = ({ onAccept }): ReactNode => {
  // context
  const { setModalState } = useContext(ModalStateContext);

  // functions
  function closeModal() {
    setModalState({
      content: null,
    });
  }
  
  function onModalAccept() {
    // closeModal
    closeModal();

    // trigger callback
    onAccept();
  }

  return (
    <>
      <h1>Sample Modal 2</h1>
      <p>this is modal State 2 with callback function</p>
      <div>
        <Button onClick={closeModal}>
          Close 
        </Button>
        <Button type="primary" onClick={onModalAccept}>
          Accept
        </Button>
      </div>
    </>
  );
};

export default ModalSample2;