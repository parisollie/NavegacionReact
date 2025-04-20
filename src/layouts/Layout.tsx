import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

//V-309,paso 2.3, creamos el layout
export default function Layout() {

    return (
        //Paso 2.5, ponemos el fragment
        <>
            {/**Paso 2.2 */}
            <Header />
            {/**ponemos el main, centramos el contenido  */}
            <main className='container mx-auto py-16'>
                {/*
                  *Paso 2,6, ponemos el outlet,inyecta el contenido de index o favoritos
                  *pero nos permiten elementos que son comunes  
                */}
                <Outlet />
            </main>
        </>
    )
}
