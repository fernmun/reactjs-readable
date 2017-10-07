import { BY_DATE, BY_SCORE } from '../const/orderTypes'

const compareByScore = (a, b) => {
  if (a.voteScore > b.voteScore) {
    return -1
  }

  if (a.voteScore < b.voteScore) {
    return 1
  }

  return 0
}

const compareByDate = (a, b) => {
  if (a.timestamp > b.timestamp) {
    return -1
  }

  if (a.timestamp < b.timestamp) {
    return 1
  }

  return 0
}

export const sortList = (type, items) => {
  if (items.length > 0) {
    switch (type) {
      case BY_DATE:
        items.sort(compareByDate)
        return items
      case BY_SCORE:
        items.sort(compareByScore)
        return items
      default:
        return items
    }
  }
  else {
    return items
  }
}
