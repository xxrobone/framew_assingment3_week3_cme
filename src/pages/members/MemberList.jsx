import { Link } from "react-router-dom";
import { useState } from 'react'

// styles
import './MembersList.scss'

const MemberList = ({ members, name }) => {
    
   
    return ( 
        <div className="member_list">
            <h2>{ name }</h2>

            {members.map((member) => ( 
                // need to add a key attribute on this to blog.id
                <div key={member.id}>
                    <Link to={`/members/${member.id}`}>
                    <h2>{ member.name}</h2>                    
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default MemberList;

 /*   */