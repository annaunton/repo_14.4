var movieList = [
{
  id: 1,
  title : 'Harry Potter',
  desc : 'film o czarodzieju',
  img : 'src/harry.jpg'
},
{
  id: 2,
  title : 'Król lew',
  desc : 'film króju sawanny',
  img : 'src/cat.jpg'
},
{
  id: 3,
  title : 'Pożegnanie z Afryką',
  desc : 'film o Afryce',
  img : 'src/africa.jpg'
},
{
  id: 4,
  title : 'Dunkierka',
  desc : 'film o ewakuacji Dunkierki',
  img : 'src/dunkierka.jpg'
},
];


var App = React.createClass({
  render: function() {
    return (
        React.createElement(Movies, {items: movieList}, {})
    );
  }
});


var Movies = React.createClass({
  
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var movies = this.props.items.map(function(contact) {
        return React.createElement(Movie, {item: contact, key: contact.id});
    });

    return (
      React.createElement('ul', {}, movies)
    );
  }
});


var Movie = React.createClass({
  
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.item.title),
        React.createElement('p', {}, this.props.item.desc),
        React.createElement('img', {src:this.props.item.img}),
      )
    )
  },
});


var element = 
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement(App),
  );

ReactDOM.render(element, document.getElementById('app'));


/*
var GalleryItem = React.createClass({
  
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

var image1 = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};


var element = React.createElement(GalleryItem, {image: image1});
ReactDOM.render(element, document.getElementById('app'));
*/