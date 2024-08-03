//this is data of calender as example 

export let timelineResourceData: Object[] = [
    {
        Id: 1,
        Subject: 'Work site',
        StartTime: new Date(2024, 7, 3, 13),
        EndTime: new Date(2024, 7, 3, 14, 30),
        IsAllDay: false,
        ProjectId: 1,
        TaskId: 1,

    },{
        Id: 2,
        Subject: 'Daily Standup',
        StartTime: new Date(2024, 7, 3, 9, 30),
        EndTime: new Date(2024, 7, 3, 10, 30),
        IsAllDay: true,
        ProjectId: 2,
        TaskId: 2,
    
    }, {
        Id: 3,
        Subject: 'task day two',
        StartTime: new Date(2024, 7, 4, 13, 30),
        EndTime: new Date(2024, 7, 4, 16, 30),
        IsAllDay: false,
        ProjectId: 3,
        TaskId: 3,

    }, {
        Id: 4,
        Subject: 'task day three',
        StartTime: new Date(2024, 7, 4, 9),
        EndTime: new Date(2024, 7, 4, 10, 30),
        IsAllDay: false,
        ProjectId: 4,
        TaskId: 4,

    }, {
        Id: 5,
        Subject: 'task day four',
        StartTime: new Date(2024, 7, 4, 12),
        EndTime: new Date(2024, 7, 4, 13),
        IsAllDay: false,
        ProjectId: 5,
        TaskId: 5,
     
    }
];