import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as mainActions from '../actions/mainActions';
import {COLOR} from '../utils';

type Props = {
  heroes: Array,
};

class Home extends Component<Props> {
  componentDidMount() {
    this.props.actions.fetchHeroesList();
  }

  render() {
    return (
      <View style={styles.container}>
        {(this.props.heroes || []).map(hero => {
          return (
            <Text style={{color: '#fff'}} key={hero.heroid}>
              {hero.name}
            </Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  text: {
    color: COLOR.heroName,
  },
});

const mapStateToProps = state => ({
  heroes: state.heroes,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(mainActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
