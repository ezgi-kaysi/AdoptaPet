import FetchData from 'components/fetch-data'
import HomePage from '../pages/home.vue'
import Login from '../pages/core/Login.vue'
import Error from '../pages/core/Error.vue'
import PetDetail from 'components/petDetail.vue'
import Dogs from '../pages/dogs.vue'
import Cats from '../pages/cats.vue'
import Favorites from '../pages/favorites.vue'
import Form from 'components/Form'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'petDetail', path: '/pets/:species/:id', component: PetDetail, display: 'petDetail', icon: 'graduation-cap' },
  { name: 'dogs', path: '/dogs', component: Dogs, display: 'Cats', icon: 'graduation-cap' },
  { name: 'cats', path: '/cats', component: Cats, display: 'Cats', icon: 'graduation-cap' },
  { name: 'form', path: '/form', component: Form, display: 'Form', icon: 'graduation-cap' },
  { name: 'favorites', path: '/favorites', component: Favorites, display: 'Favorites', icon: 'graduation-cap' },
  { name: 'petAccessories', path: '/petAccessories', component: FetchData, display: 'Pet Accesories', icon: 'list' },
  { name: 'Login', path: '/login', component: Login, meta: { allowAnonymous: true } },
  { name: 'Error', path: '/error', component: Error, meta: { allowAnonymous: true } }
]
