import React, {useState, useEffect} from "react";
// Services
// Services
import MembersService from '../../services/members.service';

// Components
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Title from "./Title";
import FileInput from "./FileInput";

const Collapse = ({collapsed, setStateMembers, stateMembers}) => {
    const [isCollapsed, setIsCollapsed] = React.useState(collapsed);
    const [name, setName] = useState('');
    const [file, setFile] = useState('');

    const handleAddPhoto = (e) => {

        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            setFile(event.target.result);
        }
    };

    const handleSubmit = (e) => {
        let params = {
            member_name: name,
            member_pic: file,
        }

        MembersService.create(params)
            .then(res => {
                if(res.status === 201){
                    setIsCollapsed(!isCollapsed);
                    let member = res.data;
                    setStateMembers( (prevState) => [...prevState, member]);
                }
            })
    }

    const style = {
        collapsed: {
            display: 'none'
        },
        expanded: {
            display: 'block'
        },
    };


    return (
    <>
        <div className="collapse">
            <Button className="btn btn-text" onClick={() => setIsCollapsed(!isCollapsed)}>+ New Member</Button>
            <div className="collapse-content" style={isCollapsed ? style.collapsed : style.expanded} aria-expanded={isCollapsed}>

                <Form className="form">
                    <Title className="title title-form">New Member</Title>
                    <div className="group">
                        <Input className="input"
                               type="text"
                               placeholder="Name"
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className="group">
                        <FileInput onChange={handleAddPhoto} className="input">Upload Photo</FileInput>
                    </div>
                </Form>

                <div className="collapse-footer">
                    <Button className="btn btn-cancel" onClick={() => setIsCollapsed(!isCollapsed)}>Cancel</Button>
                    <Button className="btn btn-save" onClick={handleSubmit}>Save</Button>
                </div>
            </div>
        </div>


    </>
)
};

export default Collapse;