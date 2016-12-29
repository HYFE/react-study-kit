import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from 'view/app'

render(
    <AppContainer><App /></AppContainer>,
    document.getElementById('app')
)

if (module && module.hot) {
    module.hot.accept('./view/app.jsx', () => {
        const App = require('./view/app.jsx').default
        render(
            <AppContainer>
                <App />
            </AppContainer>,
            document.getElementById('app')
        )
    })
}
