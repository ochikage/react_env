import React from 'react'
import ReactDOM from 'react-dom'

import {AutoSizer, Column, Table, CellMeasurer, CellMeasurerCache, TableMeasure} from 'react-virtualized';
import 'react-virtualized/styles.css';
import './sample.css';

class ReactVirtualizedSample extends React.Component {
    constructor(props) {
        super(props);
        this.rows = [
            {id: 'SF001', name: 'Taro Suzuki', description: 'Yes, I can.'},
            {id: 'SF002', name: 'Jiro Sato', description: 'No, I can\'t.'},
            {id: 'SF003', name: 'Sabro Yamada', description: 'I\'m not sure...'},
            {id: 'SF004', name: 'Sabro Yamada', description: 'I\'m not sure...'},
            {id: 'SF005', name: 'Sabro Yamada', description: 'I\'m not sure...'},
            {id: 'SF006', name: 'Sabro Yamada', description: 'I\'m not sure...'},
        ];

        this.cache = new CellMeasurerCache({
            defaultWitdh: 100,
            minWidth: 75,
            fixedHeight: true,
        });
    }

    render() {
        return(
            <AutoSizer  disableHeight>
            {({width}) => (
                <Table
                    width={width}
                    height={300}
                    headerHeight={20}
                    headerClassName="headerColumn"
                    rowHeight={30}
                    rowCount={this.rows.length}
                    rowGetter={({index}) => {return this.rows[index]}}
                    useDynamicRowHeight={true}
                    rowClassName={({index}) => {
                        if (index < 0) {
                            return 'headerRow';
                        }
                        return (index % 2 === 0) ? 'evenRow' : 'oddRow';
                    }}
                >
                    <Column
                        label='ID'
                        dataKey='id'
                        width={200}
                        className="exampleColumn"
                    />
                    <Column
                        label='Name'
                        dataKey='name'
                        width={200}
                        className="exampleColumn"
                    />
                    <Column
                        label='Description'
                        dataKey='description'
                        width={400}
                        className="exampleColumn"
                    />
                </Table>
                )}
            </AutoSizer>
        );
    }
}
ReactDOM.render(<ReactVirtualizedSample />, document.getElementById('hello'));
