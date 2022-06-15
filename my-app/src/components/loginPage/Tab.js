import React from 'react';
import {Input} from "rsuite";

const Tab = ({data,text,onChange}) => {
    return (
        <div >
            <p>{text}</p>
            <Input style={{height:'40px'}}  value={data} onChange={onChange} />
        </div>
    );
};

export default Tab;