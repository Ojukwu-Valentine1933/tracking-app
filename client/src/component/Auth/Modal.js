import React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SignupForm from './SignupForm';
import VerificationForm from './VerificationForm';
import LoginForm from './LoginForm';
import { Modal as BootstrapModal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Modal.module.css';
function Modal() {
  return (
    <BootstrapModal show={true}>
      {/* <BootstrapModal.Header>
      </BootstrapModal.Header> */}
      <BootstrapModal.Body  className={`container  ${styles.modal_body}`}>
        <Routes>
          <Route path=" /" element={<Navigate to="signup" />} />
          <Route path="signup" element={<SignupForm />} />
          <Route path="verify" element={<VerificationForm />} />
          <Route path="login" element={<LoginForm />} />
        </Routes>
        <Outlet />
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}

export default Modal;
