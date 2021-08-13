export default (
  name
) => {
  const cookies = document.cookie
  const cookiesSplitted = cookies.split(
    ';'
  )

  const cookieMatched = cookiesSplitted
    .filter(
      (
        cookie
      ) => cookie.split(
        '='
      ).shift() === name
    )
    .pop()

  return cookieMatched && cookieMatched.split(
    '='
  ).pop()
}
