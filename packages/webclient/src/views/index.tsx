import * as React from "react";
import TimePanel from '../components/time-panel/TimePanel';

export default class App extends React.Component<{},{}> {
    render() {
        return (
            <div>
                Here is something:
                <br/>
                <TimePanel prefixText="Current Time"/>                
            </div>
        );
    }
}