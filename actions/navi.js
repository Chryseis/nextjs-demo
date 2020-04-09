import { navigation } from '../constants/actionType'

export function editTitle(title) {
  return {
    type: navigation.EDIT_TITLE,
    payload: {
      title
    }
  }
}

export function editPathQueue(path, search, mode) {
  return {
    type: navigation.EDIT_PATH_QUEUE,
    payload: {
      path,
      search,
      mode
    }
  }
}

export function editRight(right) {
  return {
    type: navigation.EDIT_RIGHT,
    payload: {
      right
    }
  }
}
