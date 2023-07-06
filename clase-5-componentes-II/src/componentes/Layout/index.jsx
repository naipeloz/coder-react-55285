import { useState } from "react";

function Layout (props) {
  

  return(
    <div>
      <div>
        <h1>La super calculadora</h1>
        
      </div>
      <div>
        { props.children }
      </div>
    </div>
  )
}

export default Layout;
