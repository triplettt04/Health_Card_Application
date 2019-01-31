import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

//https://reactdatepicker.com
//https://www.npmjs.com/package/react-datepicker
//npm install react-datepicker

class DateSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        };
    }

    handleChange(date) {
        this.setState({
            date: date
        })
    }

    render() {
        return (
            <DatePicker
                selected={this.state.date}
                onChange={date => this.handleChange(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                withPortal={this.props.mobile}
                maxDate={new Date()}
            />
        );
    }
}

export default DateSelection;
