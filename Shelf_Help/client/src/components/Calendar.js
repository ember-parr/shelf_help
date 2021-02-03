/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import JqxScheduler, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';
import { UserProfileContext } from '../providers/UserProfileProvider';

// use this link to edit modal
// https://www.jqwidgets.com/react/react-scheduler/index.htm#https://www.jqwidgets.com/react/react-scheduler/react-scheduler-editdialog.htm

const Calendar = () => {
    const { getToken } = useContext(UserProfileContext);
    var dateFormat = require("dateformat");
    var now = new Date();
    const { startDate, setStartDate } = useState(dateFormat(now)); // coorelates to start property
    const { calendar, setCalendar } = useState(""); // coorelates to calendar property
    const { background, setBackground } = useState(""); // coorelates to background property
    const { description, setDescription } = useState(""); // coorelates to description property
    const { subject, setSubject } = useState(""); // coorelates to subject property
    const { idProperty, setIdProperty } = useState(""); // coorelates to id property
    const history = useHistory();

    const currentUser = parseInt(
        JSON.parse(localStorage.getItem("userProfile")).id
    );


    const getMenu = () => {
        getToken().then((token) =>
        fetch(`/api/menu?userId=${currentUser}`))
    }
    

}







// ********************************************
//turning the stuff below into the stuff above! 
// ********************************************

class OldCalendar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.myScheduler = React.createRef();
        const appointments = [];
        const appointment1 = {
            calendar: "Breakfast",
            background: "#fce181",
            description: "Eggs & Bacon",
            // end: new Date(2018, 10, 23, 16, 0, 0),
            id: "id1",
            location: "",
            start: new Date(2018, 10, 23, 9, 0, 0),
            subject: "Eggs & Bacon" 
        };
        const appointment2 = {
            calendar: "Lunch",
            background: "#7a3e61",
            description: "",
            // end: new Date(2018, 10, 24, 15, 0, 0),
            id: "id2",
            location: "",
            start: new Date(2018, 10, 24, 10, 0, 0),
            subject: "Turkey Sandwich & fruit bowl"
        };
        const appointment3 = {
            calendar: "Dinner",
            background: "#00373d",
            description: "",
            // end: new Date(2018, 10, 26, 13, 0, 0),
            id: "id3",
            location: "",
            start: new Date(2018, 10, 23, 11, 0, 0),
            subject: "Turkey Sliders"
        };
        const appointment4 = {
            calendar: "Dinner",
            background: "#00373d",
            description: "",
            // end: new Date(2018, 10, 27, 18, 0, 0),
            id: "id4",
            location: "",
            start: new Date(2018, 10, 23, 16, 0, 0),
            subject: "Eggplant Parm"
        };
        const appointment5 = {
            calendar: "Breakfast",
            background: "#fce181",
            description: "",
            // end: new Date(2018, 10, 25, 17, 0, 0),
            id: "id5",
            location: "",
            start: new Date(2018, 10, 24, 15, 0, 0),
            subject: "French Toast"
        };
        const appointment6 = {
            calendar: "Diner",
            background: "#00373d",
            description: "",
            end: new Date(2018, 10, 30, 16, 0, 0),
            id: "id6",
            location: "",
            start: new Date(2018, 10, 24, 14, 0, 0),
            subject: "Street Tacos"
        };
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);
        const source = {
            dataFields: [
                { name: 'background', type: 'string' },
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            dataType: "array",
            id: 'id',
            localData: appointments
        };
        const dataAdapter = new jqx.dataAdapter(source);
        this.state = {
            appointmentDataFields: {
                background: "background",
                description: "description",
                from: "start",
                id: "id",
                location: "location",
                resourceId: "calendar",
                subject: "subject",
                to: "end"
            },
            date: new jqx.date(2018, 11, 23),
            height: 600,
            resources: {
                colorScheme: "scheme08",
                dataField: "calendar",
                source: new jqx.dataAdapter(source)
            },
            source: dataAdapter,
            views: [
                { type: "dayView", timeRuler: { hidden: true } },
                { type: "weekView", timeRuler: { hidden: true } }
            ]
        };
    }
    render() {
        return (React.createElement(JqxScheduler, { ref: this.myScheduler, 
            // @ts-ignore
            width: "100%", 
            height: this.state.height, 
            date: this.state.date, 
            source: this.state.source, 
            showLegend: true, 
            view: "weekView", 
            appointmentDataFields: this.state.appointmentDataFields, 
            resources: this.state.resources, 
            views: this.state.views }));
    }
}
export default OldCalendar;





















// import * as React from 'react';
// import 'jqwidgets-scripts/jqwidgets/styles/jqx.base.css';
// import 'jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css';
// import JqxScheduler, {ISchedulerProps, jqx} from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxscheduler';





// const Calendar = () => {
//     const calWidth = "100%";
//     const myScheduler = React.createRef();
//     const menuItems = [];
//     const menuItemOne = {
//         Name: "Chicken Tacos",
//         Description: "delicious chicken tacos!",
//         end: new Date(2018, 10, 30, 16, 0, 0),
//         id: "id1",
//         location: "",
//         start: new Date(2018, 10, 24, 14, 0, 0),
//         Subject: "Dinner"
//     }
//     menuItems.push(menuItemOne);

//     const source = {
//         dataFields: [
//             { name: 'id', type: 'string' },
//             { name: 'description', type: 'string' },
//             { name: 'location', type: 'string' },
//             { name: 'subject', type: 'string' },
//             { name: 'calendar', type: 'string' },
//             { name: 'start', type: 'date' },
//             { name: 'end', type: 'date' }
//         ],
//         dataType: "array",
//         id: 'id',
//         localData: menuItems
//     };


//     const dataAdapter = new jqx.dataAdapter(source);
//     this.state = {
//     appointmentDataFields: {
//         description: "description",
//         from: "start",
//         id: "id",
//         location: "location",
//         resourceId: "calendar",
//         subject: "subject",
//         to: "end"
//     },
//     date: new jqx.date(2018, 11, 23),
//     height: 600,
//     resources: {
//         colorScheme: "scheme05",
//         dataField: "calendar",
//         source: new jqx.dataAdapter(source)
//     },
//     source: dataAdapter,
//     views: [
//         'dayView',
//         'weekView',
//         { type: 'monthView', monthRowAutoHeight: true }
//     ]
// };




//         return (
//         <>
//             <JqxScheduler width={calWidth} height={"auto"}  />
//             <p>WHAT</p>
            
            
            
            
//         </> );
    
// }

// export default Calendar;