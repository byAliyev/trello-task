import classes from './App.module.scss';
import React, {useState, useEffect} from "react";
// Services
import TasksService from "./services/tasks.service";

// Components
import Menu from "./components/static/menu/Menu";
import Header from "./components/static/Header";
import Button from "./components/UI/Button";
import SearchInput from "./components/UI/SearchInput";
import Row from "./components/UI/Row";
import Col from "./components/UI/Col";
import Title from "./components/UI/Title";
import Badge from "./components/UI/Badge";
import Card from "./components/UI/Card";
import Modal from "./components/UI/Modal";


function App() {
    // Modal state
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [tasks, setTasks] = useState([]);

    const allTask = {
        todo: [],
        inprogress: [],
        inreview: [],
        done: []
    };

    const cats = {
        todo: 'To do',
        inprogress: 'In Progress',
        inreview: 'In Review',
        done: 'Done'
    }

    const getCat = (str) => {
        return str.replace(/\s+/g, '').toLowerCase();
    }

    useEffect(() => {
        TasksService.list()
            .then(res => {
                if(res.status === 200){
                    setTasks(res.data);
                }
            })
    }, [])

    // Drag and drop
    const onDragOver = ev => {
        ev.preventDefault();
    };

    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    };

    const onDrop = (ev, cat) => {
        const id = parseInt(ev.dataTransfer.getData("id"));

        let currentTasks = tasks.filter(task => {
            if (task.id === id) {
                task.status = cats[cat];
            }
            return task;
        });

        console.log(currentTasks);

        setTasks(currentTasks);
    };

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    return (

        <>
            {isModalOpen && <Modal onRequestClose={toggleModal} setStateTasks={setTasks} />}

            {tasks.map( task => {
                let cat = getCat(task.status);

                allTask[cat].push(
                    <Card task={task}
                          key={task.id}
                          draggable
                          onDragStart={e => onDragStart(e, task.id)}/>
                )
            })}

            <div className="App">

                {/* Menu component */}
                <Menu/>

                {/* Header component */}
                <Header/>

                {/* Main wrapper */}
                <main className={classes.wrapper}>

                    {/* Search section */}

                    <section className={classes.header}>
                        <div className={classes.header__search}>
                            <SearchInput className="search-search" placeholder="Search Items"/>
                        </div>
                        <div className={classes.header__button}>
                            <Button className="btn btn-primary" onClick={toggleModal}>New Item</Button>
                        </div>
                    </section>

                    {/* Grid section */}

                    <Row>
                        <Col className="col-3" onDragOver={e => onDragOver(e)}
                             onDrop={e => onDrop(e, "todo")}>
                            <div className="col__header">
                                <Title className="title title-secondary">To do</Title>
                                <Badge>{allTask.todo.length}</Badge>
                            </div>
                            <div className="col__content">
                                {allTask.todo}
                            </div>
                        </Col>

                        <Col className="col-3" onDragOver={e => onDragOver(e)}
                             onDrop={e => onDrop(e, "inprogress")}>
                            <div className="col__header">
                                <Title className="title title-secondary">In progress</Title>
                                <Badge>{allTask.inprogress.length}</Badge>
                            </div>
                            <div className="col__content">
                                {allTask.inprogress}
                            </div>
                        </Col>

                        <Col className="col-3" onDragOver={e => onDragOver(e)}
                             onDrop={e => onDrop(e, "inreview")}>
                            <div className="col__header">
                                <Title className="title title-secondary">In Review</Title>
                                <Badge>{allTask.inreview.length}</Badge>
                            </div>
                            <div className="col__content">
                                {allTask.inreview}
                            </div>
                        </Col>

                        <Col className="col-3" onDragOver={e => onDragOver(e)}
                             onDrop={e => onDrop(e, "done")}>
                            <div className="col__header">
                                <Title className="title title-secondary">Done</Title>
                                <Badge>{allTask.done.length}</Badge>
                            </div>
                            <div className="col__content">
                                {allTask.done}
                            </div>
                        </Col>
                    </Row>
                </main>
            </div>
        </>

    );
}

export default App;
