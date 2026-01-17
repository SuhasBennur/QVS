import  { useState } from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import Forms from "./Forms";
import MyRequests from "./MyRequests";

function Tabs() {
  const [activeKey, setActiveKey] = useState("forms_tab");
  return (
    <Tab.Container defaultActiveKey="forms_tab" 
    activeKey={activeKey} 
    onSelect={(k) => setActiveKey(k)}>
      <Row>
        {/* Left column: vertical nav */}
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="forms_tab">Forms</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="my_requests_tab">My Requests</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="my_approvals_tab">My Approvals</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        {/* Right column: tab content */}
        <Col sm={9}>
          <Tab.Content className="card p-4 shadow">
            <Tab.Pane eventKey="forms_tab">
              <Forms />
            </Tab.Pane>
            <Tab.Pane eventKey="my_requests_tab">
              <MyRequests 
              user_id={parseInt(localStorage.getItem("userId"), 10)}
              activeKey={activeKey} />
            </Tab.Pane>
            <Tab.Pane eventKey="my_approvals_tab">
              <p>Sample content for Tab 3</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Tabs;
