const productos = [
    {
        id: '1',
        nombre: "Tallarines",
        precio: 1990,
        categoria: "Abarrotes",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
    {
        id: '2',
        nombre: "Manzanas",
        precio: 1990,
        categoria: "Frutas",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
    {
        id: '3',
        nombre: "Peras",
        precio: 1990,
        categoria: "Frutas",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
    {
        id: '4',
        nombre: "Sandias",
        precio: 1990,
        categoria: "Frutas",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
    {
        id: '5',
        nombre: "Queso",
        precio: 1990,
        categoria: "Abarrotes",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
    {
        id: '6',
        nombre: "Mantequilla",
        precio: 1990,
        categoria: "Abarrotes",
        imagen_producto: "https://via.placeholder.com/680x680",
        stock: 50,
        descripcion: "lorem impsum ma rico jejeje"
    },
]

// const categorias = [
//     { id: 1, categoria_nombre: "Abarrotes" },
//     { id: 2, categoria_nombre: "Frutas" },
//     { id: 3, categoria_nombre: "Ferreteria" },
//     { id: 4, categoria_nombre: "Computación" },
//     { id: 5, categoria_nombre: "Electrónica" },
//     { id: 6, categoria_nombre: "Telefonía" },
//     { id: 7, categoria_nombre: "Videojuegos" },
//     { id: 8, categoria_nombre: "Panadería" },
//     { id: 9, categoria_nombre: "Licores y Bebidas" },
//     { id: 10, categoria_nombre: "Drogas" }
// ]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

export const getProductosPorCategoria = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(producto => producto.categoria === categoryId))
        }, 500)
    })
}

export const getProductosPorId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod=>prod.id === id))
        }, 500)
    })
}