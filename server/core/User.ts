import prisma from '../index'

export const User = {
  getAll: () => {
    return prisma.user.findMany()
  },
}
