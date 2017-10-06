import React from 'react'

const Vote = ({ id, handleVote, score }) => {
  const typeVote = {
    INCREASE: 'upVote',
    DECREASE: 'downVote'
  }

  const handleClick = (vote) => {
    handleVote(id, vote)
  }

  return(
    <div>
      <a href="javascript:void(0)" onClick={() => {handleClick(typeVote.INCREASE)}}>+</a>
      <span>{score}</span>
      <a href="javascript:void(0)" onClick={() => {handleClick(typeVote.DECREASE)}}>-</a>
    </div>
  )
}

export default Vote
