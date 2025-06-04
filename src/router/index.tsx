import Home from '../pages/Home'
import About from '../pages/About'
import Seller_channel from '../pages/Seller_channel'
import Shop_information from '../pages/Shop_information'

import FormLogins from '../auth'

import { HeaderOnly } from '../Component/Layout'

const PublicRouter = [
    {path: '/', component: Home},
    {path: '/about', component: About, layout: HeaderOnly},
    {path: '/seller-channel', component: Seller_channel, layout: HeaderOnly},
    {path: '/shop-information', component: Shop_information, layout: HeaderOnly},
    {path: '/login', component: FormLogins, layout: null},
]
export { PublicRouter }