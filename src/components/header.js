import React,{useState} from "react";
import Table from "./table";

const Header = (props) => {
  

   
    const data = [
        {
            id:'abc',
            Subject: 'python',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability:Math.floor((Math.random() * 10) + 1),
            
        },
        {   id:'abc2',
            Subject: 'java',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability:Math.floor((Math.random() * 10) + 1),
            
        },
        {   id:'abc3',
            Subject: 'c',
            Date: 'TUE NOV 03 2021',
            Time: '04:00 pm - 05:00 pm',
            Availability:Math.floor((Math.random() * 10) + 1)
        },
        {   id:'abc4',
        Subject: 'python',
        Date: 'TUE NOV 03 2021',
        Time: '04:00 pm - 05:00 pm',
        Availability:Math.floor((Math.random() * 10) + 1)
    },
    ]

    

  
    return (
        <div>Header
            <Table data={data}/>
        </div>
    )
}

export default Header