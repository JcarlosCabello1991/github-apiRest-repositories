import React from 'react'
import {Octokit} from '@octokit/rest'
import * as dotenv from 'dotenv'

async function getUsers(value:string) {
  
  const octokit = new Octokit({auth: process.env.API_TOKEN_GITHUB})

  console.log(octokit.auth);
  const users = await octokit.request('GET /users', {})
  console.log(users);
  return users;
}

export default getUsers