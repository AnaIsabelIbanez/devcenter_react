import React from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';

import { SingleDatePicker } from 'react-dates';
import styled from 'styled-components';


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
    small: true,
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

// export default styled(SingleDatePickerWrapper)`
//         .SingleDatePickerInput {
//             border: 0;
//             margin: 0;
//             padding: 0;
//             width: 100%;
//         }
//         .DayPickerKeyboardShortcuts_buttonReset {
//                 border-right: 33px solid #565a5c;
//         }
//         .DateInput {
//              width: 100%;
//         }
//         input {
//             display: block;
//             width: 100%;
//             height: 34px;
//             padding: 6px 12px;
//             font-size: 14px;
//             line-height: 1.42857143;
//             color: #555;
//             background-color: #fff;
//             background-image: none;
//             border: 1px solid #ccc;
//             border-radius: 4px;
//             -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
//             box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
//         }
//
// `;
