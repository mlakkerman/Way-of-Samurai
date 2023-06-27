import React from 'react'
import s from './Dialogs.module.scss'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    console.log(props);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsitems}>
                {props.state.dialogsPage.dialogs.map((d) => {
                    return <DialogItem name={d.name} id={d.id} ></DialogItem>
                })}
            </div>
            <div className={s.messages}>
                {props.state.dialogsPage.messages.map((m) => {
                    return <Message message={m.message} id={m.id} ></Message>
                })}
            </div>
        </div>
    )
}

export default Dialogs;