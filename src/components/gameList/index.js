import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';
import twitch from '../../network';
import withTitle from '../HOCs/withTitle';
import { List, Item } from '../index';

class GamesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      data: []
    }
  }

  componentDidMount() {
    twitch.getTopGames()
      .then(result => {
        this.setState({
          data: result.top
        });
      })
      .catch(e => {
        console.log('fetch error', e);
      })
  }

  click = (index, name) => {
    this.setState({
      selected: index
    });
    this.props.handleClick(name);
  };

  render() {
    const { data, selected } = this.state;
    return (
      <aside className="games-list">
        <List data={data} emptyMsg={'Loading games'}>
          {
            data.map((item, i) => {
              return (
                <Item
                  key={item.game._id}
                  imgUrl={item.game.box.small}
                  imgAlt={item.game.name}
                  title={item.game.name}
                  amount={item.viewers}
                  handleClick={() => this.click(i, item.game.name)}
                  outerClass={'game-item ' + (selected === i ? 'selected' : '')}
                />
              );
            })
          }
        </List>
      </aside>
    );
  }
}

GamesList.propTypes = {
  handleClick: PropTypes.func
};

export default withTitle(GamesList, 'Games List');
