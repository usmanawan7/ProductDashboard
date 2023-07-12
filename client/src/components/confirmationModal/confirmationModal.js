import React from "react"
import Modal from "react-modal"
import { DeleteIcon } from "../ui-kit/icons/delete_icon"

Modal.setAppElement("#root");

const Confirmation = ({
  isOpen,
  onRequestClose,
  deleteIcon,
  confirmation,
  confirmationTitle,
  confirmationDescription,
  cancelText,
  confirmText
}) => {

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          maxWidth: "470px",
          maxHeight:"160px",
          margin: "auto",
          padding: "24px",
          border: "none"
        },
        overlay: {
          background: "#00000080"
        }
      }}
    >
      <div className="flex items-center mb-3">
        {
          deleteIcon &&
          <div className="mr-3">
            <DeleteIcon />
          </div>
        }
        <div className="font-semibold text-base leading-6 text-gray-825">
          {confirmationTitle}
        </div>
      </div>
      {
        confirmationDescription &&
        <div className="font-normal text-xs13 leading-4 text-gray-625 mb-5">
          {confirmationDescription}
        </div>
      }
      <div className="flex justify-end absolute right-6 bottom-6">
        <button
          className="font-semibold text-sm leading-5 text-gray-875 py-2 px-4 border box-border rounded-lg border-gray-325 hover:border-gray-425 focus:outline-none focus:border-blue-625 focus:shadow-btn_blue focus:border-blue-625"
          onClick={onRequestClose}
        >
          {cancelText}
        </button>
        <button
          className="ml-2 font-semibold text-sm leading-5 text-gray-875 py-2 px-4 border box-border rounded-lg border-gray-325 hover:border-gray-425 focus:outline-none focus:border-blue-625 focus:shadow-btn_blue focus:border-blue-625"
          onClick={confirmation}
        >
          {confirmText}
        </button>
      </div>
    </Modal>
  )
}

export default Confirmation;
