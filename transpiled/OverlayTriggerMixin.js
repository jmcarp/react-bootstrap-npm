"use strict";
var React = require("./react-es6")["default"];

exports["default"] = {
  componentWillUnmount: function () {
    this._unrenderOverlay();
    document.body.removeChild(this._overlayTarget);
    this._overlayTarget = null;
  },

  componentDidUpdate: function () {
    this._renderOverlay();
  },

  componentDidMount: function () {
    this._renderOverlay();
  },

  _mountOverlayTarget: function () {
    this._overlayTarget = document.createElement('div');
    document.body.appendChild(this._overlayTarget);
  },

  _renderOverlay: function () {
    if (!this._overlayTarget) {
      this._mountOverlayTarget();
    }

    // Save reference to help testing
    this._overlayInstance = React.renderComponent(this.renderOverlay(), this._overlayTarget);
  },

  _unrenderOverlay: function () {
    React.unmountComponentAtNode(this._overlayTarget);
    this._overlayInstance = null;
  }
};