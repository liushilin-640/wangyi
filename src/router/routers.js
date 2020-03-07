import Category from '../pages/Category/Category.vue'
import Miste from '../pages/Miste/Miste.vue'
import Owner from '../pages/Owner/Owner.vue'
import ShopCar from '../pages/ShopCar/ShopCar.vue'
import Zhidemai from '../pages/Zhidemai/Zhidemai.vue'
export default [
  {
    path: '/',
    component: Miste,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/owner',
    component: Owner
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/zhidemai',
    component: Zhidemai
  },
]