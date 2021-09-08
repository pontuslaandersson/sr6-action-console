import React from 'react'
import ActionButton from '../ActionButton/ActionButton'
import Action from "../../interfaces";

interface ActProps {
    actions: Action[];
}

const ActionList: React.FC<ActProps> = ({actions}: ActProps) => {
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



export default ActionList