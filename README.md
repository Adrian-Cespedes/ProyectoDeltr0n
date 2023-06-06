# ProyectoDeltr0n

Proyecto para **DBP** y **DB1**

### Quienes somos

Somos un grupo de estudiantes de UTEC quienes realizaran este proyecto para los cursos
CS2031 - Desarrollo Basado en plataformas y CS2041 - Base de datos I

### Acerca del Proyecto

El siguiente repositorio es una aplicación web para la compra al por mayor de componentes para pc, nuestros clientes o público objetivo son las empresas(Personas jurídicas)

## Características Principales

- Uso de Django para el servidor y ORM;
- Uso de React y tailwindcss;

## Guía de instalación

Para clonar y ejecutar nuestro trabajo necesitas [Git](https://git-scm.com), [Node JS with npm](https://nodejs.org/es/download) y [Python](https://www.python.org/downloads/). Después de cumplir con los requisitos puedes ejecutar lo siguiente desde tu línea de comandos:

```bash
# Clona este repositorio
$ git clone https://github.com/Adrian-Cespedes/ProyectoDeltr0n.git
```

## Instrucciones de uso

Bueno esta aplicación fue construida con Django para el servidor y hace uso de un REST Framework y REACT para el frontEnd.

- Primer Paso: una vez estemos en la carpeta del repositorio clonado debemos instalar los módulos de python necesarios.

```bash
# Instalamos los módulos
$ pip3 install django
$ pip3 install djangorestframework
$ pip3 install django-cors-headers
```

- Segundo Paso: Ahora tenemos que instalar las dependencias para nuestro frontEnd.

```bash
# Entramos a la carpeta client
cd client
# Instalamos lo necesario
$ npm install
```

- Tecer Paso: Correr la aplicación

```bash
# En una terminal corres el servidor desde la carpeta raíz del repositorio
$ python3 manage.py runserver
# Luego para el frontEnd vamos a la carpeta client
$ npm run dev
```

Ya tenemos todo listo, entonces por defecto si ingresas desde tu navegador a `localhost:5173` verás la página de inicio de la aplicación

## Autores

- _Anlec(Marcelo chincha)_ 202210092
- _Adrian Cespedes(Adrian Cespedes)_ 202210088
- _Hyp3Boy(Lenin Chavez)_ 202210090

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
