import React from 'react';

export default function PreLoader(props) {
  return (
    <>
      {!props.loading ? (
        ''
      ) : (
        <div className="loader-overlay">
          <div className="loader">
            <div className="logo">
              <img src="images/loader.png" alt="Website Development" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
