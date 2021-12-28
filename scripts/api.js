
export const getCite = () => {
    return fetch('https://api.kanye.rest')
    .then((res) => {
        if(res.ok) {
          return res.json()
        } else {
          return Promise.reject(`${res.status}`)
        }
      })
}
