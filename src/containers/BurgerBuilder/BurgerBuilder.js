import React, { Component } from 'react';

import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }
state = {
    ingredinets: {
        salad: 1,
        bacon: 1,
        cheese: 2,
        meat: 2
    }
}

    render () {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredinets}/>
                <div>Build Controls</div>
            </Aux>
        );
    }
}

export default BurgerBuilder;