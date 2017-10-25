import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Signin With Google</a>
          </li>
        );
      default:
        return <li>Welcome!</li>;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper light-blue">
          <a href="/" className="brand-logo">
            Feedbacker
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
