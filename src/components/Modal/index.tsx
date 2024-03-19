import React, { useContext } from 'react';
import { ModalStateContext } from './context';
import { Modal } from 'antd';

const ModalComponent = (): React.ReactNode => {
  // hooks
  const { modalState, setModalState } = useContext(ModalStateContext);

  // destructure
  const { content, className } = modalState;

  // functions
  const closeModal = (): void => {
    setModalState({
      content: null,
    })
  }

  return (
    <Modal
      className={className}
      open={!!content}
      onCancel={closeModal}
      footer={null}
    >
        {content || null}
    </Modal>
  );
};

export default ModalComponent;