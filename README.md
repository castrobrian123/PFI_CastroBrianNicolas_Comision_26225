primero abrimos un workspaces en postman

creamos una solicitud HTTP

ve a la pestaña de body y selecciona Raw

iniciar sesion como admin

coloca la solitud antes de enviar

POST https://pfi-castro-brian-nicolas-comision-2.vercel.app/auth/login

despues coloca el usuario y el password dentro del Raw

    {
        "usuario": "admin",
        "password": "123456"
    }

por ultimo envia

esto nos entregara el TOKEN

luego vamos a la pestaña de Headers

y creamos una llave(key) de Authorizacion de valor(value):

Bearer EL_TOKEN_SIN_COMILLAS

y creamos una llave(key) de Content-Type de valor(value):

application/json

ahora podremos obtener todos los productos que esten en la api

enviamos la solitud

GET https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products

y nos devolvera los productos que esten en la api

    [
        {
            "id": "ENnWMxJZrwIaPn2O2CzL",
            "descripcion": "es Mecanico",
            "stock": 15,
            "categoria": "Tecnologia",
            "nombre": "Teclado",
            "precio": 250
        },
        {
            "id": "producto1",
            "descripcion": "Notebook 16 GB RAM",
            "stock": 10,
            "precio": 850000,
            "categoria": "Tecnologia",
            "nombre": "Notebook"
        }
    ]

para crear un producto

coloca la solicitud antes de enviar

POST https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products/create

despues ponle un nombre,descripcion,stock,categoria,precio

    {
        "descripcion": "es una Nintendo switch",
        "stock": 472,
        "categoria": "Tecnologia",
        "nombre": "Nintendo",
        "precio": 4900
    }

luego hacemos una solicitud GET https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products

y podras ver el nuevo producto añadido

    [
        {
            "id": "XBwp5R76qqA6ftRS2R8L",
            "descripcion": "es una Nintendo switch",
            "stock": 472,
            "categoria": "Tecnologia",
            "nombre": "Nintendo",
            "precio": 4900
        }
    ]

para buscar un producto por su ID

enviamos la solicitud

GET https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products/XBwp5R76qqA6ftRS2R8L

nos devolvera el producto del id buscado

    [
        {
            "id": "XBwp5R76qqA6ftRS2R8L",
            "descripcion": "es una Nintendo switch",
            "stock": 472,
            "categoria": "Tecnologia",
            "nombre": "Nintendo",
            "precio": 4900
        }
    ]

para actualizar un producto por su ID

enviamos la solicitud

PUT https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products/XBwp5R76qqA6ftRS2R8L

y cambiamos los datos de algunos de los campos

    {
        "stock": 840,
        "precio": 1500
    }

luego hacemos una solicitud GET https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products

nos devolvera el producto actualizado

    {
        "id": "XBwp5R76qqA6ftRS2R8L",
        "precio": 1500,
        "categoria": "Tecnologia",
        "descripcion": "es una Nintendo switch",
        "nombre": "Nintendo",
        "stock": 840
    }

para borrar un producto por su ID

enviamos la solicitud

DELETE https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products/XBwp5R76qqA6ftRS2R8L

y al hacer el una solicitud GET https://pfi-castro-brian-nicolas-comision-2.vercel.app/api/products

ya no encontraremos el producto por que ya fue eliminado