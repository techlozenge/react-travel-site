import React, { Component } from 'react';

    import './TableRow.css';

    class TableRow extends Component {
    render() {
        return (
            <tr>
                <td className="text-left">{this.props.destination}</td>
                <td className="text-left">{this.props.capital}</td>
                <td className="text-left">{this.props.language}</td>
                <td className="text-left">{this.props.population}</td>
                <td className="text-left">{this.props.bird}</td>
            </tr>
        );
    }
    }

export default TableRow;