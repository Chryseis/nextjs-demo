import { navigation } from '../constants/actionType'

const initialState = {
  title: '',
  pathQueue: [],
  naviAction: '',
  right: '',
  search: ''
}

const reducerMap = {
  [navigation.EDIT_TITLE]: (state, action) => {
    const {
      payload: { title }
    } = action
    return { title }
  },
  [navigation.EDIT_PATH_QUEUE]: (state, action) => {
    const { pathQueue } = state
    const _pathQueue = [...pathQueue]
    const {
      payload: { path, search, mode }
    } = action
    const index = _pathQueue.indexOf(path)

    let naviAction = ''
    if (pathQueue.length > 0) {
      switch (mode) {
        case 'PUSH': {
          if (index > -1) {
            _pathQueue.splice(index + 1)
            naviAction = 'pop'
          } else {
            _pathQueue.push(path)
            naviAction = 'push'
          }
          break
        }
        case 'POP':
          _pathQueue.pop()
          break
        case 'REPLACE':
          _pathQueue[_pathQueue.length - 1] = path
      }
    } else {
      _pathQueue.push(path)
    }

    return { pathQueue: _pathQueue, search, naviAction }
  },
  [navigation.EDIT_RIGHT]: (state, action) => {
    const {
      payload: { right }
    } = action
    return {
      right
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
