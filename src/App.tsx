//import React from 'react';
import React, { useState } from 'react'
//import logo from './logo.svg';
import './App.css';
//import ActionButton from './components/ActionButton/ActionButton'
import ActionList from './components/ActionList/ActionList'
//import {BudgetOverview} from "./BudgetOverview";



function App() {

  const [initiativeDice, setInitiativeDice] = useState(1)
  const [minorActions, setMinorActions] = useState(2)
  const [majorActions, setMajorActions] = useState(1)
  const [outOfActionsMessage, setOutOfActionsMessage] = useState('')
  const [actionLog, setActionLog] = useState<string[]>([])
  
  const actionClickHandler = (action: string, type: "minor" | "major") => {
    //console.log(`${action} is a ${type} action`);
    if (type === 'minor' && minorActions !== 0) {
        const currentMinorActions = minorActions
        const newMinorActions = currentMinorActions - 1
        setMinorActions(newMinorActions)
        setActionLog(actionLog => [action,...actionLog] )
        if (newMinorActions === 0 && majorActions === 0) {
          setOutOfActionsMessage('Out of actions! Your turn is over!')
        }
      } else if (type === 'major' && majorActions !== 0) {
        //console.log('Decrementing major actions.');
        const currentMajorActions = majorActions
        const newMajorActions = currentMajorActions - 1
        setMajorActions(newMajorActions)
        //const currentActionLog = ...actionLog
        setActionLog(actionLog => [action,...actionLog] )
        if (newMajorActions === 0 && minorActions === 0) {
          setOutOfActionsMessage('Out of actions! Your turn is over!')
        }
      }
  }

  const majorActionsArr = [
    {
        action: 'Assist',
        type: 'major',
        tooltip: "Assist other character on teamwork action.",
        actionClickHandler: actionClickHandler,
    },
    {
      action: 'Astral projection',
      type: 'major',
      tooltip: "Project into the astral, if you're a full mage or aspected magician.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Attack',
      type: 'major',
      tooltip: "Hit 'em, shoot 'em, slice 'em.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Banish spirit',
      type: 'major',
      tooltip: "Banish spirit not under your control.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Cast spell',
      type: 'major',
      tooltip: "Use magic mojo.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Cleanse',
      type: 'major',
      tooltip: "Awakened characters can cleanse the traces of their magic on the astral.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Counterspell',
      type: 'major',
      tooltip: "Set up a counter to hostile magic.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Full defense',
      type: 'major',
      tooltip: "Add Willpower to all Defense tests for the rest of the turn.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Manifest',
      type: 'major',
      tooltip: "When projecting in the astral, become ghostly translucent and visible on the material plane.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Observe in detail',
      type: 'major',
      tooltip: "Get a good look at something with a Perception or Assensing test.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Pick up/put down object',
      type: 'major',
      tooltip: "Pick something up, or put it down carefully.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Ready weapon',
      type: 'major',
      tooltip: "Ready a weapon.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Reload weapon',
      type: 'major',
      tooltip: "Reload an old-fashioned gun, or one with its smartlink deactivated.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Rigger jump in',
      type: 'major',
      tooltip: "If your're a rigger, jump into a vehicle or drone, taking full control.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Sprint',
      type: 'major',
      tooltip: "Move at 15 m + hits on Athletics + Agility test. Cannot be combined with Move or Avoid Incoming.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Summon spirit',
      type: 'major',
      tooltip: "Summon a spirit.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Use simple device',
      type: 'major',
      tooltip: "Use device without DNI.",
      actionClickHandler: actionClickHandler,
    },
    {
      action: 'Use skill',
      type: 'major',
      tooltip: "Show us your skills.",
      actionClickHandler: actionClickHandler,
    }
 ]

 const minorActionsArr = [
  {
      action: 'Activate/deactivate focus',
      type: 'minor',
      tooltip: "Activate or deactivate a bonded focus carried on your person.",
      actionClickHandler: actionClickHandler,
  },
  {
    action: 'Avoid incoming',
    type: 'minor',
    tooltip: "Move (Reaction + Athletics) meters in response to incoming blast.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Block',
    type: 'minor',
    tooltip: "Add Close Combat to defence in melee.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Call a shot',
    type: 'minor',
    tooltip: "+2 damage, -4 dice pool penalty for a single Attack action, which must be the next action.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Change device mode',
    type: 'minor',
    tooltip: "Activate, deactivate, switch mode on device with DNI (Direct Neural Interface).",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Command drone',
    type: 'minor',
    tooltip: "Issue command to drone, or same command to multiple drones controlled by the same RCC.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Command spirit',
    type: 'minor',
    tooltip: "Issue command to spirit, or dismiss it. Same command can be given to multiple spirits.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Dodge',
    type: 'minor',
    tooltip: "Add Athletics to single Defence test.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Drop object',
    type: 'minor',
    tooltip: "Drop object held in hand(s).",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Drop prone',
    type: 'minor',
    tooltip: "Gain the Prone status, until you take the Stand Up action",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Hit the dirt',
    type: 'minor',
    tooltip: "Drop prone to gain +2 to Defense tests this turn, at a cost of -2 to all other active skill tests.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Intercept',
    type: 'minor',
    tooltip: "Use with Attack Major Action to attack someone who comes close. Melee weapons only.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Move',
    type: 'minor',
    tooltip: "Move up to 10 m. Only once per turn.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Multiple attacks',
    type: 'minor',
    tooltip: "Split dice pool between multiple targets. Must be used with Attack action.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Quick draw',
    type: 'minor',
    tooltip: "Draw an appropriately carried small (pistol-sized) weapon or item.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Reload smartgun',
    type: 'minor',
    tooltip: "Reload smartgun-equipped weapon with active DNI.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Shift perception',
    type: 'minor',
    tooltip: "If capable, view astral plane, or shift back to viewing material plane if already viewing astral.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Stand up',
    type: 'minor',
    tooltip: "Get up, stand up.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Take aim',
    type: 'minor',
    tooltip: "Gain a +1 bonus from aiming at a target. Multiple actions stack, up to (Willpower). Requirement to use image magnification or targeting scopes.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Take cover',
    type: 'minor',
    tooltip: "Gain defense from cover, at the cost of some constraints.",
    actionClickHandler: actionClickHandler,
  },
  {
    action: 'Trip',
    type: 'minor',
    tooltip: "Used with attack. -2 damage, target has to roll Athletics + Agility vs damage of attack to stay standing.",
    actionClickHandler: actionClickHandler,
  }
]

  const initiativeDiceChangeHandler = (value: number) => {
    const parsedValue = value
    if (parsedValue < 1) {
      setInitiativeDice(1)
    } else if (parsedValue > 5) {
      setInitiativeDice(5)
    } else {
      setInitiativeDice(parsedValue)
    }
    const newMinorActions = 1 + parsedValue
    setMinorActions(newMinorActions)
  }

  const initiativeDiceOnBlur = () => {
    if (isNaN(initiativeDice)) {
      setInitiativeDice(1)
      const newMinorActions = 2
      setMinorActions(newMinorActions)
    }
  }

  const getMajorAction = () => {
    if (minorActions >= 4) {
      const newMinorActions = minorActions - 4
      setMinorActions(newMinorActions)
      const newMajorActions = majorActions + 1
      setMajorActions(newMajorActions)
    }
    else {
      window.alert('No can do, chummer! Not enough minor actions! \n\nBetter get some wires!')
    }
  }

  const getMinorAction = () => {
    if (majorActions >= 1) {
      const newMajorActions = majorActions - 1
      setMajorActions(newMajorActions)
      const newMinorActions = minorActions + 1
      setMinorActions(newMinorActions)
    }
    else {
      window.alert('No can do, chummer! Not enough minor actions! \n\nBetter get some wires!')
    }
  }

  const resetActions = () => {
    const newMinorActions = 1 + initiativeDice
    setMinorActions(newMinorActions)
    setMajorActions(1)
    setActionLog([])
    setOutOfActionsMessage('')
  }
  
  return (
    <div className="App">
      <div className="container">
        <div className="action-list-container">
          <h1 className="neonText">Minor actions</h1>
          <ActionList actions={minorActionsArr}/>
        </div>
        <div className="action-list-container">
          <h1 className="neonText">Major actions</h1>
          <ActionList actions={majorActionsArr}/>
        </div>
        <div className="action-list-container">
        <label className="neonText" htmlFor="initiative-dice">Initiative dice: </label>
        <select
        id="initiative-dice" 
        name="initiative-dice" 
        defaultValue={initiativeDice} onChange={(e) => initiativeDiceChangeHandler(parseInt(e.target.value))}
        onBlur={() => initiativeDiceOnBlur()}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <p className="neonText">Minor actions: {minorActions}</p>
        <p className="neonText">Major actions: {majorActions} (Max possible with trading: {Math.floor(majorActions + minorActions / 4)})</p>
        <button onClick={() => getMajorAction()}>Trade 4 minor actions for 1 major</button>
        <button onClick={() => getMinorAction()}>Trade 1 major action for 1 minor</button>

        <h2 className="neonText">Action log</h2>
        <div>
          {actionLog && actionLog.map((item, index) => {
            return <p className="neonText" key={index}>{item}</p>
          })}
        </div>
        
        <p className="neonText">{outOfActionsMessage}</p>
        <div><button onClick={() => resetActions()}>Reset for new round!</button></div>
      </div>
      </div>
            
    </div>
  );
}

export default App;
//<ActionList actions={testActions}/>