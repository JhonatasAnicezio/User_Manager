export type User = {
  id: number,
  name: string,
  role: string,
}

export type invalid = {
  validate: boolean,
  message: string,
}

export type ResponsePost = {
  token: string,
  userData: User,
}
