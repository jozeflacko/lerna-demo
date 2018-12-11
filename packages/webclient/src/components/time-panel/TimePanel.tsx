import * as React from "react";
import TimeUtils from '../../utils/TimeUtils';

interface Props {
    prefixText: string;
}

interface State {
    today: string
}

export default class App extends React.Component<Props,State> {
    
    readonly state: State = {
        today: ""
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            today: TimeUtils.getToday()
        }
    }

    render() {
        const  {today} = this.state ;
        
        return (
            <div>
                <span>{this.props.prefixText}</span>
                <span>{today}</span>
            </div>
        );
    }
}