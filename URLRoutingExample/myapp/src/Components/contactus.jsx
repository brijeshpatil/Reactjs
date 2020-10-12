import React, { Component } from 'react';

class ContactUS extends Component {
    constructor(props)
    {
        super(props);
    }

    

    onSubmit() {
        this.props.history.push("/about");
    }

    render() {
        return (
            <div>
                <h1>This is Contact US Page</h1>
                <form>
                    <input placeholder="name" type="name" />
                    <input placeholder="email" type="email" />
                    <button onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default ContactUS;