import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;
  render() {
    return (
      <div id='wrapper'>
        <NavMenu />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id='content'>
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                <i class="fa fa-bars"></i>
              </button>
                        <ul class="navbar-nav">
                            <h1 class='h3'>Water Stewards Portal - Water Quality Information Without Borders</h1>
              </ul>
            </nav>

            <div class="container-fluid">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
