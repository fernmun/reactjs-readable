import React from 'react'
import { INCREASE, DECREASE } from '../../const/votes'

const Vote = ({ id, handleVote, score }) => {
  const handleClick = (vote) => {
    handleVote(id, vote)
  }

  return(
    <div>
      <a href="javascript:void(0)" onClick={() => {handleClick(INCREASE)}}>+</a>
      <span>{score}</span>
      <a href="javascript:void(0)" onClick={() => {handleClick(DECREASE)}}>-</a>
    </div>
  )
}

export default Vote
