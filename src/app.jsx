import React from 'react';
import Excel from 'exceljs';

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

  readExcel(files) {
    var workbook = new Excel.Workbook();
    workbook.xlsx.readFile(files[0].path)
      .then(function(workbook) {
        console.log(workbook.getWorksheet(1).getRow(1).values);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={ event => {
          event.preventDefault()
          this.readExcel(this.state.files)
        }}>
          <label>
            Browse excel files:
            <input type="file" accept=".xls, .xlsx" onChange={ event => this.handleChange(event) } multiple/>
          </label>
          <input type="submit" value="Do something"></input>
        </form>
      </div>
    );
  }
}