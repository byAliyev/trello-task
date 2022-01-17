import React, {useState, useEffect} from 'react';

// Services
import TasksService from '../../services/tasks.service';
import MembersService from '../../services/members.service';
// Components
import Button from "./Button";
import Form from "./Form";
import Title from "./Title";
import Input from "./Input";
import TextArea from "./TextArea";
import DatePicker from "./DatePicker";
import Select from "./Select";

const Modal = ({ onRequestClose, stateTasks, setStateTasks }) => {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [user, setUser] = useState(0);
    const [description, setDescription] = useState("");
    const [options, setOptions] = useState([])

    useEffect(() => {

        function onKeyDown(event) {
            if (event.keyCode === 27) {
                onRequestClose();
            }
        }

        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "visible";
            document.removeEventListener("keydown", onKeyDown);
        };

    });

    useEffect( () => {
        MembersService.list()
            .then(res => {
                if(res.status === 200){
                    setOptions(res.data);
                }
            })
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let params = {
            task_name: name,
            description: description,
            assign_member_id: parseInt(user),
            date: date,
            status: "To do"
        }

        TasksService.create(params)
            .then(res => {
                if(res.status === 201){
                    onRequestClose();
                    let task = res.data;
                    setStateTasks((prevState) => [...prevState, task]);
                }
            })
    }
    return (
        <div className="modal modal__backdrop">
            <div className="modal__container">
                <div className="modal__content">
                    <Form className="form" onSubmit={handleSubmit}>
                        <Title className="title title-form">New Item</Title>
                        <div className="group">
                            <Input
                                className="input"
                                placeholder="Name"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <TextArea
                                className="input input-textarea"
                                cols={4}
                                rows={4}
                                placeholder="Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <DatePicker
                                className="input input-date"
                                placeholder="Date"
                                min="01.01.1997"
                                max="31.12.2030"
                                onFocus={(e) => e.currentTarget.type = 'date' }
                                onBlur={(e) => { e.currentTarget.type = "text"; e.currentTarget.placeholder = "Date" }}
                                value={date}
                                onChange={e => setDate(e.target.value)}
                            />
                        </div>
                        <div className="group">
                            <Select className="input input-select" name={user}
                                    options={options}
                                    onChange={e => setUser(e.target.value)}/>
                        </div>
                    </Form>
                </div>
                <div className="modal__footer">
                    <Button className="btn btn-cancel" onClick={onRequestClose}>Cancel</Button>
                    <Button className="btn btn-save" onClick={handleSubmit}>Save</Button>
                </div>
            </div>

        </div>
    );
}

export default Modal;