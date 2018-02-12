import { ADD_POST, RECEIVE_POST } from "../../actions/posts";
import posts from "../posts";

const prevState = [{
  author: "thingtwo",
  body: "Everyone says so after all.",
  category: "react",
  commentCount: 2,
  deleted: false,
  id: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1467166872634,
  title: "Udacity is the best place to learn React",
  voteScore: 6,
}]

describe('Posts reducer', () => {
  it('Should return initial state', () => {
    expect(posts(undefined, {}))
      .toEqual([])
  })

  it('Should handle RECEIVE_POST (1 item)', () => {
    expect(posts(undefined, {
      type: RECEIVE_POST,
      posts: [{
        author: "thingtwo",
        body: "Everyone says so after all.",
        category: "react",
        commentCount: 2,
        deleted: false,
        id: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1467166872634,
        title: "Udacity is the best place to learn React",
        voteScore: 6,
      }]
    }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Everyone says so after all.",
          category: "react",
          commentCount: 2,
          deleted: false,
          id: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1467166872634,
          title: "Udacity is the best place to learn React",
          voteScore: 6,
        }
      ])
  })

  it('Should handle RECEIVE_POST (>1 item)', () => {
    expect(posts(undefined, {
      type: RECEIVE_POST,
      posts: [{
        author: "thingtwo",
        body: "Everyone says so after all.",
        category: "react",
        commentCount: 2,
        deleted: false,
        id: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1467166872634,
        title: "Udacity is the best place to learn React",
        voteScore: 6,
      },
      {
        author: "thingone",
        body: "Just kidding. It takes more than 10 minutes to learn technology.",
        category: "redux",
        commentCount: 0,
        deleted: false,
        id: "6ni6ok3ym7mf1p33lnez",
        timestamp: 1468479767190,
        title: "Learn Redux in 10 minutes!",
        voteScore: -5,
      }]
    }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Everyone says so after all.",
          category: "react",
          commentCount: 2,
          deleted: false,
          id: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1467166872634,
          title: "Udacity is the best place to learn React",
          voteScore: 6,
        },
        {
          author: "thingone",
          body: "Just kidding. It takes more than 10 minutes to learn technology.",
          category: "redux",
          commentCount: 0,
          deleted: false,
          id: "6ni6ok3ym7mf1p33lnez",
          timestamp: 1468479767190,
          title: "Learn Redux in 10 minutes!",
          voteScore: -5,
        }
      ])
  })

  it('Should handle ADD_POST', () => {
    expect(posts(prevState, {
      type: ADD_POST,
      post:
        {
          author: "thingone",
          body: "Just kidding. It takes more than 10 minutes to learn technology.",
          category: "redux",
          commentCount: 0,
          deleted: false,
          id: "6ni6ok3ym7mf1p33lnez",
          timestamp: 1468479767190,
          title: "Learn Redux in 10 minutes!",
          voteScore: -5,
        }
    }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Everyone says so after all.",
          category: "react",
          commentCount: 2,
          deleted: false,
          id: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1467166872634,
          title: "Udacity is the best place to learn React",
          voteScore: 6,
        },
        {
          author: "thingone",
          body: "Just kidding. It takes more than 10 minutes to learn technology.",
          category: "redux",
          commentCount: 0,
          deleted: false,
          id: "6ni6ok3ym7mf1p33lnez",
          timestamp: 1468479767190,
          title: "Learn Redux in 10 minutes!",
          voteScore: -5,
        }
      ])
  })
})