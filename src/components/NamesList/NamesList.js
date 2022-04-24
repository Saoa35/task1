import React from "react";

class NamesList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: ['Alice', 'Patric', 'Susan', 'Jane', 'Jasmin', 'Nikole']
        };
    }

    

    render() {
        return(
            <div>
                <h2>List of Names:</h2>
                <ul>
                    {this.state.list.map((item, id) => <li key={id}>{item}</li>)}
                </ul>
            </div>
        )
    }
}

export default NamesList;