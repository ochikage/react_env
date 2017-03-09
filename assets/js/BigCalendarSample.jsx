import React from 'react';
import ReactDOM from 'react-dom';

import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Week from 'react-big-calendar/lib/Week';
import TimeGrid from 'react-big-calendar/lib/TimeGrid';
import dates from 'react-big-calendar/lib/utils/dates';

import 'react-big-calendar/lib/css/react-big-calendar.css';

import events from './events';

BigCalendar.setLocalizer(
	BigCalendar.momentLocalizer(moment)
);

export default class BigCalendarSample extends React.Component {
    render() {
        let formats = {
            dayFormat: 'MM/DD'
        };
        return(
        	<div style={{height: "500px"}}>
              <BigCalendar
                popup
                selectable
                culture="ja"
                events={events}
                defaultDate={new Date(Date.now())}
                views={{month: true, week: true}}
                formats={formats}
                onSelectSlot={
                    (slotinfo) => {
                        console.log("onSelectSlot");
                        console.log(slotinfo);
                    }
                }
                onSelectEvent={
                    (e) => {
                        console.log("onSelectEvent");
                        console.log(e);
                    }
                }
                eventPropGetter={
                    (e, start, end, isSelected) => {
                        
                        let backgroundColor = (isSelected) ? '#265985' : '#3174ad';
                        if (isSelected && 'selectedBackgroundColor' in e) {
                            backgroundColor = e.selectedBackgroundColor;
                        }
                        if (!isSelected && 'backgroundColor' in e) {
                            backgroundColor = e.backgroundColor;
                        }

                        const color = ('color' in e)? e.color : '#FFF'
                        const style =  {
                            cursor: 'pointer',
                            padding: '2px 5px',
                            backgroundColor: backgroundColor,
                            borderRadius: '5px',
                            color: color,
                        }
                        return {style: style};
                    }
                }
              />
            </div>
        );
    }
}

ReactDOM.render(<BigCalendarSample />, document.getElementById('calendar'));
