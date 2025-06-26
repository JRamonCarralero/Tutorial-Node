# npm

## npm init

Ejecutamos el comando npm init para crear un archivo package.json

```bash
npm init
```

Si queremos crear un archivo con todos los valores por defecto:

```bash
npm init --yes
```

## Archivo package.json

El archivo package.json se encuentra en la raiz del proyecto
Este archivo contiene la informacion de los paquetes instalados, es decir, las dependencias del proyecto

## Instalación de paquetes

Para instalar paquetes, por ejemplo, express.js

```bash
npm install express
```

Se crea una carpeta node_modules con todos los paquetes instalados y se crea el archivo package-lock.json con la informacion de los paquetes instalados
En el archivo package.json se encuentra la informacion de los paquetes instalados en el apartado dependencies

Para instalar una versión en concreto del paquete, por ejemplo:

```bash
npm install express@4.17.1
```

Para desinstalar paquetes:

```bash
npm uninstall express
```

Elimina todas las dependencias de la carpeta node_modules y el archivo package-lock.json

## Instalación de dependencias

Teniendo el archivo package.json, puedes instalar todas sus dependencias ejecutando el siguiente comando:

```bash
npm install
```

## Actualización de dependencias

Para actualizar las dependencias, ejecutamos el siguiente comando:

```bash
npm update
```

## Desinstalación de dependencias

Para desinstalar las dependencias, ejecutamos el siguiente comando:

```bash
npm uninstall
```

## devDependencies

Para instalar paquetes que solo se usan en desarrollo se utiliza la propiedad devDependencies

```bash
npm install express --save-dev
```

Dentro del archivo package.json se encuentra la propiedad devDependencies

## Archivo package-lock.json

El archivo package-lock.json se encuentra en la raiz del proyecto
Este archivo contiene la informacion de los paquetes instalados, contiene la informacion de las versiones de los paquetes y sus detalles
Esta información se encuentra el la key packages

## Carpeta node_modules

La carpeta node_modules se encuentra en la raiz del proyecto
En la carpeta node_modules se encuentran los paquetes instalados.
