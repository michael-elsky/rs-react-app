import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Modal from './components/Modal/Modal'
import type { FormTypes } from './types/Modal.types'

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formType, setFormType] = useState<FormTypes>(null)

  const handleOpenModal = (typeForm: FormTypes) => {
    setIsModalOpen(true)
    setFormType(typeForm)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setFormType(null)
  }

  return (
    <>
      <Header />

      <Main onOpen={handleOpenModal} />

      {isModalOpen && <Modal formType={formType} onClose={handleCloseModal} />}
    </>
  )
}

export default App
