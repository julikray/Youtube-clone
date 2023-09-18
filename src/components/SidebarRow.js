import React from 'react';
import "./SidebarRow.css";


function SidebarRow({ selected , Icon ,title}) {
  return (
     <div className={`sidebarRow ${selected && "selected"}`} >
    
        <Icon className= "sideicon" />
        <h2 className='sidetitle'> {title} </h2>
    </div>
  );
};

export default SidebarRow;