import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { data: [], loading: true };
  }

  //componentDidMount() {
  //  this.populateData();
  //}

  //static renderDataTable(data) {
  //  return (
  //    <table className='table table-striped' aria-labelledby="tabelLabel">
  //      <thead>
  //        <tr>
  //          <th>Header Fields</th>
  //        </tr>
  //      </thead>
  //      <tbody>
  //        {data.map(dataRow =>
  //            <tr key={dataRow.index}>
  //                <td>{dataRow.field1}</td>
  //                <td>{dataRow.field2}</td>
  //          </tr>
  //        )}
  //      </tbody>
  //    </table>
  //  );
  //}

  render() {
    //let contents = this.state.loading
    //  ? <p><em>Loading...</em></p>
    //  : FetchData.renderDataTable(this.state.forecasts);

    return (
      <div>
        <h1 id="tabelLabel" >Data</h1>
        <p>Plaseholder page to display data</p>
        {/*  {contents}*/}
      </div>
    );
  }

  //  async populateData() {
  //    const response = await fetch('data');
  //    const data = await response.json();
  //    this.setState({ data: data, loading: false });
  //  }
}
