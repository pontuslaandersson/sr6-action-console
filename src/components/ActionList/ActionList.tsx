import React from 'react'
//import ActionButton from '../ActionButton/ActionButton'
import Action from "../../interfaces";

interface ActProps {
    actions: Action[];
}

export const ActionList: React.FC<ActProps> = ({actions}: ActProps) => {
  return <div>    
          {actions.map((item, index) => {
              return <ActionButton key={index}
                                  action={item.action}
                                  type={item.type}
                                  tooltip={item.tooltip}
                                  actionClickHandler={item.actionClickHandler}>
              </ActionButton>
          })}
  </div>
}

const ActionButton: React.FC<Action> = ({action, type, tooltip, actionClickHandler}: Action) => {
  return <>
    <button title={tooltip} onClick={() => actionClickHandler(action, type)}>{action}</button>
  </>
}

//export default ActionList

/*const ActionList = ( actionArr: object[]) => {
  return(
    <ul>
    {actionArr.map((item, index) => {
      return(
        <ActionButton  action={item.action}
        type={item.type}
        tooltip={item.tooltip}
        actionClickHandler={item.actionClickHandler}/>
      )
    })}
    </ul>
  ) }*/