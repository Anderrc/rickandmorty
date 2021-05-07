import React from 'react';
import './status.scss';

const Status = props => {
    const { status, species} = props.info;
    return ( 
        <div className="m-status">
            <div className={"m-status-circle "+ status}> </div>
            <span>{status === 'Dead' ? "Muerto": status === 'Alive' ? "Vivo" : "Desconcido"} - {species}</span>
        </div>
     );
}
 
export default Status;