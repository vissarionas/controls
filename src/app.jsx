import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      files: ''
    };
  }

  handleChange(event) {
    this.setState({ files: event.target.files })
  }

  logFiles(files) {
    console.log(files)
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => {
          event.preventDefault()
          this.logFiles(this.state.files)
        }}>
          <input type="file" onChange={
            event => this.handleChange(event)
          } multiple/>
          <input type="submit" value="Do something"></input>
        </form>
      </div>
    );
  }
}