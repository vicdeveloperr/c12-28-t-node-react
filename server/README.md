# api-concerts

# ENDPOINTS FUNCIONANDO:

#### IMPORTANTE! SI LIMPIAN SU BDD, ES IMPORTANTE CREAR LOS REGISTROS EN ESTE ORDEN PARA QUE DEN BIEN LAS RELACIONES:

##### GENRE - ARTIST - STAGE - EVENT

## <u>GENRE</u>

### POST http://localhost:3001/genre

Se le pasa por body únicamente el "genreName":

```
{
    "genreName":"Classic"
}
```

### GET http://localhost:3001/genre

Responde con un array de objetos. Envía los géneros con sus ID.

```
[
    {
        "id": 1,
        "genreName": "Classic"
    },
    {
        "id": 2,
        "genreName": "Metal"
    },
    {
        "id": 3,
        "genreName": "Punk"
    }
]
```

### GET http://localhost:3001/genre/:genreId

Responde con un onjeto. Envía los detalles del género cuyo ID se envió por params en la URL y los artistas que pertenecen a ese género.

```
{
	"id": 1,
	"genreName": "Metal",
	"Artists": [
		{
			"id": 1,
			"name": "Metallica",
			"description": "Metallica es alta banda"
		},
		{
			"id": 4,
			"name": "Pantera",
			"description": "Y no es rosa..."
		}
	]
}
```

## <u>ARTIST</u>

### POST http://localhost:3001/artist

Se le pasa por body el nombre, la descripción y <u>EL ID DE SU GÉNERO</u>

```
{
	"name":"Crash Nebula",
	"description":"Este es Crash Nebula, en su nueva carrera como solista",
	"genreId":1
}
```

### GET http://localhost:3001/artist

Responde con un array de objetos. Envía a los artistas, incluyendo los datos de su género.

```
[
	{
		"id": 1,
		"name": "Crash Nebula",
		"description": "Este es Crash Nebula, en su nueva carrera como solista",
		"Genre": {
			"id": 1,
			"genreName": "Classic"
		}
	},
	{
		"id": 2,
		"name": "Metallica",
		"description": "Metallica es alta banda",
		"Genre": {
			"id": 2,
			"genreName": "Rock"
		}
	},
	{
		"id": 3,
		"name": "Los Ramones",
		"description": "No tienen nada que ver con Don Ramón",
		"Genre": {
			"id": 3,
			"genreName": "Punk"
		}
	}
]
```

### GET http://localhost:3001/artist/:artistId

La ruta que vas a amar.

Responde con un objeto. Envía los detalles del artista cuyo ID se envió por params en el URL. Contiene además el detalle de los eventos que tiene programados y, a su vez, el detalle del stage donde se realiza cada evento.

```
{
	"id": 1,
	"name": "Metallica",
	"description": "Metallica es alta banda",
	"Genre": {
		"id": 1,
		"genreName": "Metal"
	},
	"Events": [
		{
			"id": 1,
			"name": "Un recital de Metallica",
			"description": "Este reci va a ser una locura",
			"date": "2022-04-13",
			"Stage": {
				"id": 1,
				"name": "Estadio Único de La Plata",
				"capacity": 20000,
				"address": "Avenida Siempre Vida 123",
				"lat": "-54.1234",
				"lon": "-23.1345",
				"description": "Cerca de la casa de Los Simpsons"
			}
		},
		{
			"id": 2,
			"name": "Un recital de Metallica pero en otro lado",
			"description": "Este reci TAMBIEN va a ser una locura",
			"date": "2022-04-13",
			"Stage": {
				"id": 2,
				"name": "Teatro Gran Rex",
				"capacity": 2000,
				"address": "Calle Falsa 456",
				"lat": "-54.1234",
				"lon": "-23.1345",
				"description": "Es un teatro re lindo"
			}
		}
	]
}
```

## <u>STAGE</u>

### POST http://localhost:3001/stage

Se le pasa por body el nombre, la capacidad, la dirección, latitud, longitud y descripción.

```
{
 "name":"Domodin",
 "capacity":20000,
 "address":"Calle Falsa 123",
 "lat":"-54.1234",
 "lon":"-23.1345",
 "description":"El Domodin es lo más"
}
```

### GET http://localhost:3001/stage

Responde con un array de objetos. Envía la información de los stages.

```
[
	{
		"id": 1,
		"name": "Domodin",
		"capacity": 20000,
		"address": "Calle Falsa 123",
		"lat": "-54.1234",
		"lon": "-23.1345",
		"description": "El Domodin es lo más"
	},
	{
		"id": 2,
		"name": "Estadio Único de La Plata",
		"capacity": 20000,
		"address": "Avenida Siempre Vida 123",
		"lat": "-54.1234",
		"lon": "-23.1345",
		"description": "Cerca de la casa de Los Simpsons"
	}
]
```

### GET http://localhost:3001/stage/:idStage

Responde con un objeto. Envía la información del stage cuyo ID se pasó por params en la URL, con los detalles de los eventos que tiene programados, y a su vez los detalles de la banda que tocará en el evento.

```
{
	"id": 1,
	"name": "Estadio Único de La Plata",
	"capacity": 20000,
	"address": "Avenida Siempre Vida 123",
	"lat": "-54.1234",
	"lon": "-23.1345",
	"description": "Cerca de la casa de Los Simpsons",
	"Events": [
		{
			"id": 1,
			"name": "Un recital de Metallica",
			"description": "Este reci va a ser una locura",
			"startdate": "2022-04-13",
			"Artist": {
				"id": 1,
				"name": "Metallica",
				"description": "Metallica es alta banda"
			}
		},
		{
			"id": 3,
			"name": "Un recital de Pantera",
			"description": "Este reci TAMBIEN va a ser una locura",
			"startdate": "2022-04-16",
			"Artist": {
				"id": 2,
				"name": "Los Ramones",
				"description": "No tienen nada que ver con Don Ramón"
			}
		}
	]
}
```

## <u>EVENT</u>

### POST http://localhost:3001/event

Se le pasa por body el nombre del evento, descripción del evento, fecha, hora, imagen representativa, objeto stock, ID del artista e ID del stage. Stock es un objeto que contiene, nombre de las categorías, la cantidad de entradas disponibles y el precio, para cada una de las categorías.

<b>ESTA RUTA ES TEMPORAL</b>

```
{
	"name":"Metallica de nuevo en Sala Tempo",
	"description":"Metallica a llenar este teatro otra vez en este espectacular recital",
	"artistId":4,
	"stageId":3,
	"date":"2022-04-12",
	"time":"22:00",
	"img":"imgsrc",
	"userId":"4"
	"stock": {
		"cat1name": "Platea",
		"cat1price": 650,
		"cat1stock": 1500,
		"cat2name": "Campo",
		"cat2price": 1000,
		"cat2stock": 1200,
		"cat3name": "VIP",
		"cat3price": 1500,
		"cat3stock": 800,
	}
}
```

### GET http://localhost:3001/event

```
{
	"id": "2",
	"name":"Metallica de nuevo en Sala Tempo",
	"img":"imgsrc",
	"date":"2022-04-12",
	"time":"22:00",
	"Artist": {
		"name": Metallica,
	},
	"Stage": {
		"name": "Gran Rex";
	}
	"lowestPrice": 650
}
```

## <u>AUTH</u>

### POST http://localhost:3001/auth/register

Se le pasa por body los campos requeridos.

BODY

```
{
	"firstName": string,
	"lastName": string,
	"phone": string,
	"email": string,
	"password": string,
}
```

RESPONSE

```
{
	"user" : {
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"password": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		}
	},
	"token": string
}
```

ERROR

```
{
	"error": "Error message"
}
```

### POST http://localhost:3001/auth/login

Se le pasa por body los campos requeridos.
BODY

```
{
	"email": string,
	"password": string,
}
```

RESPONSE

```
{
	"user" : {
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"password": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		}
	},
	"token": string
}
```

ERROR

```
{
	"error": "Error message"
}
```

### POST http://localhost:3001/auth/login/token

Se le pasa por body el token. Tambien se debe pasar por headers el mismo token. Ver Implementacion de Headers abajo.
BODY

```
{
	"bodyToken": string,
}
```

RESPONSE

```
{
	"user" : {
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"password": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		}
	},
	"token": string
}
```

ERROR

```
{
	"error": "Error message"
}
```

## <u>USERS</u>

TODAS LAS RUTAS DE USERS ESTAN PROTEGIDAS CON TOKEN.

### GET http://localhost:3001/users/

Responde con un array con todos los usuarios. Ruta proteguida se debe mandar JWT en el header.
RESPONSE

```
[
	{
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		}
	}
]
```

ERROR

```
{
	"error": "Error message"
}
```

### GET http://localhost:3001/users/user/:id

Responde con un objeto con la info del usuario . Ruta proteguida se debe mandar JWT en el header.
RESPONSE

```
[
	{
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		},
		"Events": [],
		"Orders": [],
	}
]
```

ERROR

```
{
	"error": "Error message"
}
```

### POST http://localhost:3001/users/user/update/:id

Se le pasa por body los campos requeridos. Tambien se debe pasar el Token en el header.

BODY

```
{
	"firstName": string,
	"lastName": string,
	"phone": string,
	"email": string,
	"role": string,
}
```

RESPONSE

```
{
	"user" : {
		"firstName": string,
		"lastName": string,
		"id": int,
		"phone": string,
		"email": string,
		"createdAt": string,
		"updatedAt": string,
		"Role": {
			"name": string,
			"id": int
		}
	},
	"Events": [],
	"Orders": [],
}
```

ERROR

```
{
	"error": "Error message"
}
```

### POST http://localhost:3001/users/password/update/:id

Se le pasa por body los campos requeridos. Tambien se debe pasar el Token en el header.

BODY

```
{
	"password": string,
	"currentPassword": string,
}
```

RESPONSE

```
{
	"message" : "Password updated"
}
```

ERROR

```
{
	"error": "Error message"
}
```

### GET http://localhost:3001/users/roles

Responde con un array con todos los roles. Ruta proteguida se debe mandar JWT en el header.

```
[
	{
		"name": string,
		"id": int,
	}
]
```

ERROR

```
{
	"error": "Error message"
}
```

.env (se necesita agregar SA_PASSWORD=somepassword, para el password inicial del super admin)

## Implementacion de Token en los headers de los requests

Ejemplos de implementacion de token:

#### Axios

```bash
  axios.post(url, data, {
	headers: {
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${token}`
	}
})
```

#### HTTP

```bash
  fetch(url, {
  	method: 'GET',
  	headers: {
    	Authorization: `Bearer ${token}`,
    	Accept: 'application/json',
  	},
})
```
