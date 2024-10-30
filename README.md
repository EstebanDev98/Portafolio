# Portafolio de EstebanDev98 


### Pasos para trabajar con GitHub: clonar un repositorio, crear un repositorio desde Visual Studio Code, realizar un pull request para trabajo colaborativo y los comandos mas utilizados de GitHub.

#### En la siguiente documentación encontraras informacion relevante para comprender y aprender los conceptos basicos y una guia para el manejo de GitHub

# EstebanDev98

![](https://adictosaltrabajo.com/wp-content/uploads/2020/01/intergracionportada.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)


**Table of Contents**

# 1. Crear mi propio repositorio: GitHub + VSC
## 1.1 Verificar cambios, guardar, hacer fotografia y subir al repositorio
# 2. Clonar un repositorio de GitHub
## 2.1 Pasos para clonar desde VSC
# 3. Crear una rama en mi repositorio
## 3.1 Cambiar de rama, visualizar todas las ramas, guardar los cambios y eliminar una rama en local y en la nube
# 4. Fusionar haciendo merge
## 4.1 Pasos para fusionar y eliminar rama no fusionada
# 5. Realizar un pull request
# 6. Generacion y gestion de Tags y Releases
## 6.1 ¿Para que sirve git log?
## 6.2 ¿Que es un tag y como crearlo?
# 7. ¿Que es un Release?
## 7.1 Crear un release en mi repositorio de GitHub y publicarlo
# 8. ¿Que es git stash?
## 8.1 Comandos basicos de git stash
# 9. Conclusion

###  1. Crear mi propio repositorio: GitHub + VSC
> Para crear un repositorio en GitHub y utilizar Visual Studio Code, se pueden seguir los siguientes pasos:

	a. Crear una cuenta de GitHub. 
	b. Crear un nuevo repositorio en GitHub
	c. Darle un numbre al repositorio
	d. Escribir una descripcion (opcional)
	e. Dejar la seleccion de publico por defecto o seleccionar privado
	f. Cilck en el boton de Crear repositorio

> Realizar los siguientes pasos para asociar tu repositorio con Visual Studio Code:

	a. Iniciar Visual Studio Code
	b. Abrir un proyecto en VSC
	c. Abrir la terminal de VSC y escribir los siguientes comandos:
	d. git init 
	e. gi add .
	f. git commit -m "Ej: primer cambio en mi repositorio"
	g. git branch -M main
	h. git remote add origin <<url del repositorio creado el HTTP>>
	i. git push -u origin main
	j. Con los anteriores comandos se ha creado un repositorio en GitHub donde se pueden actualizar, realizar cambios etc, desde VSC al repositorio.

#### 1.1 Verificar cambios, guardar, hacer fotografia y subir al repositorio
> Despues de haber creado el repositorio y subir un proyecto a GitHub, se pueden utilizar los siguientes comandos, cuando se realizan cambios en el proyecto de VSC:

	a. git status //para verificar los cambios realizados.
	b. git add . //para guardar todos los cambios.
	c. git commit -m "nombre descriptivo del cambio" //para identificar posteriormente el cambio.
	d. git push -u origin main //para subir los cambios al repositorio.

### 2. Clonar un repositorio de GitHub
> Clonar un repositorio siginifica traer de manera local un proyecto que se encuentra en GitHub, es realizar un ejercicio contrario al que se planteo en el primer punto de esta guia, donde se crea un proyecto de manera local a partir de uno ya existente en la nube.

#### 2.1 Pasos para clonar desde VSC
> Pasos y comando para clonar repositorio de GitHub a VSC:

	a. Ir al repositorio de GitHub
	b. Escoger el proyecto que se quiere clonar
	c. Click en el boton de <<code>>
	d. Click en el boton de <<HTTPS>>
	e. Copiar url (Ej: https://github.com/EstebanDev98/Portafolio.git)
	f. Iniciar Visual Studio Code
	g. git init //inicializar git en VSC
	h. git clone <<url copiado >>

### 3. Crear una rama en mi repositorio
> Una rama en GitHub representa una forma ordenada de realizar cambios y modificaciones en alguna parte de un proyecto de desarrollo que ayude al trabajo colaborativo, como lo hace en general trabajar con Git. Por ende, en una rama se pueden realizar cambios sin afectar el rendimiento del resto del proyecto si se hace de forma adecuada. A continuacion, se nombrara el paso a paso para crear una rama y el comando principal:

	a. Iniciar a VSC o una aplicacion de Git como Git bash
	b. Ir al proyecto donde se quiere crear la rama
	c. git branch //verificar las ramas existentes que por defecto esta la rama *main
	d. git branch <<nombre de la rama a crear Ej: develop>>
	e. git branch // verificar nuevamente las ramas, deberia aparecer  la rama *main y *develop.

#### 3.1 Cambiar de rama, visualizar todas las ramas, guardar los cambios y eliminar una rama en local y en la nube
> Comandos de Git para trabajar con ramas, teniendo en cuenta el ejemplo anterior sobre la rama creada, llamada (develop):


	a. git checkout <<nombre de la rama Ej: develop>> // Para cambiar de la rama *main a *develop 
	b. git checkout -b <<nombre de la rama>> // Para cambiarse y crear una rama automaticamente al crearla
	c. git branch // Verificar las ramas existentes y en la que me encuentro actualmente
	d. Si se realizan cambios en el proyecto se pueden utilizar los comandos mencionados en paragrafo 1.1
	e.git push origin <<nombre de la rama>> // Tener en cuenta que para los comandos del paragrafo 1.1 es necesario al momento de subir los cambios utilizar este comando.
	f. git branch -d <<nombre de la rama>> // Eliminar una rama en local
	g. git push origin --delete <<nombre de la rama>> // Eliminar una rama en remoto

### 4. Fusionar haciendo merge
> Fusionar un Git es poder unir los cambios realizados en la alguna de las ramas que se hallan creado, donde se hallan realizado cambios al proyecto, poder unir estos cambios con la rama principal del proyecto, utilizando el siguiente comando :

	 a. git merge <<nombre de la rama a fusionar con la rama principal>>


#### 4.1 Pasos para fusionar y eliminar rama no fusionada
> Los siguientes comandos proporcionan los pasos adecuados para fusionar y eliminar una rama no fusionada adecuadamente:


	b. git checkout <<nombre de la rama principal Ej: main>> // Para cambiar inicialmente hacia la rama principal y sobre esta traer la rama a fusionar
	b. git merge <<nombre de la rama que se quiere fusionar Ej: develop>>
	c. git pull // Para actualizar el repositorio local de acuerdo a cambios en remoto
	d. git branch -D <<nombre de la rama>> // Eliminar una rama no fusionada.

### 5. Realizar un pull request
> Un pull request representa la forma de como poder realizar un cambio en un repositorio de un compañero (ra), con la finalidad de aportar a solucionar un error o contribuir en un proyecto:

	a. Ir al repositorio de la otra persona
	b. Verificar que se esta en la rama main
	c. Click en el boton Fork
	d. Click en el boton new fork
	e. Darle un nombre
	f. Descripcion
	g. Click en create fork
	h. Ir a la interfaz principal del repositorio
	i. Click en boton Code
	j. Click en HTTPS
	k. Copiar url del repositorio
	l. git clone <<url del repositorio>> //Esto en VSC
	m. Realizar pasos del paragrafo 1.1
	n. Volver al repositorio personal creado al realizar el fork
	o. Click en Contributte
	p. Click en open pull request
	q. Click en create pull request
	r. Click en Merge pull request

### 6. Generacion y gestion de Tags y Releases
>A continuacion se identificaran los conceptos, pasos y comandos necesarios para incluir Tags y Releases en un proyecto con GitHub.

#### 6.1 ¿Para que sirve git log?
>git log sirve fundamentalmente para verficar el listado o historial de los diferentes commits que se han realizado durante el proyecto segun la rama en la que se encuentre ubicado, el comando principal es el siguiente:

	a. git log //Ver historial de commit
	b. git log --all --graph --decorate --oneline //Para listar los commits existentes de manera ordenada y mas simplificado

#### 6.2 ¿Que es un tag y como crearlo?
>Principalmente un Tags en Git es una referencia fija a un punto específico en el historial de commits de un repositorio. Se usa comúnmente para marcar momentos importantes en el desarrollo, como versiones de lanzamiento (v1.0, v2.0, etc.), de modo que puedes volver fácilmente a ellos en el futuro. A continuacion, se mostraran los principales comandos para crear un tag, subirlo a la nube, eliminarlo de manera local y de la nube:

	a. git tag //Ver los tags existentes
	b. git tag -a V1.0.0 -m "nombre de la version Ej: Version #1" (hash del commit referenciado) //Para agregar un tag
	c. git show -ref --tags //ver a que commit esta referenciado un tag
	d. git pull origin main //guardar cambios en remoto
	e. git push origin --tags // subir tags a la nube
	f. git tag -d <<nombre del tag>> //Eliminar tag en local
	g. git push origin :refs/tags/<<nombre del tag>> //Eliminar tag en la nube

### 7. ¿Que es un Release?
>se refieren a una funcionalidad que se suele utilizar en plataformas de alojamiento de código, como GitHub, para marcar versiones importantes de un proyecto de una manera más organizada y descriptiva. A continuacion, se mostraran algunos pasos para crear un release.

#### 7.1 Crear un release en mi repositorio de GitHub y publicarlo
>Pasos para crear un release en GitHub:

	a. Click en Releases en GitHub en mi repositorio
	b. Seleccionar tag
	c. Click en <<a new release>>
	d. Click en publish release

### 8. ¿Que es git stash?
>Es un comando de Git que permite guardar temporalmente los cambios en tu área de trabajo sin comprometerlos en el historial del repositorio. Es útil cuando estás trabajando en una rama y necesitas cambiar de contexto (por ejemplo, cambiar a otra rama) sin perder los cambios no confirmados ni hacer un commit parcial.

#### 8.1 Comandos basicos de git stash
>Comandos basicos:

	a. git stash //Guardar cambios en temporal
	b. git stash pop //Traer nuevamente los cambios
	c. git stash list //Para verificar los stash creados
	d. git stash branch <<nombre para crear rama a partir del stash>>
	e. git stash drop //Eliminar stash

### 9. Conclucion
>En conclusion, la guia realizada aqui sirve para aprender a manejar los conceptos basicos y comandos necesarios para trabajar con Git y GitHub y como incluirlo en editores de codigo como VSC. ¡Buena Suerte!