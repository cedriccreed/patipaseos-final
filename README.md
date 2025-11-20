# 🐾 PatiPaseos

> Plataforma web profesional para conectar propietarios de mascotas con cuidadores profesionales

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#-stack-tecnológico)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Base de Datos y ORM](#-base-de-datos-y-orm)
- [Gestión de Dependencias](#-gestión-de-dependencias)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación Completa](#-instalación-completa)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Uso y Desarrollo](#-uso-y-desarrollo)
- [Sistema de Archivos Estáticos](#-sistema-de-archivos-estáticos)
- [Templates y Frontend](#-templates-y-frontend)
- [API y Endpoints](#-api-y-endpoints)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**PatiPaseos** es una aplicación web desarrollada en Django que facilita la conexión entre propietarios de mascotas y cuidadores profesionales. La plataforma permite a los usuarios registrarse como propietarios de mascotas o como cuidadores, ofreciendo un sistema completo de gestión de perfiles, servicios, prestaciones, mensajería y reseñas.

### Propósito del Proyecto

El proyecto está diseñado para resolver la necesidad de encontrar cuidadores confiables para mascotas, proporcionando:

- **Sistema de autenticación personalizado** con modelo de usuario extendido
- **Gestión de roles** (Propietario/Cuidador) con permisos diferenciados
- **Perfiles de usuario** con información detallada y gestión de mascotas
- **Sistema de servicios** para que los cuidadores publiquen sus ofertas
- **Sistema de prestaciones** para gestionar contrataciones
- **Mensajería interna** entre usuarios
- **Sistema de reseñas y calificaciones**
- **Interfaz moderna y responsive** con Bootstrap 4
- **Base de datos SQLite** 100% funcional con ORM de Django

---

## ✨ Características Principales

### Funcionalidades del Usuario

- ✅ **Registro y autenticación** de usuarios con validación de formularios
- ✅ **Sistema de login/logout** personalizado
- ✅ **Registro como cuidador** con especialización y experiencia
- ✅ **Perfil de usuario** completo con información personalizable
- ✅ **Gestión de mascotas** (agregar, editar, activar/desactivar)
- ✅ **Publicación de servicios** para cuidadores
- ✅ **Solicitud de servicios** por parte de propietarios
- ✅ **Sistema de mensajería** entre usuarios
- ✅ **Reseñas y calificaciones** para cuidadores
- ✅ **Panel de administración** de Django

### Características Técnicas

- ✅ **100% compatible con SQLite** - Base de datos embebida sin configuración adicional
- ✅ **ORM de Django** - Consultas optimizadas sin procedimientos almacenados
- ✅ **Arquitectura MVC** - Separación clara de responsabilidades
- ✅ **Templates Django** - Sistema de plantillas con herencia
- ✅ **Archivos estáticos locales** - Sin dependencias de CDN externos
- ✅ **Gestión con npm** - Dependencias frontend organizadas
- ✅ **Fuentes locales** - Google Fonts descargadas y almacenadas localmente
- ✅ **Interfaz responsive** - Diseño adaptable a todos los dispositivos

---

## 🛠 Stack Tecnológico

### Backend

- **Django 4.2.9** - Framework web de alto nivel para Python
- **Python 3.14+** - Lenguaje de programación
- **django-crispy-forms 2.5** - Formularios estilizados
- **crispy-bootstrap4 2025.6** - Templates Bootstrap para crispy-forms

### Base de Datos

- **SQLite3** - Base de datos relacional embebida
  - ✅ **100% funcional** - No requiere servidor de base de datos separado
  - ✅ **ORM de Django** - Todas las consultas utilizan el ORM (Object-Relational Mapping)
  - ✅ **Sin procedimientos almacenados** - Migrado completamente a consultas ORM
  - ✅ **Migraciones automáticas** - Sistema de migraciones de Django
  - ✅ **Portable** - El archivo `db.sqlite3` contiene toda la base de datos

### Frontend

#### Frameworks y Librerías CSS

- **Bootstrap 4.5.2** - Framework CSS responsive principal
- **Animate.css 4.1.1** - Librería de animaciones CSS predefinidas
- **Font Awesome 5.15.3** - Librería completa de iconos vectoriales
- **CSS3 personalizado** - Estilos customizados en `estilo.css`

#### Fuentes Tipográficas

- **Inter** (300, 400, 500, 600, 700) - Fuente principal del proyecto
- **Poppins** (300, 400, 500, 600, 700) - Fuente secundaria
- ✅ **100% locales** - Descargadas desde Google Fonts y almacenadas en `app_mascotas/static/app_mascotas/fonts/`
- ✅ **Sin CDN** - No hay dependencias externas para fuentes

#### JavaScript y Librerías

- **jQuery 3.6.0** - Librería JavaScript para manipulación del DOM
- **Popper.js 1.16.0** - Dependencia de Bootstrap para tooltips y popovers
- **Bootstrap Bundle 4.5.2** - JavaScript de Bootstrap (incluye Popper)
- **Chart.js 3.9.1** - Librería para gráficos y visualizaciones de datos
- **Moment.js 2.29.4** - Manejo y formateo avanzado de fechas
- **DateRangePicker 3.1.0** - Selector de rangos de fechas
- **SweetAlert2 11.26.3** - Alertas modernas y elegantes

#### Templates

- **Django Templates** - Sistema de plantillas de Django
- **Herencia de templates** - Base template (`base.html`) con bloques reutilizables
- **Template tags** - Uso de `{% static %}`, `{% load %}`, `{% extends %}`, etc.
- **Crispy Forms** - Renderizado de formularios con Bootstrap 4

### Gestión de Dependencias

- **npm** - Gestor de paquetes de Node.js para dependencias frontend
- **pip** - Gestor de paquetes de Python para dependencias backend
- **Node.js 14+** - Entorno de ejecución para scripts de npm

---

## 🏗 Arquitectura del Proyecto

### Patrón MVC (Model-View-Controller)

El proyecto sigue el patrón de arquitectura MVC implementado por Django:

- **Models** (`models.py`) - Definición de la estructura de datos y relaciones
- **Views** (`views.py`) - Lógica de negocio y procesamiento de requests
- **Templates** (`templates/`) - Presentación y estructura HTML
- **URLs** (`urls.py`) - Enrutamiento de URLs a vistas

### Separación de Responsabilidades

```
┌─────────────────────────────────────────┐
│         CLIENTE (Navegador)              │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         URLs (urls.py)                   │
│         - Enrutamiento                   │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         VIEWS (views.py)                 │
│         - Lógica de negocio              │
│         - Procesamiento de datos         │
│         - Consultas ORM                  │
└─────┬───────────────────────┬────────────┘
      │                       │
      ▼                       ▼
┌──────────────┐    ┌──────────────────────┐
│   MODELS     │    │     TEMPLATES         │
│  (models.py) │    │   (templates/)       │
│              │    │   - HTML              │
│  - Propietario│    │   - CSS (static/)    │
│  - Cuidador   │    │   - JS (static/)     │
│  - Servicio   │    │                      │
│  - Mascota    │    │                      │
└──────┬───────┘    └──────────────────────┘
       │
       ▼
┌─────────────────────────────────────────┐
│         SQLite Database                  │
│         (db.sqlite3)                     │
└─────────────────────────────────────────┘
```

---

## 🗄 Base de Datos y ORM

### Sistema de Base de Datos: SQLite3

Este proyecto utiliza **SQLite3** como base de datos, que es la base de datos por defecto de Django. SQLite es una base de datos relacional embebida que no requiere un servidor de base de datos separado.

#### Características de SQLite en este Proyecto

- ✅ **100% funcional** - Todas las funcionalidades del proyecto funcionan perfectamente con SQLite
- ✅ **Sin configuración adicional** - Se crea automáticamente al ejecutar migraciones
- ✅ **Portable** - El archivo `db.sqlite3` contiene toda la base de datos
- ✅ **Ideal para desarrollo** - Perfecto para desarrollo y proyectos pequeños/medianos
- ✅ **ORM de Django** - Todas las consultas utilizan el ORM, no SQL directo

### ORM (Object-Relational Mapping) de Django

El proyecto utiliza **exclusivamente el ORM de Django** para todas las operaciones de base de datos. Esto significa:

#### ✅ Ventajas del ORM

1. **Portabilidad** - El mismo código funciona con SQLite, MySQL, PostgreSQL, etc.
2. **Seguridad** - Protección automática contra inyección SQL
3. **Mantenibilidad** - Código más legible y fácil de mantener
4. **Migraciones automáticas** - Django gestiona los cambios en el esquema
5. **Relaciones automáticas** - Gestión de ForeignKeys, OneToOne, ManyToMany

#### Migración de Procedimientos Almacenados a ORM

**Historia del Proyecto:**
- El proyecto fue inicialmente desarrollado con **MySQL** y utilizaba procedimientos almacenados (`callproc()`)
- Se migró completamente a **SQLite** y se reemplazaron todos los procedimientos almacenados por consultas ORM
- **Razón:** SQLite no soporta procedimientos almacenados, pero el ORM de Django funciona perfectamente con ambas bases de datos

**Ejemplo de Migración:**

```python
# ❌ ANTES (con procedimientos almacenados - solo MySQL/PostgreSQL)
def obtener_mascotas_activas(propietario_id):
    with connection.cursor() as cursor:
        cursor.callproc('ObtenerMascotasActivasConDetalle', [propietario_id])
        mascotas_activas = dictfetchall(cursor)
    return mascotas_activas

# ✅ AHORA (con ORM - funciona con SQLite, MySQL, PostgreSQL, etc.)
def obtener_mascotas_activas(propietario_id):
    mascotas = Mascota.objects.filter(
        propietario_id=propietario_id,
        es_activo=True
    ).select_related('id_raza', 'id_raza__id_especie', 'propietario')
    
    mascotas_activas = []
    for mascota in mascotas:
        mascotas_activas.append({
            'id_mascota': mascota.id_mascota,
            'nombre_mascota': mascota.nombre_mascota,
            # ... más campos
        })
    return mascotas_activas
```

#### Consultas ORM Utilizadas en el Proyecto

El proyecto utiliza las siguientes características del ORM:

- **Filtros básicos**: `Model.objects.filter()`, `Model.objects.get()`, `Model.objects.all()`
- **Relaciones**: `select_related()`, `prefetch_related()` para optimizar consultas
- **Agregaciones**: `annotate()`, `aggregate()` para cálculos
- **Ordenamiento**: `order_by()`, `-field` para orden descendente
- **Paginación**: `Paginator` de Django para dividir resultados
- **Búsqueda**: `Q` objects para consultas complejas con OR/AND

### Modelos de Datos

#### 1. Propietario (Usuario Personalizado)

Modelo que extiende `AbstractUser` de Django, utilizado como modelo de autenticación principal.

**Campos principales:**
- `id` - Identificador único (BigAutoField)
- `username` - Nombre de usuario (único, máximo 150 caracteres)
- `password` - Contraseña hasheada
- `email` - Correo electrónico
- `first_name` - Nombre
- `last_name` - Apellido
- `rut` - RUT del usuario
- `direccion` - Dirección
- `telefono` - Teléfono
- `imagen` - Imagen de perfil
- `es_cuidador` - Boolean que indica si el usuario es cuidador
- `is_active` - Indica si la cuenta está activa
- `date_joined` - Fecha de registro

**Tabla en BD:** `app_mascotas_propietario`

#### 2. Cuidador

Modelo que almacena información adicional de los usuarios que se registran como cuidadores.

**Campos:**
- `id_cuidador` - Identificador único (AutoField, Primary Key)
- `propietario` - Relación OneToOne con Propietario
- `especializacion` - Especialización del cuidador (Perros, Gatos, etc.)
- `experiencia` - Texto con la experiencia del cuidador
- `disponibilidad` - Estado de disponibilidad (Disponible, Ocupado, En un trabajo)

**Relación:**
- Un `Propietario` puede tener un solo `Cuidador` (relación 1:1)

**Tabla en BD:** `app_mascotas_cuidador`

#### 3. Servicio

Modelo que representa los servicios ofrecidos por los cuidadores.

**Campos:**
- `id_servicio` - Identificador único
- `tipo_servicio` - ForeignKey a TipoServicio
- `descripcion` - Descripción del servicio
- `precio` - Precio del servicio
- `es_activo` - Boolean para activar/desactivar
- `cuidador` - ForeignKey a Cuidador

**Tabla en BD:** `app_mascotas_servicio`

#### 4. Mascota

Modelo que representa las mascotas de los propietarios.

**Campos:**
- `id_mascota` - Identificador único
- `nombre_mascota` - Nombre de la mascota
- `peso` - Peso en kilogramos
- `pelaje` - Tipo de pelaje (Corto, Largo, etc.)
- `observaciones` - Observaciones adicionales
- `es_activo` - Boolean para activar/desactivar
- `propietario` - ForeignKey a Propietario
- `id_raza` - ForeignKey a Raza

**Tabla en BD:** `app_mascotas_mascota`

#### 5. DetPrestacion

Modelo que representa las prestaciones (contrataciones) de servicios.

**Campos:**
- `id` - Identificador único
- `fecha_prestacion` - Fecha de la prestación
- `valor_total` - Valor total del servicio
- `estado` - Estado (Pendiente, Activo, Finalizado, Cancelado)
- `id_servicio` - ForeignKey a Servicio
- `id_propietario` - ForeignKey a Propietario
- `id_cuidador` - ForeignKey a Cuidador
- `id_mascota` - ForeignKey a Mascota

**Tabla en BD:** `app_mascotas_detprestacion`

#### 6. Resena

Modelo que representa las reseñas y calificaciones de los cuidadores.

**Campos:**
- `id` - Identificador único
- `cuidador` - ForeignKey a Cuidador
- `autor` - ForeignKey a Propietario (quien escribe la reseña)
- `texto` - Texto de la reseña
- `calificacion` - Calificación (1-5)
- `fecha_creacion` - Fecha de creación
- `fue_editada` - Boolean que indica si fue editada

**Tabla en BD:** `app_mascotas_resena`

#### 7. Mensaje

Modelo que representa los mensajes entre usuarios.

**Campos:**
- `id` - Identificador único
- `user` - ForeignKey a Propietario (usuario que ve el mensaje)
- `sender` - ForeignKey a Propietario (remitente)
- `recipient` - ForeignKey a Propietario (destinatario)
- `body` - Cuerpo del mensaje
- `date` - Fecha del mensaje
- `is_read` - Boolean que indica si fue leído
- `det_prestacion` - ForeignKey a DetPrestacion

**Tabla en BD:** `app_mascotas_mensaje`

### Migraciones

El proyecto utiliza el sistema de migraciones de Django para gestionar cambios en el esquema de la base de datos.

**Comandos de Base de Datos:**

```bash
# Aplicar migraciones
py manage.py migrate

# Crear nuevas migraciones (después de modificar models.py)
py manage.py makemigrations

# Ver el estado de las migraciones
py manage.py showmigrations

# Revertir migraciones (si es necesario)
py manage.py migrate app_mascotas 0001
```

---

## 📦 Gestión de Dependencias

### Backend (Python)

Las dependencias de Python se gestionan mediante `pip` y se instalan desde `requirements.txt`:

```bash
# Instalar dependencias
py -m pip install -r requirements.txt
```

**Dependencias principales:**
- `Django==4.2.9`
- `django-crispy-forms==2.5`
- `crispy-bootstrap4==2025.6`
- `Pillow` (para manejo de imágenes)

### Frontend (Node.js / npm)

Las dependencias frontend se gestionan mediante **npm** y se definen en `package.json`.

#### ¿Por qué npm?

Este proyecto utiliza **npm** para gestionar todas las dependencias frontend (CSS, JavaScript, fuentes) de manera organizada y profesional:

- ✅ **Control de versiones** - Versiones específicas de cada librería
- ✅ **Reproducibilidad** - Mismo entorno en cualquier máquina
- ✅ **Automatización** - Scripts para copiar archivos automáticamente
- ✅ **Mantenibilidad** - Fácil actualización de dependencias
- ✅ **Sin CDN** - Todo funciona offline

#### Instalación de Dependencias Frontend

```bash
# Asegúrate de estar en el directorio raíz del proyecto
# (donde se encuentra package.json)

# Instalar dependencias de npm
npm install

# El script postinstall copiará automáticamente los assets a los directorios estáticos
```

**Scripts disponibles en `package.json`:**

- `npm install` - Instala dependencias y ejecuta automáticamente `postinstall`
- `npm run install-assets` - Copia archivos desde `node_modules` a `static/`
- `npm run download-fonts` - Descarga fuentes de Google Fonts y genera `fonts.css`

#### Proceso Automático

Cuando ejecutas `npm install`, se ejecutan automáticamente estos pasos:

1. **Instalación de paquetes** - Descarga todas las dependencias a `node_modules/`
2. **Copia de assets** - Ejecuta `scripts/copy-assets.js` que copia:
   - Bootstrap CSS/JS a `app_mascotas/static/app_mascotas/css/` y `js/`
   - jQuery a `app_mascotas/static/app_mascotas/js/`
   - Font Awesome a `app_mascotas/static/app_mascotas/css/` y `webfonts/`
   - Chart.js, Moment.js, DateRangePicker, SweetAlert2, etc.
3. **Descarga de fuentes** - Ejecuta `scripts/download-fonts.js` que:
   - Descarga las fuentes Inter y Poppins desde Google Fonts
   - Las guarda en `app_mascotas/static/app_mascotas/fonts/`
   - Genera `app_mascotas/static/app_mascotas/css/fonts.css` con `@font-face`

#### Dependencias Frontend Incluidas

Todas estas librerías se instalan mediante npm y se copian automáticamente:

| Librería | Versión | Ubicación en Static |
|----------|---------|---------------------|
| Bootstrap | 4.5.2 | `css/bootstrap.min.css`, `js/bootstrap.bundle.min.js` |
| jQuery | 3.6.0 | `js/jquery.min.js` |
| Popper.js | 1.16.0 | `js/popper.min.js` |
| Font Awesome | 5.15.3 | `css/fontawesome.min.css`, `webfonts/` |
| Animate.css | 4.1.1 | `css/animate.min.css` |
| Chart.js | 3.9.1 | `js/chart.min.js` |
| Moment.js | 2.29.4 | `js/moment.min.js` |
| DateRangePicker | 3.1.0 | `css/daterangepicker.css`, `js/daterangepicker.js` |
| SweetAlert2 | 11.26.3 | `css/sweetalert2.min.css`, `js/sweetalert2.min.js` |
| Inter (fuente) | - | `fonts/inter-*.ttf` |
| Poppins (fuente) | - | `fonts/poppins-*.ttf` |

**✅ Todo funciona 100% offline** - No hay dependencias de CDN externos.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### Software Requerido

- **Python 3.8+** (recomendado 3.14+)
- **pip** (gestor de paquetes de Python, incluido con Python)
- **Node.js** (versión 14 o superior) - Para gestionar dependencias frontend
- **npm** (incluido con Node.js) - Gestor de paquetes de Node.js
- **Git** (opcional, para control de versiones)

### Verificar Instalación

```bash
# Verificar Python
py --version
# o
python --version

# Verificar pip
py -m pip --version

# Verificar Node.js
node --version

# Verificar npm
npm --version
```

---

## 🚀 Instalación Completa

### 1. Clonar el Repositorio (si aplica)

```bash
git clone <url-del-repositorio>
cd patipaseos_final-main
```

### 2. Navegar al Directorio del Proyecto

```bash
cd "C:\Proyectos WEB\patipaseos_final-main"
```

**⚠️ Importante:** Todos los comandos de Django deben ejecutarse desde esta carpeta (donde se encuentra `manage.py`).

### 3. Crear Entorno Virtual (Recomendado)

```bash
# Crear entorno virtual
py -m venv venv

# Activar entorno virtual (Windows)
venv\Scripts\activate

# Activar entorno virtual (Linux/Mac)
source venv/bin/activate
```

### 4. Instalar Dependencias de Python

```bash
# Instalar desde requirements.txt
py -m pip install -r requirements.txt
```

O instalar manualmente:

```bash
py -m pip install django==4.2.9 django-crispy-forms crispy-bootstrap4 Pillow
```

### 5. Instalar Dependencias Frontend (npm)

```bash
# Asegúrate de estar en el directorio raíz del proyecto
# (donde se encuentra package.json)

# Instalar dependencias de npm
npm install

# El script postinstall copiará automáticamente los assets a los directorios estáticos
# Si necesitas copiar manualmente los assets:
npm run install-assets

# Si necesitas descargar las fuentes manualmente:
npm run download-fonts
```

**Nota:** El comando `npm install` ejecutará automáticamente:
1. `npm run install-assets` - Copia archivos desde `node_modules` a `static/`
2. `npm run download-fonts` - Descarga fuentes y genera `fonts.css`

### 6. Aplicar Migraciones

```bash
# Desde la carpeta raíz del proyecto (donde está manage.py)
py manage.py migrate
```

Este comando creará todas las tablas necesarias en la base de datos SQLite3 (`db.sqlite3`).

### 7. Crear Superusuario (Opcional)

```bash
py manage.py createsuperuser
```

Sigue las instrucciones para crear un usuario administrador que te permitirá acceder al panel de administración de Django.

---

## ⚙️ Configuración

### Variables de Entorno

El proyecto utiliza configuración por defecto de Django. Para producción, considera:

- Cambiar `SECRET_KEY` en `settings.py`
- Configurar `DEBUG = False`
- Agregar `ALLOWED_HOSTS` con tu dominio
- Configurar base de datos de producción (PostgreSQL, MySQL, etc.) si es necesario

### Archivo `settings.py`

Las configuraciones principales se encuentran en `patipaseos/settings.py`:

```python
# Modelo de usuario personalizado
AUTH_USER_MODEL = "app_mascotas.Propietario"

# Base de datos SQLite3
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# Idioma y zona horaria
LANGUAGE_CODE = 'es'
TIME_ZONE = 'UTC'

# Archivos estáticos
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    BASE_DIR / 'app_mascotas' / 'static',
]

# Archivos de medios (imágenes subidas por usuarios)
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
```

### Configuración de Correo Electrónico (Cambio de Contraseña)

Para que el sistema de **recuperación de contraseña** funcione correctamente, es necesario configurar el envío de correos electrónicos a través de Gmail. Sigue estos pasos:

#### 1. Generar una Clave de Aplicación en Gmail

**Paso 1:** Accede a tu cuenta de Google
- Ve a [myaccount.google.com](https://myaccount.google.com)
- Inicia sesión con tu cuenta de Gmail

**Paso 2:** Activar la Verificación en Dos Pasos
- Ve a **Seguridad** → **Verificación en dos pasos**
- Activa la verificación en dos pasos si no está activada (es obligatorio para generar claves de aplicación)

**Paso 3:** Generar la Clave de Aplicación
1. Ve a **Seguridad** → **Contraseñas de aplicaciones**
   - O accede directamente: [Contraseñas de aplicaciones](https://myaccount.google.com/apppasswords)
2. En "Seleccionar app", elige **Correo**
3. En "Seleccionar dispositivo", elige **Otro (nombre personalizado)**
4. Escribe un nombre descriptivo (ej: "PatiPaseos Django")
5. Haz clic en **Generar**
6. **Copia la contraseña de 16 caracteres** que aparece (sin espacios)
   - Ejemplo: `wgnhyrfhrsowqple`
   - ⚠️ **Importante:** Esta contraseña solo se muestra una vez, guárdala de forma segura

#### 2. Modificar la Configuración en `settings.py`

Abre el archivo `patipaseos/settings.py` y localiza la sección de configuración de email:

```python
# Configuración de Email - SMTP Gmail
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'tu_correo@gmail.com'  # ⬅️ CAMBIA ESTO por tu correo de Gmail
EMAIL_HOST_PASSWORD = 'tu_clave_de_aplicacion'  # ⬅️ CAMBIA ESTO por tu clave de aplicación
```

**Modifica los siguientes valores:**

1. **`EMAIL_HOST_USER`**: Reemplaza `'tu_correo@gmail.com'` con tu dirección de correo de Gmail
2. **`EMAIL_HOST_PASSWORD`**: Reemplaza `'tu_clave_de_aplicacion'` con la clave de aplicación de 16 caracteres que generaste (sin espacios)

#### 3. Verificar la Configuración

Después de modificar `settings.py`:

1. **Reinicia el servidor de Django**:
   ```bash
   # Detén el servidor (Ctrl + C) y vuelve a iniciarlo
   py manage.py runserver
   ```

2. **Prueba el sistema de recuperación de contraseña**:
   - Ve a `http://127.0.0.1:8000/reset_password/`
   - Ingresa un correo electrónico válido registrado en el sistema
   - Verifica que recibas el correo con las instrucciones

#### ⚠️ Notas Importantes

- **Seguridad**: Nunca subas tu `settings.py` con la clave de aplicación a repositorios públicos. Usa variables de entorno en producción.
- **Clave de Aplicación vs Contraseña**: No uses tu contraseña normal de Gmail, siempre usa una clave de aplicación.
- **Si no funciona**: Verifica que:
  - La verificación en dos pasos esté activada
  - La clave de aplicación sea correcta (sin espacios)
  - El correo electrónico en `EMAIL_HOST_USER` sea el mismo que usaste para generar la clave

#### Configuración para Desarrollo (Opcional)

Si solo quieres probar sin enviar correos reales, puedes usar el backend de consola:

```python
# Para desarrollo - Los correos se muestran en la consola
EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
```

---

## 📁 Estructura del Proyecto

```
patipaseos_final-main/
│
├── manage.py                          # Script de administración de Django
├── db.sqlite3                         # Base de datos SQLite (se crea automáticamente)
├── requirements.txt                   # Dependencias de Python
├── package.json                       # Dependencias de Node.js/npm
├── package-lock.json                  # Lock file de npm
│
├── patipaseos/                        # Configuración del proyecto Django
│   ├── __init__.py
│   ├── settings.py                   # Configuración principal
│   ├── urls.py                        # URLs principales del proyecto
│   ├── wsgi.py                        # Configuración WSGI para producción
│   └── asgi.py                        # Configuración ASGI para producción
│
├── app_mascotas/                      # Aplicación principal
│   ├── __init__.py
│   ├── admin.py                       # Configuración del panel de administración
│   ├── apps.py                        # Configuración de la aplicación
│   ├── models.py                      # Modelos de base de datos (ORM)
│   ├── views.py                       # Vistas (lógica de negocio)
│   ├── forms.py                       # Formularios
│   ├── urls.py                        # URLs de la aplicación
│   ├── tests.py                       # Pruebas unitarias
│   │
│   ├── migrations/                    # Migraciones de base de datos
│   │   ├── __init__.py
│   │   └── 0001_initial.py           # Migración inicial
│   │
│   ├── templates/                     # Plantillas HTML
│   │   ├── app_mascotas/
│   │   │   ├── base.html             # Plantilla base (herencia)
│   │   │   ├── index.html            # Página principal
│   │   │   ├── perfil.html           # Página de perfil de usuario
│   │   │   ├── perfil_servicio.html  # Perfil de servicio del cuidador
│   │   │   ├── cuidador.html         # Formulario de registro como cuidador
│   │   │   ├── servicio.html         # Formulario de publicación de servicio
│   │   │   ├── detalle_prestacion.html # Detalle de prestación
│   │   │   ├── prestacion.html        # Lista de prestaciones (cliente)
│   │   │   ├── prestacion_cuidador.html # Lista de prestaciones (cuidador)
│   │   │   ├── inbox.html            # Bandeja de entrada de mensajes
│   │   │   ├── conversation.html     # Conversación entre usuarios
│   │   │   └── ... (más templates)
│   │   └── registration/
│   │       ├── registro.html         # Formulario de registro
│   │       ├── login_custom.html     # Formulario de inicio de sesión
│   │       └── ... (templates de recuperación de contraseña)
│   │
│   └── static/                        # Archivos estáticos
│       └── app_mascotas/
│           ├── css/                   # Hojas de estilo
│           │   ├── bootstrap.min.css  # Bootstrap 4.5.2
│           │   ├── fontawesome.min.css # Font Awesome 5.15.3
│           │   ├── animate.min.css    # Animate.css 4.1.1
│           │   ├── daterangepicker.css # DateRangePicker
│           │   ├── sweetalert2.min.css # SweetAlert2
│           │   ├── fonts.css          # Fuentes locales (Inter, Poppins)
│           │   └── estilo.css         # Estilos personalizados del proyecto
│           │
│           ├── js/                     # Archivos JavaScript
│           │   ├── jquery.min.js       # jQuery 3.6.0
│           │   ├── popper.min.js      # Popper.js 1.16.0
│           │   ├── bootstrap.bundle.min.js # Bootstrap JS
│           │   ├── chart.min.js       # Chart.js 3.9.1
│           │   ├── moment.min.js      # Moment.js 2.29.4
│           │   ├── daterangepicker.js # DateRangePicker
│           │   ├── sweetalert2.min.js # SweetAlert2
│           │   └── init.js            # JavaScript personalizado
│           │
│           ├── fonts/                  # Fuentes tipográficas locales
│           │   ├── inter-300.ttf      # Inter Light
│           │   ├── inter-400.ttf      # Inter Regular
│           │   ├── inter-500.ttf      # Inter Medium
│           │   ├── inter-600.ttf      # Inter SemiBold
│           │   ├── inter-700.ttf      # Inter Bold
│           │   ├── poppins-300.ttf    # Poppins Light
│           │   ├── poppins-400.ttf    # Poppins Regular
│           │   ├── poppins-500.ttf    # Poppins Medium
│           │   ├── poppins-600.ttf    # Poppins SemiBold
│           │   └── poppins-700.ttf    # Poppins Bold
│           │
│           ├── webfonts/               # Fuentes de Font Awesome
│           │   ├── fa-brands-400.*    # Iconos de marcas
│           │   ├── fa-regular-400.*   # Iconos regulares
│           │   └── fa-solid-900.*    # Iconos sólidos
│           │
│           └── img/                    # Imágenes del proyecto
│               ├── patipaseospng.png  # Logo
│               ├── no_avatar.jpg       # Avatar por defecto
│               ├── no_pet.png         # Imagen por defecto de mascota
│               └── ... (más imágenes)
│
├── scripts/                            # Scripts de Node.js para automatización
│   ├── copy-assets.js                 # Copia assets desde node_modules a static/
│   └── download-fonts.js             # Descarga fuentes de Google Fonts
│
├── media/                              # Archivos subidos por usuarios (se crea automáticamente)
│   └── imgprod/                       # Imágenes de productos/perfiles
│
├── node_modules/                       # Dependencias de npm (no se sube a git)
└── venv/                               # Entorno virtual de Python (no se sube a git)
```

---

## 💻 Uso y Desarrollo

### Ejecutar el Servidor de Desarrollo

```bash
# Desde la carpeta raíz del proyecto (donde está manage.py)
py manage.py runserver
```

El servidor se iniciará en `http://127.0.0.1:8000/` por defecto.

### Acceder a la Aplicación

Abre tu navegador y navega a:

```
http://127.0.0.1:8000/
```

### Acceder al Panel de Administración

```
http://127.0.0.1:8000/admin/
```

Utiliza las credenciales del superusuario creado con `createsuperuser`.

### Flujo de Usuario

1. **Página Principal** (`/`) - Vista general del sitio con servicios disponibles
2. **Registro** (`/registro/`) - Crear nueva cuenta como propietario
3. **Inicio de Sesión** (`/login_custom/`) - Autenticarse en el sistema
4. **Registro como Cuidador** (`/cuidador/`) - Convertirse en cuidador (requiere autenticación)
5. **Perfil** (`/perfil/`) - Ver y gestionar información del perfil (requiere autenticación)
6. **Publicar Servicio** (`/servicio/`) - Publicar un servicio como cuidador
7. **Ver Detalles de Servicio** (`/perfil_servicio/<username>/`) - Ver perfil y servicios de un cuidador
8. **Solicitar Servicio** (`/detalle_prestacion/<id_servicio>/`) - Solicitar un servicio
9. **Mensajería** (`/inbox/`) - Ver y enviar mensajes
10. **Cerrar Sesión** (`/logout_custom/`) - Finalizar sesión de usuario

### Comandos de Desarrollo

```bash
# Crear nuevas migraciones (después de modificar models.py)
py manage.py makemigrations
py manage.py migrate

# Ejecutar pruebas
py manage.py test

# Recopilar archivos estáticos (producción)
py manage.py collectstatic

# Shell de Django (para interactuar con la base de datos)
py manage.py shell
```

### Ejemplo de Uso del Shell

```python
from app_mascotas.models import Propietario, Cuidador, Servicio, Mascota

# Listar todos los usuarios
Propietario.objects.all()

# Crear un usuario
usuario = Propietario.objects.create_user(
    username='testuser',
    email='test@example.com',
    password='testpass123'
)

# Obtener servicios activos
Servicio.objects.filter(es_activo=True)

# Obtener mascotas de un propietario
Mascota.objects.filter(propietario=usuario, es_activo=True)
```

---

## 🎨 Sistema de Archivos Estáticos

### Organización de Archivos Estáticos

Los archivos estáticos se organizan en `app_mascotas/static/app_mascotas/` y se sirven mediante el sistema de archivos estáticos de Django.

#### CSS (Hojas de Estilo)

**Ubicación:** `app_mascotas/static/app_mascotas/css/`

- **`bootstrap.min.css`** - Framework CSS principal (Bootstrap 4.5.2)
- **`fontawesome.min.css`** - Iconos vectoriales (Font Awesome 5.15.3)
- **`animate.min.css`** - Animaciones CSS (Animate.css 4.1.1)
- **`daterangepicker.css`** - Estilos para selector de fechas
- **`sweetalert2.min.css`** - Estilos para alertas modernas
- **`fonts.css`** - Definiciones `@font-face` para fuentes locales (Inter, Poppins)
- **`estilo.css`** - ⭐ **Estilos personalizados del proyecto** (colores, layout, componentes)

#### JavaScript

**Ubicación:** `app_mascotas/static/app_mascotas/js/`

- **`jquery.min.js`** - Librería JavaScript (jQuery 3.6.0)
- **`popper.min.js`** - Dependencia de Bootstrap (Popper.js 1.16.0)
- **`bootstrap.bundle.min.js`** - JavaScript de Bootstrap (incluye Popper)
- **`chart.min.js`** - Gráficos y visualizaciones (Chart.js 3.9.1)
- **`moment.min.js`** - Manejo de fechas (Moment.js 2.29.4)
- **`daterangepicker.js`** - Selector de rangos de fechas
- **`sweetalert2.min.js`** - Alertas modernas
- **`init.js`** - ⭐ **JavaScript personalizado del proyecto**

#### Fuentes Tipográficas

**Ubicación:** `app_mascotas/static/app_mascotas/fonts/`

- **Inter** (5 variantes: 300, 400, 500, 600, 700)
- **Poppins** (5 variantes: 300, 400, 500, 600, 700)

Todas las fuentes se descargan automáticamente desde Google Fonts mediante el script `download-fonts.js` y se almacenan localmente.

**Archivo de configuración:** `app_mascotas/static/app_mascotas/css/fonts.css` contiene las definiciones `@font-face`:

```css
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('../fonts/inter-400.ttf') format('truetype');
}
```

#### Fuentes de Iconos (Font Awesome)

**Ubicación:** `app_mascotas/static/app_mascotas/webfonts/`

- **`fa-brands-400.*`** - Iconos de marcas (Facebook, Instagram, etc.)
- **`fa-regular-400.*`** - Iconos regulares
- **`fa-solid-900.*`** - Iconos sólidos

#### Imágenes

**Ubicación:** `app_mascotas/static/app_mascotas/img/`

- Imágenes estáticas del proyecto (logos, imágenes por defecto, etc.)

### Carga de Archivos Estáticos en Templates

En los templates de Django, los archivos estáticos se cargan usando el tag `{% static %}`:

```django
{% load static %}

<!-- CSS -->
<link rel="stylesheet" href="{% static 'app_mascotas/css/bootstrap.min.css' %}">
<link rel="stylesheet" href="{% static 'app_mascotas/css/estilo.css' %}">

<!-- JavaScript -->
<script src="{% static 'app_mascotas/js/jquery.min.js' %}"></script>
<script src="{% static 'app_mascotas/js/bootstrap.bundle.min.js' %}"></script>

<!-- Imágenes -->
<img src="{% static 'app_mascotas/img/logo.png' %}" alt="Logo">
```

### Archivos de Medios (Uploads de Usuarios)

Los archivos subidos por los usuarios (imágenes de perfil, mascotas, etc.) se almacenan en:

**Ubicación:** `media/imgprod/`

Estos archivos se sirven mediante la configuración `MEDIA_URL` y `MEDIA_ROOT` en `settings.py`.

---

## 🎭 Templates y Frontend

### Sistema de Templates de Django

El proyecto utiliza el sistema de templates de Django con herencia de plantillas.

#### Estructura de Templates

```
templates/
├── app_mascotas/
│   ├── base.html              # ⭐ Plantilla base (herencia)
│   ├── index.html            # Página principal
│   ├── perfil.html           # Perfil de usuario
│   └── ... (más templates)
└── registration/
    ├── registro.html         # Registro
    ├── login_custom.html     # Login
    └── ... (templates de recuperación de contraseña)
```

#### Herencia de Templates

**`base.html`** es la plantilla base que contiene:

- Estructura HTML básica (`<html>`, `<head>`, `<body>`)
- Carga de todos los archivos CSS y JavaScript
- Navbar (barra de navegación)
- Footer (pie de página)
- Bloques reutilizables: `{% block content %}`, `{% block extra_css %}`, etc.

**Ejemplo de herencia:**

```django
<!-- index.html -->
{% extends 'app_mascotas/base.html' %}
{% load static %}

{% block content %}
    <h1>Página Principal</h1>
    <!-- Contenido específico de la página -->
{% endblock %}
```

#### Template Tags Utilizados

- **`{% load static %}`** - Carga el sistema de archivos estáticos
- **`{% static 'path' %}`** - Genera la URL de un archivo estático
- **`{% extends 'template.html' %}`** - Hereda de otra plantilla
- **`{% block name %}`** - Define un bloque reutilizable
- **`{% url 'name' %}`** - Genera URLs basadas en nombres
- **`{% if %}`, `{% for %}`, etc.** - Lógica de templates

### CSS Personalizado

El archivo **`estilo.css`** contiene todos los estilos personalizados del proyecto:

#### Organización del CSS

1. **Variables CSS** - Colores, espaciado, bordes, transiciones
2. **Reset y estilos base** - Normalización
3. **Header/Navbar** - Estilos de la barra de navegación
4. **Contenido principal** - Layout y estructura
5. **Carrusel** - Estilos del carrusel de imágenes
6. **Tarjetas y componentes** - Cards, botones, formularios
7. **Footer** - Estilos del pie de página
8. **Utilidades** - Clases auxiliares

#### Fuentes Utilizadas

- **Inter** - Fuente principal (títulos, texto general)
- **Poppins** - Fuente secundaria (énfasis, botones)

Ambas fuentes se cargan desde archivos locales mediante `fonts.css`.

### JavaScript Personalizado

El archivo **`init.js`** contiene el JavaScript personalizado del proyecto. Se carga después de todas las librerías (jQuery, Bootstrap, etc.).

---

## 🔌 API y Endpoints

### URLs Principales

| Endpoint | Método | Descripción | Autenticación |
|----------|--------|-------------|---------------|
| `/` | GET | Página principal con servicios | No requerida |
| `/registro/` | GET, POST | Registro de nuevos usuarios | No requerida |
| `/login_custom/` | GET, POST | Inicio de sesión | No requerida |
| `/logout_custom/` | GET | Cerrar sesión | Requerida |
| `/cuidador/` | GET, POST | Registro como cuidador | Requerida |
| `/perfil/` | GET | Ver perfil de usuario | Requerida |
| `/servicio/` | GET, POST | Publicar servicio (cuidador) | Requerida |
| `/perfil_servicio/<username>/` | GET | Ver perfil de servicio del cuidador | No requerida |
| `/detalle_prestacion/<id>/` | GET, POST | Solicitar servicio | Requerida |
| `/prestacion/` | GET | Lista de prestaciones (cliente) | Requerida |
| `/prestacion_cuidador/` | GET, POST | Lista de prestaciones (cuidador) | Requerida |
| `/inbox/` | GET | Bandeja de entrada | Requerida |
| `/conversation/<username>/<det_prestacion>/` | GET | Conversación | Requerida |
| `/admin/` | GET, POST | Panel de administración | Requerida (superusuario) |

### Vistas (Views)

Las vistas principales se encuentran en `app_mascotas/views.py`:

- `index()` - Renderiza la página principal con servicios
- `registro()` - Maneja el registro de usuarios
- `login_custom()` - Maneja la autenticación
- `logout_custom()` - Maneja el cierre de sesión
- `cuidador()` - Maneja el registro como cuidador
- `perfil()` - Muestra el perfil del usuario
- `servicio()` - Publicación de servicios
- `perfil_servicio()` - Perfil de servicio del cuidador
- `detalle_prestacion()` - Solicitud de servicios
- `prestacion()` - Lista de prestaciones (cliente)
- `prestacion_cuidador()` - Lista de prestaciones (cuidador)
- `inbox()` - Bandeja de entrada de mensajes
- `conversation()` - Conversación entre usuarios

Todas las vistas utilizan el **ORM de Django** para consultar la base de datos.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Seguir las convenciones de estilo **PEP 8** para Python
- Comentar código complejo
- Escribir pruebas para nuevas funcionalidades
- Mantener la documentación actualizada
- Usar el **ORM de Django** en lugar de SQL directo
- Mantener los archivos estáticos organizados

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👥 Desarrolladores

Este proyecto fue desarrollado como trabajo académico para **DUOC UC Sede Concepción**.

### Equipo de Desarrollo

- **Gustavo Martinez Bravo** - Desarrollador Backend
  - Responsable del desarrollo del servidor, lógica de negocio, modelos de base de datos, vistas y API
  - Migración de procedimientos almacenados a ORM de Django
  
- **Cedric Lavin** - Desarrollador Frontend
  - Responsable del diseño de interfaz, estilos CSS, implementación de componentes visuales y experiencia de usuario
  - Implementación del sistema de archivos estáticos locales con npm

### Información del Proyecto

- **Institución**: DUOC UC Sede Concepción
- **Tipo**: Proyecto Académico
- **Año**: 2024-2025

Desarrollado con ❤️ para conectar propietarios y cuidadores de mascotas.

---

## 📞 Soporte

Para preguntas o soporte, por favor abre un issue en el repositorio del proyecto.

---

## 🎯 Roadmap

Funcionalidades futuras planeadas:

- [ ] Sistema de búsqueda avanzada de cuidadores
- [ ] Sistema de notificaciones en tiempo real
- [ ] Integración con mapas para ubicación
- [ ] Sistema de pagos integrado
- [ ] Aplicación móvil
- [ ] Dashboard de estadísticas para cuidadores
- [ ] Sistema de certificaciones para cuidadores

---

## 📝 Notas Técnicas Importantes

### SQLite y ORM

- ✅ **Este proyecto funciona 100% con SQLite** - No requiere MySQL, PostgreSQL u otra base de datos
- ✅ **Todas las consultas utilizan el ORM de Django** - No hay SQL directo ni procedimientos almacenados
- ✅ **Portable** - El mismo código funciona con cualquier base de datos soportada por Django
- ✅ **Migraciones automáticas** - Django gestiona todos los cambios en el esquema

### npm y Dependencias Frontend

- ✅ **Todas las dependencias frontend se gestionan con npm** - Control de versiones y reproducibilidad
- ✅ **100% offline** - No hay dependencias de CDN externos
- ✅ **Automatización** - Scripts de npm copian archivos automáticamente
- ✅ **Fuentes locales** - Google Fonts descargadas y almacenadas localmente

### Templates y Estáticos

- ✅ **Sistema de herencia de templates** - `base.html` como plantilla base
- ✅ **Archivos estáticos organizados** - CSS, JS, fuentes, imágenes en directorios separados
- ✅ **Template tags de Django** - `{% static %}`, `{% load %}`, `{% extends %}`, etc.

---

**Última actualización:** Noviembre 2025

**Versión del Proyecto:** 1.0.0
