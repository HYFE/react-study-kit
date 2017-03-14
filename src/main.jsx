import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'view/app'

render(
    <AppContainer><App /></AppContainer>,
    document.getElementById('app')
)

if (module && module.hot) {
    module.hot.accept()
}
