import { ADD_COMMENT, RECEIVE_COMMENTS_FOR_POST } from "../../actions/comments";
import comments from "../comments";

const testPostId = '8xf0y6ziyjabvozdd253nd';
const prevState = [{
  author: "thingtwo",
  body: "Hi there! I am a COMMENT.",
  deleted: false,
  id: "894tuq4ut84ut8v4t8wun89g",
  parentDeleted: false,
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  voteScore: 6,
}]

describe('Comments reducer', () => {
  it('Should return initial state', () => {
    expect(comments(undefined, {}))
      .toEqual([])
  })

  it('Should handle RECEIVE_COMMENTS_FOR_POST (1 item)', () => {
    expect(comments(undefined, {
      type: RECEIVE_COMMENTS_FOR_POST,
      comments: [{
        author: "thingtwo",
        body: "Hi there! I am a COMMENT.",
        deleted: false,
        id: "894tuq4ut84ut8v4t8wun89g",
        parentDeleted: false,
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        voteScore: 6,
      }]
    }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Hi there! I am a COMMENT.",
          deleted: false,
          id: "894tuq4ut84ut8v4t8wun89g",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1468166872634,
          voteScore: 6,
        }
      ])
  })

  it('Should handle RECEIVE_COMMENTS_FOR_POST (>1 item)', () => {
    expect(comments(undefined, {
      type: RECEIVE_COMMENTS_FOR_POST,
      comments: [{
        author: "thingtwo",
        body: "Hi there! I am a COMMENT.",
        deleted: false,
        id: "894tuq4ut84ut8v4t8wun89g",
        parentDeleted: false,
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1468166872634,
        voteScore: 6,
      },
      {
        authos: "thingone",
        body: "Comments. Are. Cool.",
        deleted: false,
        id: "8tu4bsun805n8un48ve89",
        parentDeleted: false,
        parentId: "8xf0y6ziyjabvozdd253nd",
        timestamp: 1469479767190,
        voteScore: -5,
      }]
    }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Hi there! I am a COMMENT.",
          deleted: false,
          id: "894tuq4ut84ut8v4t8wun89g",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1468166872634,
          voteScore: 6,
        },
        {
          authos: "thingone",
          body: "Comments. Are. Cool.",
          deleted: false,
          id: "8tu4bsun805n8un48ve89",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          voteScore: -5,
        }
      ])
  })

  it('Should handle RECEIVE_COMMENTS_FOR_POST (not null state)', () => {
    expect(comments(prevState, {
      type: RECEIVE_COMMENTS_FOR_POST,
      comments:[
        {
          authos: "thingone",
          body: "Comments. Are. Cool.",
          deleted: false,
          id: "8tu4bsun805n8un48ve89",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          voteScore: -5,
        }]
      }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Hi there! I am a COMMENT.",
          deleted: false,
          id: "894tuq4ut84ut8v4t8wun89g",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1468166872634,
          voteScore: 6,
        },
        {
          authos: "thingone",
          body: "Comments. Are. Cool.",
          deleted: false,
          id: "8tu4bsun805n8un48ve89",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          voteScore: -5,
        }
      ])
  })

  it('Should handle ADD_COMMENT', () => {
    expect(comments(prevState, {
      type:ADD_COMMENT,
      comment:
        {
          authos: "thingone",
          body: "Comments. Are. Cool.",
          deleted: false,
          id: "8tu4bsun805n8un48ve89",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          voteScore: -5,
        }
      }))
      .toEqual([
        {
          author: "thingtwo",
          body: "Hi there! I am a COMMENT.",
          deleted: false,
          id: "894tuq4ut84ut8v4t8wun89g",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1468166872634,
          voteScore: 6,
        },
        {
          authos: "thingone",
          body: "Comments. Are. Cool.",
          deleted: false,
          id: "8tu4bsun805n8un48ve89",
          parentDeleted: false,
          parentId: "8xf0y6ziyjabvozdd253nd",
          timestamp: 1469479767190,
          voteScore: -5,
        }
      ])
  })
})