import React from "react";

function Loader() {
  return (
    <>
    <div>
      <img className='loader' src="/images/pokeball.png" alt="loader"/>
    </div>
    <div className='mt-3 loading-text'>
      Loading...
    </div>
    </>
  );
}

export default Loader;
