
# NodePop Avanzado

[Demo](/anuncios) of the methods (this link works only if you run the project)

Api for the iOS/Android apps.

## Deploy

### Install dependencies  
    
    npm install

### Copy .env.example to .env and customize your variables.  

    cp .env.example .env

### Init database

    npm run installDB

## Start

To start a single instance:
    
    npm start

To start in development mode:

    npm run dev (including nodemon & debug log)

## Test

    npm test (pending to create, the client specified not to do now)

## ESLint

    npm run hints

## API v1 info


### Base Path

The API can be used with the path: 
[API V1](/apiv1/anuncios)

### Language

All requests that return error messages are localized to english, if you want to 
change language make the request with the header accept-language set to other language, 
i.e. Accept-Language: es 

### Error example

    {
      "ok": false,
      "error": {
        "code": 401,
        "message": "Authentication failed. Wrong password."
      }
    }

### GET /anuncios
**Result:** 

        "rows": [
            {
                "size": [
                    "Mediano"
                ],
                "_id": "64c3d10376561947887526b6",
                "nombre": "Rocky",
                "venta": true,
                "edad": "1",
                "raza": "West Highland White Terrier",
                "foto": "\\images\\anuncios\\Westy.jpeg",
                "sexo": true,
                "perro": true,
                "descripcion": "cariñoso y con mucha energía",
                "__v": 0
            },]


