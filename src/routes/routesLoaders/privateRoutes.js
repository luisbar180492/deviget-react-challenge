import {
  route, redirect, map, 
} from 'navi'

import privatePages from '../config/privatePages.json'
import asyncForEach from 'utils/asyncForEach'
import upperCamelCaseToLowerCamelCase from 'utils/upperCamelCaseToLowerCamelCase'
import isAuthenticated from '../guards/isAuthenticated'

export default async () => {
  const routes = {}

  const getConfiguration = async (privateView) => {
    try {
      return await import(
        `pages/private/config/${upperCamelCaseToLowerCamelCase(
          privateView.name
        )}`
      )
    } catch (error) {
      return {
        default: {}
      }
    }
  }

  await asyncForEach(
    privatePages,
    async (privateView) => {
      const configuration = await getConfiguration(privateView)
      const path = configuration.default.path || privateView.path

      routes[path] = map(
        () => {
          if (isAuthenticated()) {
            return route(
              {
                title: privateView.name,
                getView: () => import(
                  /* webpackChunkName: 'private' */ `pages/private/${privateView.name}.${
                    privateView.extension
                  }`
                ),
                ...configuration.default,
              }
            )
          }

          return redirect(
            '/login'
          )
        },
      )
    },
  )

  return { ...routes, }
}
