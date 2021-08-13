import * as languages from './languages/index'

export const getLanguage = () => {
  const languagesEnables = Object.keys(languages)
  const language = navigator.language.split(
    /[-_]/
  )[0]

  return languagesEnables.includes(
    language
  ) ? language : languagesEnables[0]
}

export const getMessage = () => {
  let messages = {}
  Object
  .entries(languages)
  .forEach(language => messages[language[0]] = language[1])

  return messages[getLanguage()]
}
