import React, { useState } from "react";

const EmailDialog = ({ isDialogOpen, succes, closeDialog }) => {
  return (
    <div className="p-8">
      {/* Dialog Box */}
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-xl font-bold mb-4 text-black">
              {succes ? "Success!" : "Error"}
            </h2>
            <p className="mb-4 text-black">
              {succes
                ? "Your email has been sent successfully!"
                : "Failed to send the email. Please try again."}
            </p>
            <button onClick={()=>{closeDialog({ isDialogOpen: false, succes: false })}}className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailDialog;
