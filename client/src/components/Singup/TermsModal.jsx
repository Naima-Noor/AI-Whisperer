import React from "react";

const TermsModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="modal bg-white rounded-lg shadow-lg max-w-md w-full">
                <div className="modal-content p-4 relative">
                    <button
                        className="close absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        onClick={onClose}
                    >
                        &times;
                    </button>
                    <h2 className="text-lg font-semibold mb-4">Terms and Conditions</h2>
                    <p className="text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac velit tortor.
                        Vestibulum nec lorem nulla. Proin maximus libero ut augue malesuada fringilla.
                        Duis aliquet mattis ante et aliquet. Suspendisse tincidunt neque non purus eleifend
                        vehicula.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsModal;
