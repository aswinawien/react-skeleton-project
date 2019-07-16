import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';

/**
 * ComponentName
 */

 const ingredients = [
   {
     "id":1,
     "text" : "bacon"
   },
   {
     "id":2,
     "text" : "eggs"
   },
   {
     "id":3,
     "text" : "potatoes"
   },
 ]
export class List extends Component {
  render() {
      var listItems = ingredients.map((item)=>{
          return <ListItem key={item.id} ingredient={item.text}/>
      })

      return(
        <ul>{listItems}</ul>
      )
  }
}

export default List;
