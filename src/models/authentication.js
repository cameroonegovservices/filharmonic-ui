import { createUser, User } from '@/models/user'

export class Authentication {
  constructor ({ valid = false, user = new User(), token = '' } = {}) {
    this.valid = valid
    this.user = user
    this.token = token
  }
}

export function createAuthentication (data) {
  const user = createUser(data.user)
  return Object.freeze(new Authentication({
    valid: data.valid,
    user,
    token: data.token
  }))
}
