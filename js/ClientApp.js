import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'this is a title', color: 'grey'}),
        MyTitleFactory({ title: 'this is another one', color: 'black'}),
        MyTitleFactory({ title: 'why are there so many titles', color: 'tomato'}),
        MyTitleFactory({ title: 'this is the last one', color: 'peru'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
