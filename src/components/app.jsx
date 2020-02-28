import React, { Component } from 'react';
import flats from '../flat'
import Flatlist from './flatlist'


class App extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {<Flatlist myflatlist={flats} />}
                </div>
            </div>
        )
    }
}

export default App;