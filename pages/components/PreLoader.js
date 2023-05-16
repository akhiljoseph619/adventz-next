import React from 'react';

export default function PreLoader() {
  return (
    <>
      <div className="loader-overlay">
        <div className="loader">
          <div className="logo">
            <img src="images/loader.png" alt="Website Development" />
          </div>
        </div>
      </div>
    </>
  );
}
