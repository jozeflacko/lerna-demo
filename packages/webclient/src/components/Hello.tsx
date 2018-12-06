import * as React from "react";
import * as sdk from 'sdk';

export default class Hello extends React.Component<{},{}> {
    
    render() {

        return (
            <div>{ sdk.utils.TimeUtils.getDate()} </div>
            
        );
    }
}