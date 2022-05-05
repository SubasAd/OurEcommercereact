import React, { Component, useState } from "react";

import { Offcanvas, Button } from "react-bootstrap";
function Off(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} style={{ height: "60px" }}>
        <strong>&#9776;Categories</strong>
      </Button>

      <Offcanvas style={{ width: "250px" }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Hello User</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Off;
