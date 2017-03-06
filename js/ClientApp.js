import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      <div>
        <MyTitle title='this is a title' color='grey' />
        <MyTitle title='this is another one' color='rebeccapurple' />
        <MyTitle title='why are there so many titles' color='tomato' />
        <MyTitle title='this is the last one' color='peru' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
