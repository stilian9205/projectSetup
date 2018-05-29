import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/ag-theme-balham.css';

import {changeSelectedItem} from '../state/actions/GridActions';
import ModalForm from '../pages/ModalForm';
import proba from '../pages/test.json';
import TextComponent from '../pages/TextComponent';
class TestComponent extends React.Component {

    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
          modalIsOpen: false
        };
    }

    onRowClicked = (event) => {
      this.setState({modalIsOpen: true});
      this.props.changeSelectedItem(event.data);
    };
    handlingChange = (event) => {
      console.log(event.target.name);
      console.log(event.target.value);
    };
    render() {
        const gridData = {
            columnDefs: [
                {headerName: 'Make', field: 'make'},
                {headerName: 'Model', field: 'model'},
                {headerName: 'Price', field: 'price', filter: 'agNumberColumnFilter'},
                {headerName: 'Date And Time', field: 'date',}
            ],
            rowData: [
                {make: 'Toyota', model: 'Celica', price: 35000, date: '04.05.2017 13:47'},
                {make: 'Ford', model: 'Mondeo', price: 32000, date: '19.04.2018 13:47'},
                {make: 'Porsche', model: 'Boxter', price: 72000, date: '30.07.2018 13:47'}
            ]
        };

        return(
            <div
                className="ag-theme-balham"
                style={{
                    height: '500px',
                    width: '800px' }}
            >
                <AgGridReact
                    rowSelection='single'
                    onRowClicked={this.onRowClicked}
                    columnDefs={gridData.columnDefs}
                    enableFilter={'true'}
                    rowData={gridData.rowData}>
                </AgGridReact>
                <ModalForm
                  modalIsOpen={this.state.modalIsOpen}
                  data={this.props.selectedRow}
                >
                </ModalForm>
                <TextComponent
                  onChange={this.handlingChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRow: state.gridData
    };
};

export const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeSelectedItem
    }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent);
