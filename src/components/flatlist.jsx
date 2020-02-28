import React, { Component } from 'react';
import Flat from './flat';

class Flatlist extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                {this.props.myflatlist.map(flat => < Flat flatobj={flat} url={flat.imageUrl} price={this.props.price}/>)}
            </div>
        )
    }
}

export default Flatlist;