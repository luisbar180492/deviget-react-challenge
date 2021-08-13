import { route, } from 'navi'

import publicPages from '../config/publicPages.json'
import asyncForEach from 'utils/asyncForEach'
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase'

export default async () => {
  const routes = {}

  const getConfiguration = async (publicView) => {
    try {
      return await import(
        `pages/public/config/${upperCamelCaseToLowerCamelCase(
          publicView.name
        )}`
      )
    } catch (error) {
      return {
        default: {}
      }
    }
  }

  await asyncForEach(
    publicPages,
    async (publicView) => {
      const configuration = await getConfiguration(publicView)
      const path = configuration.default.path || publicView.path

      routes[path] = route(
        {
          title: publicView.name,
          getView: () => import(
            /* webpackChunkName: 'public' */ `pages/public/${publicView.name}.${
              publicView.extension
            }`
          ),
          ...configuration.default,
        }
      )
    },
  )

  return { ...routes, }
}
