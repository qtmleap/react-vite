import { makeApi, Zodios } from '@zodios/core'

const endpoints = makeApi([])

export const client = new Zodios('/api', endpoints, {
  axiosConfig: {
    withCredentials: true
  }
})
