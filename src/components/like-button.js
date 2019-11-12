import React, { Component } from 'react';

import Button from './button';

class LikeButton extends Component {

    constructor() {
        super();
        this.state = {
            likes: 0
        }
    }

    render() {
        return (
            <div>
                <Button handleClick={() => this.setState(
                    (preState) => { 
                        return { likes: preState.likes + 1 }
                    }
                )}>
                    Curtir
                </Button>

                <p>{`${this.state.likes} likes`}</p>
            </div>
        );
    }

}

export default LikeButton;