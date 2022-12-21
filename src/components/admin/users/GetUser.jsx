import React from 'react'
import { useParams } from 'react-router-dom';

const GetUser = () => {
    const { userId } = useParams();

    console.log(userId);
    return (
        <div>
            get user
        </div>
    )
}

export default GetUser
