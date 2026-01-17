import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Card } from "react-bootstrap";

function MyRequests({ user_id, activeKey}) {
  const [forms, setForms] = useState([]);
  const [selectedForm, setSelectedForm] = useState(null);

     const fetchForms = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/forms/${user_id}`);
        setForms(res.data);
      } catch (err) {
        console.error("Error fetching forms:", err);
      }
    };

  useEffect(() => {
    if (activeKey === "my_requests_tab" && user_id) {
      fetchForms();
    }
  }, [activeKey, user_id]);

  const handleFormClick = (form) => {
    setSelectedForm(form);
  };

  return (
    <div className="container mt-4">
      {!selectedForm ? (
        <Card className="shadow-sm border-0">
          <Card.Body>
            <h3 className="text-center text-primary mb-3">My Requests</h3>
            <p className="text-muted text-center mb-4">
              Below are all forms you have submitted.
            </p>
            <div className="table-responsive">
              <Table striped bordered hover className="align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Form ID</th>
                    <th>Full Name</th>
                    <th>Site</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {forms.length > 0 ? (
                    forms.map((form) => (
                      <tr key={form.FormID}>
                        <td>
                          <Button
                            variant="link"
                            className="p-0"
                            onClick={() => handleFormClick(form)}
                          >
                            {form.FormID}
                          </Button>
                        </td>
                        <td>{form["First Name"] + " " + form["Last Name"]}</td>
                        <td>{form.Site}</td>
                        <td>{form.Location}</td>
                        <td>
                          <span
                            className={`badge ${form.Status === "Approved"
                                ? "bg-success"
                                : form.Status === "Rejected"
                                  ? "bg-danger"
                                  : "bg-warning text-dark"
                              }`}
                          >
                            {form.Status || "Pending"}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No forms submitted yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <Card className="shadow-sm border-0">
          <Card.Body>
            <h3 className="text-primary mb-3">
              Form Details (ID: {selectedForm.FormID})
            </h3>
            <ul className="list-group list-group-flush">
              {Object.entries(selectedForm).map(([key, value]) => (
                <li key={key} className="list-group-item">
                  <strong>{key}:</strong> {value || "-"}
                </li>
              ))}
            </ul>
            <Button
              variant="secondary"
              className="mt-3"
              onClick={() => setSelectedForm(null)}
            >
              Back to My Requests
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default MyRequests;
