import React, {Component} from 'react';
import axios from "axios";
import io from "socket.io-client";

function sendMessage(message){
    axios({
        url: "/api/messages",
        method: "POST",
        data: {
            name: 'Alex',
            msg: message,
            date: new Date
        }
    })
        .then(response => {
            console.log(response.data)
            socket.emit('chat message', (response.data))
        })
        .catch(error => {
            console.log(error)
        })
}

export default function Message(props){
    axios({
        url: "/api/messages",
        method: "POST",
        data: {
            name: 'Alex',
            msg: message,

        }
    })

    const {
        data,
        isMine,
        startsSequence,
        endsSequence,
        showTimestamp
    } = props;

    return(
        <div className={[
            'message',
            `${isMine ? 'mine' : ''}`,
            `${startsSequence ? 'start' : ''}`,
            `${endsSequence ? 'end' : ''}`
        ].join(' ')}>
            {
                showTimestamp &&
                <div className="msg-name-tag">
                    {message.name} <br/> {message.date}
                </div>
            }
        </div>
    )
}