import { React, useState, useRef } from "react";
import { Container, Row, Col, Tooltip, Overlay } from "react-bootstrap";

const FooterBottom = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div className="position-relative">
       <div className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <Col sm={6}>
            <a className="brand-logo text-center text-sm-left" href="#">
              Logo
            </a>
          </Col> */}
          <Col sm={12}>
            <ul className="footer-links justify-content-center justify-content-sm-end">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#?" ref={target} onClick={() => setShow(!show)}>
                  Discord
                </a>
                <Overlay target={target.current} show={show} placement="top">
                  {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                      You need the professor’s permission to join the discord.
                      Come back again, maybe he’ll be in a better mood.
                      Recently, he’s been spending a lot of time on{" "}
                      <a href="#">Twitter</a> , why don’t you check that out
                      instead?
                    </Tooltip>
                  )}
                </Overlay>
              </li>
              <li>
                <a href="#">Opeansea.io</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
   </div>
  );
};

export default FooterBottom;
