import React from 'react'
import { INCREASE, DECREASE } from '../../const/votes'
import AddIcon from 'react-icons/lib/io/arrow-up-b'
import MinusIcon from 'react-icons/lib/io/arrow-down-b'

const Vote = ({ id, handleVote, score }) => {
  const handleClick = (vote) => {
    handleVote(id, vote)
  }

  return(
    <div className="voting-component">
      <a onClick={() => {handleClick(INCREASE)}}><AddIcon /></a>
      <span>{score}</span>
      <a onClick={() => {handleClick(DECREASE)}}><MinusIcon /></a>
    </div>
  )
}

export default Vote
