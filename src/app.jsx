import React from 'react';
import Excel from 'exceljs';
import { styles, texts } from './constants';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      reports: '',
      output: '',
    };
  }

  handleChange(event) {
    this.setState({
      reports: event.target.files,
      output: event.target.files
    })
  }

  runControls(reports, output) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(reports[0].path)
      .then(function(workbook) {
        console.log(workbook.getWorksheet(1).getRow(1).values);
    });
  }

  render() {
    console.log(styles);
    return (
      <div style={styles.container}>
        <form onSubmit={ event => {
          event.preventDefault()
          this.runControls(this.state.reports, this.state.output)
        }}>
          <label style={styles.title}>
            {texts.reportsLabel}
            <input style={styles.input} type="file" accept=".xls, .xlsx" onChange={ event => this.handleChange(event) } multiple/>
          </label>
          <label style={styles.title}>
            {texts.outputLabel}
            <input style={styles.input} type="file" accept=".xls, .xlsx" onChange={ event => this.handleChange(event) }/>
          </label>
          <input type="submit" value={texts.controlsBtnValue}></input>
        </form>
      </div>
    );
  }
}