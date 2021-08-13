import(
  './index'
)

if ('serviceWorker' in navigator) {
  window.addEventListener(
    'load',
    () => {
      navigator.serviceWorker
        .register(
          '/serviceWorker.js'
        )
        .then(
          (
            registration
          ) => {
            console.log(
              'Service workers registered: ', registration
            )
          },
        )
        .catch(
          (
            registrationError
          ) => {
            console.log(
              'Service workers registration failed: ', registrationError
            )
          },
        )
    },
  )
}
