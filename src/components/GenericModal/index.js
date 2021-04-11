import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

const ModalView = ({ isModalVisible, handleClose, children, modalTitle }) => {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)

  const handleOk = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setVisible(false)
    }, 3000);
  };

  return (
    <>
      <Modal
        visible={isModalVisible}
        title={modalTitle}
        onOk={handleOk}
        onCancel={handleClose}
        cancelText={false}
        cancelButtonProps={{ style: { display: 'none' } }}
        footer={null}
        width={1000}
      >
        {children}
      </Modal>
    </>
  );
}

export default ModalView;
