export const FETCH_USER = 'FETCH_USER'
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS'
import _ from 'lodash'
import axios from 'axios'

export function fetchUser() {
  const request = axios.get('https://aerolab-challenge.now.sh/user/me', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0',
    },
  })

  return {
    type: FETCH_USER,
    payload: request,
  }
}

export function fetchProducts() {
  const request = axios.get('https://aerolab-challenge.now.sh/products', {
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBkOTk4MTUyZGQ5NjAwN2I2ZWIyYTQiLCJpYXQiOjE1MTA4NDA3MDV9.-XHsjWBC0i1u6zyo00TUIHVLCKxx2mvFcW9GLB_kGU0',
    },
  })

  return {
    type: FETCH_PRODUCTS,
    payload: request,
  }
}

export function lowestToHighest(products) {
  const request = products
  console.log('ESTO LE PASE A LOWEST TO HIGHEST', request)

  return {
    type: FETCH_PRODUCTS,
    payload: request,
  }
}
