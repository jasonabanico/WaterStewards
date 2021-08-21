import React, { Component } from 'react';

// NOTE: Static content component will eventually be replaced with CMS.

export class DataUsed extends Component {
    static displayName = DataUsed.name;

    render() {
        return (
            <div class='container'>
                <h1 class='h3'>Data Used</h1>

                <p>
                    <b>Source: <a href='https://data.water.vic.gov.au/' target='_blank'>https://data.water.vic.gov.au/</a></b>
                </p>

                <p>
                    There are accumulated data set with an update of every one hour that can be used to provide public
                    information. This data has several attributes and quantitative information which is hard for the
                    public to use and understand.
                </p>

                <p>
                    <img src='img/data_used.png' />
                </p>

                <p>
                    This data can offer public environmental information and warning, and engage the public to 
                    provide environmental responses.
                </p>

                <p>
                    Attributes of the data will be plugged to calculate water quality indices.
                </p>

                <p>
                    The water quality index is a tool that offers simplified version of the water quality by 
                    consolidating a range of attributes of water quality such as nutrient levels (phosphates, nitrates), 
                    temperature, turbidity, pH and hardness into an index value of 0 - 1 or 0 - 100 number, and 
                    translated to color when presented on a map.
                </p>

                <p>
                    This site can be an alternative source of information for evaluating environmental considerations of 
                    policies and their effectiveness.
                </p>

            </div>
        );
    }
}
