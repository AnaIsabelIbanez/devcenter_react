import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';

import { SingleDatePicker } from 'react-dates';


const propTypes = {
    // example props for the demo
    autoFocus: PropTypes.bool,
    initialDate: momentPropTypes.momentObj
};

const defaultProps = {
    // example props for the demo
    autoFocus: false,
    initialDate: null,

    // input related props
    id: 'date',
    placeholder: 'Date',
    disabled: false,
    required: false,
    screenReaderInputMessage: '',
    showClearDate: false,
    showDefaultInputIcon: false,
    customInputIcon: null,
    block: false,
    small: false,
    regular: false,
    verticalSpacing: undefined,
    keepFocusOnInput: false,

    // calendar presentation and interaction related props
    renderMonth: null,
    horizontalMargin: 0,
    withPortal: false,
    withFullScreenPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 1,
    keepOpenOnDateSelect: false,
    reopenPickerOnClearDate: false,
    isRTL: false,

    // navigation related props
    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},
    onClose() {},

    // day presentation and interaction related props
    renderCalendarDay: undefined,
    renderDayContents: null,
    enableOutsideDays: false,
    isDayBlocked: () => false,
    isDayHighlighted: () => {},

    // internationalization props
    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY'
};

class SingleDatePickerWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: props.autoFocus
        };

        this.onFocusChange = this.onFocusChange.bind(this);
    }

    onFocusChange({ focused }) {
        this.setState({ focused });
    }

    render() {
        const { focused } = this.state;

        // autoFocus and initialDate are helper props for the example wrapper but are not
        // props on the SingleDatePicker itself and thus, have to be omitted.
        const props = omit(this.props, [
            'autoFocus',
            'initialDate'
        ]);

        return (
            <SingleDatePicker
                {...props}
                focused={focused}
                onFocusChange={this.onFocusChange}
            />
        );
    }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;

export default SingleDatePickerWrapper;
