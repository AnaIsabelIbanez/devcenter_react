import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';

import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';


const propTypes = {
    autoFocus: PropTypes.bool,
    initialDate: momentPropTypes.momentObj
};

const defaultProps = {
    autoFocus: false,
    initialDate: null,

    id: 'date',
    placeholder: 'Date',
    disabled: false,
    required: false,
    screenReaderInputMessage: '',
    showClearDate: false,
    showDefaultInputIcon: false,
    customInputIcon: null,
    block: false,
    small: true,
    regular: false,
    verticalSpacing: undefined,
    keepFocusOnInput: false,

    renderMonth: null,
    horizontalMargin: 0,
    withPortal: false,
    withFullScreenPortal: false,
    initialVisibleMonth: null,
    numberOfMonths: 1,
    keepOpenOnDateSelect: false,
    reopenPickerOnClearDate: false,
    isRTL: false,

    navPrev: null,
    navNext: null,
    onPrevMonthClick() {},
    onNextMonthClick() {},
    onClose() {},

    renderCalendarDay: undefined,
    renderDayContents: null,
    enableOutsideDays: false,
    isDayBlocked: () => false,
    isDayHighlighted: () => {},

    displayFormat: () => moment.localeData().longDateFormat('L'),
    monthFormat: 'MMMM YYYY'
};

export default class SingleDatePickerWrapper extends React.Component {
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
            <span>
                <SingleDatePicker
                    {...props}
                    focused={focused}
                    onFocusChange={this.onFocusChange}
                    isOutsideRange={() => false}
                />
            </span>
        );
    }
}

SingleDatePickerWrapper.propTypes = propTypes;
SingleDatePickerWrapper.defaultProps = defaultProps;
