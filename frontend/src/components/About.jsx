import React from "react";

const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body p-5">
          <h1 className="card-title text-center mb-4 text-primary">
            Qualification Verification System (QVS)
          </h1>
          <p className="lead text-center mb-5">
            A streamlined platform to manage and verify qualifications for
            personnel at oil production sites. It ensures secure submissions,
            transparent reviews, and real-time updates for all users.
          </p>

          <h2 className="text-secondary mb-3">Key Features</h2>
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">
              <strong>Secure Access:</strong> Sign up and log in with
              role-based permissions to manage your profile and submissions.
            </li>
            <li className="list-group-item">
              <strong>Form Submission:</strong> Easily fill out qualification
              forms with required details and attachments.
            </li>
            <li className="list-group-item">
              <strong>Track Requests:</strong> Monitor the status of your
              submissions and stay updated on progress.
            </li>
            <li className="list-group-item">
              <strong>Approvals:</strong> Authorized reviewers can approve,
              reject, or request more information on submitted forms.
            </li>
            <li className="list-group-item">
              <strong>Notifications:</strong> Receive real-time alerts about
              submissions, approvals, rejections, or requests for additional
              details.
            </li>
            <li className="list-group-item">
              <strong>PDF Export:</strong> Download approved forms as
              professional PDF reports for record-keeping.
            </li>
          </ul>

          <h2 className="text-secondary mb-3">How It Works</h2>
          <div className="alert alert-info">
            <p className="mb-2">
              <strong>Submitters:</strong> Draft → Submit → Get notified →
              Approval/Rejection/More Info → Resubmit if needed.
            </p>
            <p className="mb-0">
              <strong>Reviewers:</strong> Receive notifications → Review forms →
              Approve/Reject/Request Info → Submitter notified.
            </p>
          </div>

          <p className="mt-4 text-muted text-center">
            Our system provides a clear, structured, and user-friendly way to
            manage qualification verification across oil production sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;