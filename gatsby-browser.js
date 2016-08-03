exports.onRouteUpdate = (location) => {
  clicky.log( location.pathname, window.document.title, 'pageview' ) // eslint-disable-line
}
