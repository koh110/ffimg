export const createRandomId = () => {
  const id = window.crypto.randomUUID ? window.crypto.randomUUID() : `${Math.random() * Number.MAX_VALUE}`
  return id
}
