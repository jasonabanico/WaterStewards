import React, { Component } from 'react';

// NOTE: Static content component will eventually be replaced with CMS.

export class Background extends Component {
    static displayName = Background.name;

    render() {
        return (
            <div class='container'>
                <h1 class='h3'>Background</h1>

                <p>
                    The surface and underground water quality is linked to geo-environmental and human activity. 
                    Real-time data of water quality in the water reserve will be able to assist policy makers, 
                    economic sectors and programs aimed to elicit public response.
                </p>

                <p>
                    Communicating the public about water quality and trends based on real time data
                    has high relevance to create environmentally conscious and responsive society, and to prepare
                    for environmental emergencies.
                </p>

                <p>
                    <img src='img/background.png' />
                </p>

                <p>
                There are several approaches to communicate water quality information to the communities which may lead 
                to behavioral change. This project will focus on monitoring water resource and provide quality grading.
                </p>

            </div>
        );
    }
}
