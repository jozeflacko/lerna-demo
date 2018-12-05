import * as React from "react";
import * as sdk from 'sdk';

export default class Hello extends React.Component<{},{}> {
    render() {
        const fromSDK = sdk.utils.TimeUtils.getCurrentTime() + "";

        return (
            <div>{fromSDK}</div>
            
        );
    }
}