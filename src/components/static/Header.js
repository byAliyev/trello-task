import React , { useState , useEffect }from 'react';
import classes from './Header.module.scss';

// Services

import MembersService from '../../services/members.service';

// Components
import Title from "../UI/Title";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import Collapse from "../UI/Collapse";

const Header = () => {
    const [members, setMembers] = useState([]);

    useEffect( () => {
        MembersService.list()
            .then(res => {
                if(res.status === 200){
                    setMembers(res.data);
                }
            })
    }, [])

    return (
        <>

            <header className={classes.header}>

                <div className={classes.header__title}>
                    <Title  className="title title-primary">Product Design Team</Title>
                    <Label className="label label-primary">Sprint 9</Label>
                </div>

                <div className={classes.members}>

                    <div className={classes.members__gallery}>
                        {members.map((member, index) => {
                            if(index < 4){
                                return <img src={member.member_pic} alt="" className={classes.members__photo} key={index}/>
                            }
                        })}
                        <span className={classes.members__count}>+{members.length - 4}</span>
                    </div>

                    <div className={classes.members__button}>
                        <Collapse collapsed="none" stateMembers={members} setStateMembers={setMembers} />
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;