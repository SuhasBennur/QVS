import React from "react";

function Policy() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h2 className="text-center text-primary mb-4">Our Policies</h2>
          <p className="lead text-center mb-5">
            QualVerify is committed to maintaining the highest standards of data
            security, compliance, and ethical responsibility. These policies
            outline how we operate and safeguard the interests of all
            stakeholders.
          </p>

          <div className="mb-4">
            <h4 className="text-secondary">1. Data Privacy</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                All user and site data is stored securely.
              </li>
              <li className="list-group-item">
                Sensitive information is never shared with third parties without
                explicit consent.
              </li>
              <li className="list-group-item">
                Access to data is restricted to authorized personnel only.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-secondary">2. Compliance</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                QualVerify adheres to international oil industry regulations and
                environmental standards.
              </li>
              <li className="list-group-item">
                Verification processes align with ISO, OSHA, and relevant local
                frameworks.
              </li>
              <li className="list-group-item">
                Sites failing to meet compliance requirements are flagged and
                reported.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-secondary">3. Security</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Industry-standard encryption is used for data transmission and
                storage.
              </li>
              <li className="list-group-item">
                Regular audits and vulnerability assessments are conducted.
              </li>
              <li className="list-group-item">
                Multi-factor authentication is required for system access.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-secondary">4. Transparency</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                All verification results are documented and accessible to
                stakeholders.
              </li>
              <li className="list-group-item">
                Policy updates are communicated promptly to users.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-secondary">5. Ethical Responsibility</h4>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                QualVerify promotes sustainable oil production practices.
              </li>
              <li className="list-group-item">
                Worker safety and environmental protection are prioritized.
              </li>
              <li className="list-group-item">
                The system supports accountability and responsible resource
                management.
              </li>
            </ul>
          </div>

          <div className="alert alert-info mt-4">
            <em>
              Note: These policies are reviewed and updated regularly to reflect
              evolving industry standards and regulatory requirements.
            </em>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;