module.exports = () => {
  const today = new Date()
  const dd = today.getDate()
  const mm = today.getMonth() + 1
  const yyyy = today.getFullYear()
  const date = `${dd}/${mm}/${yyyy}`

  return date
}