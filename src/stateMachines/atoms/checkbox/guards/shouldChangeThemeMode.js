import actionTypes from '../config/actionTypes'

const shouldChangeThemeMode = (context, event) => event.action === actionTypes.CHANGE_THEME_MODE

export {
  shouldChangeThemeMode
}