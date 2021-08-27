import React from 'react'
import './ActionButton.css'

const ActionButton = ({
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
  ) }

export default ActionButton