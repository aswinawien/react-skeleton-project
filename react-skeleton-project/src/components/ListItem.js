import React, { Component, PropTypes } from 'react';
import {
  Button
} from 'bootstrap-4-react'
/**
 * ComponentName
 */
export class ListItem extends Component {
  render() {
    return (
      <div>
        <Button primary outline>
          <h4>{this.props.ingredient}</h4>
        </Button>
      </div>
    );
  }
}

export default ListItem;
