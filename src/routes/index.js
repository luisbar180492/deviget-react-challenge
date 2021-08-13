import { mount } from 'navi'

import getPublicViews from './routesLoaders/publicRoutes'
import getPrivateViews from './routesLoaders/privateRoutes'

const getViews = async () => {
  const publicPages = await getPublicViews()
  const privatePages = await getPrivateViews()

  return {
    ...privatePages,
    ...publicPages,
  }
}

export default async () => mount(
  await getViews()
)
