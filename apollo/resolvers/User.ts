import {User} from '@/server/core/User'

export const UserResolver = {
  Query: {
    users: () => User.getAll(),
  },
}


