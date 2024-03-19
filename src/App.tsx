import { useContext } from 'react'
import './App.css'
import { ModalStateContext } from './components/Modal/context'
import { Button } from 'antd'
import ModalSample1 from './components/Modal/ModalSample1'
import ModalSample2 from './components/Modal/ModalSample2'

function App() {
  // context
  const { setModalState } = useContext(ModalStateContext);

  // functions
  function acceptCallback() {
    alert('this is invoked from the modal');
  }

  function openModal1() {
    setModalState({
      content: <ModalSample1 />
    });
  }

  function openModal2() {
    setModalState({
      content: <ModalSample2 onAccept={acceptCallback} />
    });
  }

  return (
    <>
      <Button onClick={openModal1}>Modal Sample 1</Button>
      <Button onClick={openModal2}>Modal Sample 2 with callback function</Button>
    </>
  )
}

export default App
