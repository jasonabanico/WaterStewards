import React, { Component } from 'react';

// NOTE: Static content component will eventually be replaced with CMS.

export class Framework extends Component {
    static displayName = Framework.name;

    render() {
        return (
            <div class='container'>
                <h1 class='h3'>Framework</h1>

                <p>
                    <img src='img/framework.png' />
                </p>

            </div>
        );
    }
}
