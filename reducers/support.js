import { support } from '../constants/actionType'

const initialState = {
  index: '',
  scrollTop: 0
}

const reducerMap = {
  [support.HANDLE_ACCORDION]: (state, action) => {
    return {
      index: action.index
    }
  },
  [support.SAVE_PAGE_STATE]: (state, action) => {
    return {
      scrollTop: action.scrollTop
    }
  }
}

export default function(state = initialState, action) {
  const reduceFn = reducerMap[action.type]
  if (!reduceFn) {
    return state
  }
  return { ...state, ...reduceFn(state, action) }
}
