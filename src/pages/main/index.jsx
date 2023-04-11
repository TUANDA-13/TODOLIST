import React, { useEffect, useState } from 'react';
import Task from '../../components/Task';
import { StyledMain } from './styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
library.add(fas);

export const Todolist = () => {

  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');
  const [listTask, setListTask] = useState(JSON.parse(localStorage.getItem('todolist')) || []);
  const [openSelect, setOpenSelect] = useState(false);
  
  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(listTask));
  }, [listTask]);

  const handleFilterDisplay = () => {
    let _list = [];
    if (filter === 'All') {
      _list = [...listTask];
    }

    if (filter === 'Completed') {
      _list = listTask.filter((task) => task.status === true);
    }

    if (filter === 'Uncompleted') {
      _list = listTask.filter((task) => task.status !== true);
    }

    return _list.map((task, index) => (
      <Task task={task} key={index} onChangeStatus={hangeChangeStatus} onDelete={handleDeleteTask}></Task>
    ));
  }

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleFilterClick = (event) => {
    setFilter((filter) => event.target.id);
  };

  const handleSave = () => {
    if (newTask.trim() === '') {
      toast("Please input your task")
    } else {
      let newKey = 0;
      if (listTask.length === 0) {
        newKey = 1;
      } else {
        console.log(listTask);
        newKey = +listTask.slice(-1)[0].key + 1;
        console.log(listTask[-1]);
      }
      let newListTask = [...listTask, { key: newKey, name: newTask, status: false }];
      setNewTask('');
      setListTask(newListTask);
      setFilter('All');
    }
  };

  const hangeChangeStatus = (task) => {
    const index = listTask.findIndex((item) => item.key === task.key);

    const _cloned = [...listTask];

    _cloned[index].status = !_cloned[index].status;

    setListTask(_cloned);
  };

  const handleDeleteTask = (task) => {
    const _cloned = listTask.filter((item) => item.key !== task.key);

    setListTask(_cloned);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <StyledMain>
      <div className="content">
        <h1>To do list</h1>
        <div className="create">
          <form className="input-section">
            <input type="text" value={newTask} onChange={handleInputChange} placeholder="Task" />
            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
          </form>
          <div
            className="filter"
            onMouseEnter={() => {
              setOpenSelect(!openSelect);
            }}
            onMouseLeave={() => {
              setOpenSelect(!openSelect);
            }}
          >
            <div className="filter-display" defaultValue={'ALL'}>
              {filter}
              <div className="direction-icon">
                {openSelect ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />}
              </div>
            </div>
            <div className="filter-list">
              <div className="filter-item" id="All" onClick={handleFilterClick}>
                All
              </div>
              <div className="filter-item" id="Completed" onClick={handleFilterClick}>
                Completed
              </div>
              <div className="filter-item" id="Uncompleted" onClick={handleFilterClick}>
                Uncompleted
              </div>
            </div>
          </div>
        </div>
        {handleFilterDisplay()}
      </div>
    </StyledMain>
  );
};
