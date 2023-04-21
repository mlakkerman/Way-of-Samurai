import React from 'react'
import s from './Dialogs.module.scss'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    let dialogs = [
        { name: 'Dimych', id: '1' },
        { name: 'Kostya', id: '2' },
        { name: 'Sveta', id: '3' },
        { name: 'Valeriya', id: '4' },
        { name: 'Masha', id: '5' }
    ]
    let message = [
        { message: 'Hi' },
        { message: 'How are your it-kamasutra' },
        { message: 'Yo' },
        { message: 'Yo' }
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                <DialogItem name={dialogs[0].name} id={dialogs[0].id} ></DialogItem>
                <DialogItem name={dialogs[1].name} id={dialogs[1].id} ></DialogItem>
                <DialogItem name={dialogs[2].name} id={dialogs[2].id} ></DialogItem>
                <DialogItem name={dialogs[3].name} id={dialogs[3].id} ></DialogItem>
                <DialogItem name={dialogs[4].name} id={dialogs[4].id} ></DialogItem>

            </div>
            <div className={s.messages}>
                <Message message={message[0].message}></Message>
                <Message message={message[1].message}></Message>
                <Message message={message[2].message}></Message>
                <Message message={message[3].message}></Message>
            </div>
        </div>
    )
}

export default Dialogs;