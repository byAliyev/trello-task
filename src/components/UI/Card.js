import React, {useState, useEffect} from 'react';
// Services
import MembersService from '../../services/members.service';
// Components
import Title from "./Title";
import Label from "./Label";
import { Clock } from "../Icons/icons";

const Card = ({task, ...cardProps}) => {
    const [member, setMember] = useState({});

    const formatDate = (date) => {
        let options = { month: 'short', day: 'numeric' }
        let day = new Date(date);

        return day.toLocaleDateString('en-En', options);
    }

    useEffect(() => {
        MembersService.selectById(task.assign_member_id)
            .then(res => {
                if(res.status === 200){
                    setMember(res.data);
                }
            })
    },[])

    return (
        <>
            <div className="card" {...cardProps}>
                <div className="card__content">
                    <Title className="title title-card">{task.task_name}</Title>

                    <div className="card__desc">
                        {task.description}
                    </div>

                    <Label className="label label-secondary">{member.member_name}</Label>
                </div>
                <div className="card__footer">
                    <div className="card__date">
                        <Clock></Clock>
                        <span>{formatDate(task.date)}</span>
                    </div>

                    <div className="card__owner">
                        <img src={member.member_pic} alt="" className="card__photo"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;