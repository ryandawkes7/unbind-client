import React, {Component} from 'react';
import axios from 'axios';
import io from "socket.io-client";

import "./messenger.css";

const socket = io.connect('http://localhost:8000')

class MessengerScreen extends Component {
    constructor() {
        super()
        this.state = {
            msg: '',
            chat: [],
            chatLogs: []
        }
    }

    componentDidMount() {
        this.loadChatLogs()
        socket.on('chat message', (msg) => {
            this.setState({
                chat: [...this.state.chat, { 'id':msg._id, 'msg':msg.msg, 'date':msg.date }]
            })
        })
    }

    // Load in the chat logs.
    loadChatLogs() {
        axios({
            url: "/api/chatlogs",
            method: "GET"
        })
        .then(response => {
            this.setState({ chatLogs: response.data })
            console.log(this.state.chatLogs)
        })
        .catch(error => {
            console.log(error)
        })
    }

    sendMessage(message) {
        axios({
            url: "/api/messages",
            method: "POST",
            data: {
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

    handleChange = (e) => {
        this.setState({ msg: e.target.value })
    }

    // Load message of a selected chat log.
    loadChatLogMessages(chatlog_id) {
        axios({
            url: `api/messages/${chatlog_id}`,
            method: "GET"
        })
        .then(response => {
            this.setState({ chat: response.data })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render () {
        const chatLogs = this.state.chatLogs.map((log) =>
            <div style={{border: "1px solid red", padding: "45px"}} onClick={() => this.loadChatLogMessages(log._id)}>{log._id}</div>
        )

        const messages = this.state.chat.map((message) =>
            <div className="msg-outer-container">
                {/* Name & Date tag*/}
                <div className="msg-name-tag">
                    Test Name <br /> {message.date}
                </div>
                <div className="msg-bubble-container">
                    <div className="msg-bubble" title={message.date}>
                        <p>{message.msg}</p>
                    </div>
                </div>
                {/*<img src={require('../Images/chat-profile.png')} className="msngr-profile-pic"/>*/}
            </div>
        )

        return (
            <div className="msngr-screen">
                <div className="msngr-header">
                    <h3>Messages</h3>
                </div>

                <div className="msngr-main">
                    <div className="msngr-grid">
                        {/*Inactive chat panel*/}
                        <div className="msngr-chats">
                            {chatLogs}
                        </div>
                        {/*End of inactive chat panel*/}
                        {/*Active chat panel*/}
                        <div className="active-chats">
                            <div className="active-chat-content">
                                {messages}
                                {/* INCOMING MESSAGE */}
                                <div className="inc-outer-container">
                                    <div className="inc-name-tag">
                                        RYAN <br /> 28/08/2020
                                    </div>
                                    <div className="inc-bubble-container">
                                        <div className="inc-bubble" title="inc-name-tag">
                                            <p>This is a test message</p>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF INCOMING MESSAGE */}
                            </div>
                            {/*Message composition bar*/}
                            <footer>
                                <button className="msg-btn">
                                    <img src={require("../../../Images/attachment-icon.png")} alt=""/>
                                </button>
                                <button className="msg-btn">
                                    <img src={require('../../../Images/img-icon.png')} alt=""/>
                                </button>
                                <input type="text" className="msg-input" placeholder="Type Message Here" onChange={this.handleChange}/>
                                <button type="submit" className="msg-send-btn" onClick={() => this.sendMessage(this.state.msg)}>Send</button>
                            </footer>
                            {/*End of message composition bar*/}
                        </div>
                        {/*End of active chat pane;*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default MessengerScreen;
