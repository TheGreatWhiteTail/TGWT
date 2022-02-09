import { Accordion, Container, Row, Col } from "react-bootstrap";

const Accourdion = () => {
  return (
    <section id="faq" className="faq-section">
        <Container>
           <Row>
              <Col>
              <h2 className="faq-title">FAQ</h2>
              </Col>
           </Row>
        <Row>
          <Col>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What is the total supply?</Accordion.Header>
                <Accordion.Body>There are 9,999 unique sharks.</Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Why “The Great White Tail”?</Accordion.Header>
                <Accordion.Body>
                  Our project is community driven. The direction of the
                  storyline will be made by the community, for the community.
                  Community members will have a pivotal role in deciding the
                  direction of the storyline through discord polls.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How will your purchase affect the real world?
                </Accordion.Header>
                <Accordion.Body>
                  Our ethos is to give back to our planet. We aim to do this
                  through active seminars, raising awareness on key topics,
                  sponsoring member backed charity events and more! We also aim
                  to hold fully sponsored biannual ocean clean-up for our
                  members.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How do I get my hands on a shark?
                </Accordion.Header>
                <Accordion.Body>
                  They’re kinda slippery. Help Professor Hammerhead and maybe
                  he’ll catch one for you. Once he’s got one ready for you, make
                  sure you do the following: Download the metamask.io extension
                  Purchase ETH from any DEX/CEX Send ETH to your metamask wallet
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accourdion;
