// import {user} from './Data.js'
// import React from "react"
// console.log('Hello Parcel')
// if (module.hot) {
//     module.hot.accept();
//   }
import { createRoot} from 'react-dom/client'
const h1 = <h1>Hello ji </h1>
const root=createRoot(document.getElementById('root'))
root.render(h1)
console.log('Hello Parcel')