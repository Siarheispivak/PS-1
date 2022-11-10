import React from "react";

type TasksTypeProps = {
    data: {
        title: string
        tasks: Array<TasksDataTypeProps>
        students:Array<string>
    }
}

type  TasksDataTypeProps = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksTypeProps)=>{
    return(
        <>
            <div>
                <h3>{props.data.title}</h3>
            </div>
            <div>
                <ul>
                    {props.data.tasks.map((el)=>{
                        return(
                            <li key={el.taskId}><input type='checkbox' checked={el.isDone}/><span>{el.title}</span></li>
                        )
                    })}
                </ul>
            </div>

            <div>
                    {props.data.students}
            </div>

        </>

    )
}