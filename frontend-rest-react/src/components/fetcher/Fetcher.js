import React from 'react';
import axios from 'axios';

class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    
    axios.get(this.props.url, {
      headers: {'Authorization': "Bearer " + this.props.token}
    })
      .then(result => {
        console.log(result.data)
        this.setState({
        data: result.data,
        isLoading: false
      })})
      .catch(error => {
        console.log(error)
        this.setState({
        error,
        isLoading: false
      })});
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Fetcher;
