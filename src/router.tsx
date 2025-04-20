import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import Layout from './layouts/Layout'
import IndexPage from './views/IndexPage'
import FavoritesPage from './views/FavoritesPage'
import Layout from './layouts/Layout'

//V-307,paso 1.2,configuramos el react router
export default function AppRouter() {
    return (
        //Paso 1.3
        <BrowserRouter>
            <Routes>
                {/**Paso 2.4, con esto el layout usara el diseño principal 
                 * para estas dos paginas
                 */}
                <Route element={<Layout />}>
                    {/**Paso 1.4,definimos la pagina principal y element la 
                 * página que se va a cargar 
                 * Paso 1.6, ponemos el IndexPage
                 * 
                 */}
                    <Route path='/' element={<IndexPage />} index />
                    <Route path='/favoritos' element={<FavoritesPage />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}


