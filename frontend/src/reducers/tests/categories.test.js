import { RECEIVE_CATEGORIES } from "../../actions/categories";
import categories from "../categories";

describe('Categories reducer', () => {
  it('Should return initial state', () => {
    expect(categories(undefined, {}))
      .toEqual([])
  })

  it('Should handle RECEIVE_CATEGORIES (1 item)', () => {
    expect(categories(undefined, {
      type: RECEIVE_CATEGORIES,
      categories: [{
        name: "react",
        path: "react"
      }]
    }))
      .toEqual([
        {
          name: "react",
          path: "react"
        }
      ])
  })

  it('Should handle RECEIVE_CATEGORIES (>1 item)', () => {
    expect(categories(undefined, {
      type: RECEIVE_CATEGORIES,
      categories: [{
        name: "react",
        path: "react"
      },
      {
        name: "redux",
        path: "redux"
      }
      ]
    }))
      .toEqual([
        {
          name: "react",
          path: "react"
        },
        {
          name: "redux",
          path: "redux"
        }
      ])
  })
})