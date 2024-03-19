import React, { Dispatch, FC, SetStateAction, createContext, useState } from 'react';
import ModalComponent from '.';
import { CommonLayoutProps } from '../../models/CommonLayoutProps';

// modal state interface
export interface ModalState {
  content: React.ReactNode | null;
  className?: string,
}

// context interface
interface ModalStateProps {
  modalState: ModalState,
  setModalState: Dispatch<SetStateAction<ModalState>>,
}

// modal context
export const ModalStateContext = createContext<ModalStateProps>({
  modalState: { content: null },
  setModalState: () => {},
});

// modal provider
export const ModalStateProvider: FC<CommonLayoutProps> = ({ children }): React.ReactNode => {
  const [modalState, setModalState] = useState<ModalState>({
    content: null,
  });

  return (
    <ModalStateContext.Provider value={{ modalState, setModalState }}>
      <ModalComponent />
      {children}
    </ModalStateContext.Provider> 
  )
};