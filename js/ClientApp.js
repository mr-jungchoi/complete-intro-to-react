var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = React.createClass({
  render: function () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    );
  }
});

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({ title: 'this is a title', color: 'grey'}),
        MyTitleFactory({ title: 'this is another one', color: 'black'}),
        MyTitleFactory({ title: 'why are there so many titles', color: 'tomato'}),
        MyTitleFactory({ title: 'this is the last one', color: 'peru'})
      )
    );
  }
});

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
