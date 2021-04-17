import React from 'react'
import  './Dashboard.css'
import { TodoList } from '../TodoComponents/TodoList'

export const Dashboard = ({id, name}: {id: string, name: string}) => {
  return (
    <div className={"dashboard"}>
      <div className={"dashboard_app"}>

        {id}

        <TodoList name={name} id={id} />

      </div>
    </div>
  )
}