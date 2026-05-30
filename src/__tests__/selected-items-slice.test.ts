import { describe, expect, it } from 'vitest'

import reducer, { selectedItemsActions } from '../store/selected-items-slice'

describe('selectedItemsSlice', () => {
  const mockItem = {
    title: 'Test Film',
    opening_crawl: 'Test text',
    episode_id: 1,
    url: 'test-url',
    items: [],
  }

  it('should add item', () => {
    const state = reducer(mockItem, selectedItemsActions.toggleItem(mockItem))

    expect(state.items).toHaveLength(1)
    expect(state.items[0]).toEqual(mockItem)
  })

  it('should remove item', () => {
    const initialState = {
      items: [mockItem],
    }

    const state = reducer(
      initialState,
      selectedItemsActions.toggleItem(mockItem),
    )

    expect(state.items).toHaveLength(0)
  })

  it('should unselect all items', () => {
    const initialState = {
      items: [mockItem],
    }

    const state = reducer(initialState, selectedItemsActions.unSelectAll())

    expect(state.items).toEqual([])
  })
})
