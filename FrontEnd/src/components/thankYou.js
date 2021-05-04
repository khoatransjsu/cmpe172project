import React from "react";
import { Row, Col } from "reactstrap";

export default _ => {
  return (
    <div>
      <Row noGutters className="text-center">
        <Col>
          <p className="thanks-header">Thank You for Your Reservation!</p>
          <p className="thanks-subtext">
            We Hope You Will Enjoy to Dine in our Place!
          </p>
        </Col>
      </Row>
    </div>
  );
};
