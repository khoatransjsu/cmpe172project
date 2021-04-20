import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You!</p>
          <i className="fas fa-pizza-slice thank-you"></i>
          <p className="thanks-subtext">
            We will hold your table for at most 15 minutes.
          </p>
        </Col>
      </Row>
    </div>
  );
};
