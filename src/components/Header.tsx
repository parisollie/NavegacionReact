
import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

//V-308,paso 1.9, creamos el header
export default function Header() {
    //V-312,paso 4.0,ponemos useLoction para detectar la página actual
    const { pathname } = useLocation()
    console.log(location.pathname)

    //V-313,paso 4.1 queremos que se ejecute cada vez que la página cambie,la / es la página de inicio
    const isHome = useMemo(() => pathname === '/', [pathname])

    return (

        //Paso 2.0, agregamos el bg-slate-800
        //Paso 4.4, le ponemos si es home le ponemos la imagen de fondo.
        <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'} >
            {/** Paso 2.1,ponemos la estructura del header */}
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>

                    {/**
                     * V-310,Paso 3.0,ponemos el nav para poder navegar entre las paginas e
                     * importamos el NavLink
                     * separamos con 'flex gap-4', la separación de INICIO-FAVORITOS */}
                    <nav className='flex gap-4'>

                        <NavLink
                            /*
                              V-311,paso 3.1,to hacia donde irá*/
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }>Inicio
                        </NavLink>

                        <NavLink
                            //V-311,paso 1.20,haremos un callback para poder hacer un resaltado especial
                            to="/favoritos"
                            className={({ isActive }) =>
                                isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                            }>Favoritos
                        </NavLink>
                    </nav>
                </div>

                {/**Paso 4.2 */}
                {isHome && (
                    <form
                        //Toma un widh de 1 de 2 columnas pero en un tamaño grande 1 de 3 columnas
                        //m-y, margin y
                        //p-10,padding de 10
                        className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'
                    >

                        <div className='space-y-4'>
                            <label
                                htmlFor="ingredient"
                                className='block text-white uppercase font-extrabold text-lg'
                            >Nombre o Ingredientes
                            </label>

                            <input

                                id='ingredient'
                                type='text'
                                name='ingredient'
                                /*
                                P-3 -> Padding de 3 en todas las direcciones
                                No resalta nada con esto con el focus*/
                                className='p-3 w-full rounded-lg focus:outline-none'
                                placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'

                            />
                        </div>

                        <div className='space-y-4'>
                            <label
                                htmlFor="category"
                                className='block text-white uppercase font-extrabold text-lg'
                            >Categoría
                            </label>

                            <select
                                id='category'
                                name='category'
                                className='p-3 w-full rounded-lg focus:outline-none'

                            >
                                <option value="">-- Seleccione --</option>


                            </select>
                        </div>

                        <input
                            type='submit'
                            value='Buscar Recetas'
                            className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
                        />
                    </form>
                )}
            </div>
        </header>
    )
}
