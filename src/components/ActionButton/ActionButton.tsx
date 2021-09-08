import React from 'react'
import './ActionButton.css'
import Action from "../../interfaces";

/*const ActionButton = ({
  action,
  type,
  tooltip,
  actionClickHandler
}: {
  action: string;
  type: string;
  tooltip: string;
  actionClickHandler: Function;
}) => {
  return (
    <>
    <li><button onClick={() => actionClickHandler(action, type)}>{action}</button></li>
    </>
  ) }*/

const ActionButton: React.FC<Action> = ({action, type, tooltip, actionClickHandler}: Action) => {
  return <>
    <button title={tooltip} onClick={() => actionClickHandler(action, type)}>{action}</button>
  </>
}

export default ActionButton