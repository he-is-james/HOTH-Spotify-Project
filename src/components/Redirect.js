import React from 'react';
import _ from 'lodash';
import { getParamValues } from '../utils/script';

export default class Redirect extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/feed');
      }
      const access_token = getParamValues(location.hash);
      const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
      localStorage.setItem('params', JSON.stringify(access_token));
      localStorage.setItem('expiry_time', expiryTime);
      history.push('/feed');
    } catch (error) {
      history.push('/');
    }
  }
  render() {
    return null;
  }
}