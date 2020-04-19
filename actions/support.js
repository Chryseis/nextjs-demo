import { support } from '@/constants/actionType'

export function handleAccordion(index) {
  return {
    type: support.HANDLE_ACCORDION,
    index
  }
}

export function savePageState(scrollTop) {
  return {
    type: support.SAVE_PAGE_STATE,
    scrollTop
  }
}
