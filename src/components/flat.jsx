import React, { Component } from 'react';


class Flat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="card" style={{backgroundimage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.flatobj.imageUrl}`}}>
                    <div className="card-category">
                        <p>{this.props.flatobj.price}</p>
                    </div>
                    <div className="card-description">
                        <h2>{this.props.flatobj.name}</h2>
                    </div>
                    <p>ici</p>
                </div>
        );
    }
}

export default Flat;