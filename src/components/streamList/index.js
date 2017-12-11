import React, { Component } from 'react';
import './index.css';
import { Item } from "../index";
import twitch from '../../network';
import withTitle from '../HOCs/withTitle';
import PropTypes from 'prop-types';
import { List } from "../index";

class StreamList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getData = game => {
    twitch.getTopStreams({
      game: game
    })
      .then(result => {
        this.setState({
          data: result.streams
        })
      })
      .catch(e => {
        console.log('fetching streams error', e);
      })
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.selectedGame !== this.props.selectedGame) {
      this.getData(nextProps.selectedGame);
    }
  }

  render() {
    const { data } = this.state;
    return (
      <List data={data} emptyMsg={'Select game'}>
        <section className="streams-list">
          {
            data.map(stream => {
              return (
                <Item
                  key={stream._id}
                  imgUrl={stream.channel.logo}
                  imgAlt={stream.channel.name}
                  title={stream.channel.name}
                  amount={stream.viewers}
                />
              );
            })
          }
        </section>
      </List>
    );
  }
}

StreamList.propTypes = {
  selectedGame: PropTypes.string
};

export default withTitle(StreamList, 'Streams List');