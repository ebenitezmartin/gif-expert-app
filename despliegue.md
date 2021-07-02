
# Generar el entorno de producción de nuestra app

Escribir en le terminal:

`npm run build`

Esto genera el directorio **build**, los archivos de este directorio sólo podrán arrancar en un servidor real.


Podemos hacer pruebas con servidor montándonos un localhost mediante la instalación de [https://www.npmjs.com/package/http-server](https://www.npmjs.com/package/http-server)

`sudo npm install --global http-server`

Dentro del directorio **build** de nuestra aplicación debemos ejecutar:

`http-server -o`

Esto levantará un servidor que va a ejecutar la información que se encuentra en ese directorio.

# Desplegar el código en **Github**

* Primero habrá que instalar **Git** y configurar el username de git en nuestro equipo [https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git](https://docs.github.com/en/enterprise/2.13/user/articles/setting-your-username-in-git)\
`git config --global user.name "Mona Lisa"`\
`git config --global user.email "monalisa@gmail.com"`

* Lo confirmamos:\
`$ git config --global user.name`\
`> Mona Lisa`

* Después inicializaremos el repositorio local mediante\
`git init`

* Incluiremos los archivos del proyecto mediante\
`git add .`

* Podemos ver que la carpeta **build** es ignorada por **Git**, la renombraremos por **docs** (únicamente haremos esto para git), tras esto habrá que incluir de nunevo los cambios mediante\
`git add .`

* Crearemos un commit con un mensaje mediante\
`git commit -m "Mensaje"`

* Crearemos un nuevo repo desde la página de **Git**.

* Crearemos la rama origin a partir de la url generada\
`git remote add origin https://github.com/blablablalbalblabala.git`

* Subiremos los cambios del proyecto mediante\
`git push -u origin master`

* Para desplegar como página web vamos a **GitHub->Settings->GitHub Pages->master branch /docs folder** y esperar a que el enlace aparezca en verde y hacemos clic sobre el enlace generado.

* Si no carga nada y hay errores de consola será por que no encuentra los archivos desde la ruta generada, para solucionarlo vamos al proyecto:\
    * Buscamos en la carpeta **docs->index.html** y cambiamos todas las rutas de directorio:\
        Ejemplo: `/favicon.ico` por `./favicon.ico`
    * Volver a esperar a que se ponga en verde el enlace y volvemos a acceder.