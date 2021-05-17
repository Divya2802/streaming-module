import React from 'react';
import './App.css';
import JSMpeg from 'jsmpeg-player';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      streams: [{ id: 'video-canvas1' }, { id: 'video-canvas2' }, { id: 'video-canvas3' }, { id: 'video-canvas4' }, { id: 'video-canvas5' }]
    }
  }
  componentDidMount() {
    console.log(this.state.numberOfStreams);
    var videoUrl = 'ws://localhost:9999/';
    this.state.streams.map(item => {
      var player = new JSMpeg.VideoElement(`#${item.id}`, videoUrl, { autoplay: true });
      console.log(player);
    });
  }

  render() {
    console.log("Inside App----->", this.state.numberOfStreams)
    return (
      <div className="main__container">
        {this.state.streams.map(item => (
          <div className="video-canvas" id={item.id}>

          </div>
        ))}
      </div>
    );
  }
}

export default App;
