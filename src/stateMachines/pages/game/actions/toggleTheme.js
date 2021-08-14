import { assign } from '@xstate/immer'

const toggleTheme = () => [document.documentElement.classList.toggle('dark'), assign((context) => context.dark = !context.dark)]

export default toggleTheme