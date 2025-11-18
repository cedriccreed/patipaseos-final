# 🐾 PatiPaseos

> Plataforma web para conectar propietarios de mascotas con cuidadores profesionales

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Base de Datos](#-base-de-datos)
- [Uso](#-uso)
- [API y Endpoints](#-api-y-endpoints)
- [Desarrollo](#-desarrollo)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

---

## 🎯 Descripción

**PatiPaseos** es una aplicación web desarrollada en Django que facilita la conexión entre propietarios de mascotas y cuidadores profesionales. La plataforma permite a los usuarios registrarse como propietarios de mascotas o como cuidadores, ofreciendo un sistema de gestión de perfiles y roles diferenciados.

### Propósito del Proyecto

El proyecto está diseñado para resolver la necesidad de encontrar cuidadores confiables para mascotas, proporcionando:

- **Sistema de autenticación personalizado** con modelo de usuario extendido
- **Gestión de roles** (Propietario/Cuidador)
- **Perfiles de usuario** con información detallada
- **Interfaz moderna y responsive** con Bootstrap 4
- **Base de datos local** con SQLite3 para desarrollo

---

## Características

- ✅ **Registro de usuarios** con validación de formularios
- ✅ **Sistema de login/logout** personalizado
- ✅ **Registro como cuidador** con especialización
- ✅ **Perfil de usuario** con información completa
- ✅ **Interfaz responsive** con Bootstrap 4
- ✅ **Panel de administración** de Django
- ✅ **Sistema de sesiones** y autenticación segura
- ✅ **Formularios estilizados** con django-crispy-forms

---

## 🛠 Tecnologías Utilizadas

### Backend
- **Django 4.2.9** - Framework web de alto nivel para Python
- **Python 3.14+** - Lenguaje de programación

### Base de Datos
- **SQLite3** - Base de datos relacional embebida (desarrollo)

### Frontend
- **HTML5** - Estructura de páginas
- **CSS3** - Estilos personalizados
- **Bootstrap 4.5.2** - Framework CSS responsive
- **JavaScript (ES6+)** - Interactividad
- **jQuery 3.6.0** - Librería JavaScript

### Librerías y Frameworks Adicionales
- **django-crispy-forms 2.5** - Formularios estilizados
- **crispy-bootstrap4 2025.6** - Templates Bootstrap para crispy-forms
- **Font Awesome 5.15.3** - Iconografía
- **Animate.css 4.1.1** - Animaciones CSS
- **SweetAlert2** - Alertas modernas
- **Chart.js** - Gráficos (incluido en templates)
- **Moment.js** - Manejo y formateo de fechas
- **DateRangePicker** - Selector de rangos de fechas
- **Popper.js 1.16.0** - Dependencia de Bootstrap para tooltips y popovers

### Gestión de Dependencias Frontend

Este proyecto utiliza **CDN (Content Delivery Network)** para cargar las librerías frontend. Todas las dependencias JavaScript y CSS se cargan directamente desde CDN mediante enlaces en los templates HTML.

**Ventajas de usar CDN:**
- ✅ No requiere instalación de Node.js o npm
- ✅ Fácil de implementar (solo agregar enlaces en HTML)
- ✅ No ocupa espacio en el repositorio
- ✅ Ideal para proyectos Django tradicionales
- ✅ Cache del navegador mejora la velocidad de carga

Las librerías se cargan desde:
- **Bootstrap**: maxcdn.bootstrapcdn.com
- **jQuery**: code.jquery.com
- **Font Awesome**: cdnjs.cloudflare.com
- **Animate.css**: cdnjs.cloudflare.com
- **SweetAlert2**: cdn.jsdelivr.net
- **Chart.js**: cdn.jsdelivr.net
- **Moment.js**: cdn.jsdelivr.net
- **DateRangePicker**: cdn.jsdelivr.net

### Herramientas de Desarrollo
- **Django Admin** - Panel de administración
- **Django Migrations** - Sistema de migraciones de base de datos

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Python 3.8+** (recomendado 3.14+)
- **pip** (gestor de paquetes de Python)
- **Git** (opcional, para control de versiones)

### Verificar Instalación

```bash
# Verificar Python
py --version
# o
python --version

# Verificar pip
py -m pip --version
```

---

## 🚀 Instalación

### 1. Clonar el Repositorio (si aplica)

```bash
git clone <url-del-repositorio>
cd patipaseos
```

### 2. Navegar al Directorio del Proyecto

```bash
cd "C:\Proyectos WEB\patipaseos\patipaseos"
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

### 4. Instalar Dependencias

```bash
py -m pip install django==4.2.9 django-crispy-forms crispy-bootstrap4
```

O si prefieres usar un archivo `requirements.txt`:

```bash
# Crear requirements.txt (si no existe)
py -m pip freeze > requirements.txt

# Instalar desde requirements.txt
py -m pip install -r requirements.txt
```

### 5. Aplicar Migraciones

```bash
py manage.py migrate
```

Este comando creará todas las tablas necesarias en la base de datos SQLite3.

### 6. Crear Superusuario (Opcional)

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
- Configurar base de datos de producción (PostgreSQL, MySQL, etc.)

### Archivo `settings.py`

Las configuraciones principales se encuentran en `patipaseos/patipaseos/settings.py`:

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
```

---

## 📁 Estructura del Proyecto

```
patipaseos/
│
├── manage.py                          # Script de administración de Django
├── db.sqlite3                         # Base de datos SQLite (se crea automáticamente)
│
├── patipaseos/                        # Configuración del proyecto Django
│   ├── __init__.py
│   ├── settings.py                   # Configuración principal
│   ├── urls.py                        # URLs principales del proyecto
│   ├── wsgi.py                        # Configuración WSGI para producción
│   └── asgi.py                        # Configuración ASGI para producción
│
└── app_mascotas/                      # Aplicación principal
    ├── __init__.py
    ├── admin.py                       # Configuración del panel de administración
    ├── apps.py                        # Configuración de la aplicación
    ├── models.py                      # Modelos de base de datos
    ├── views.py                       # Vistas (lógica de negocio)
    ├── forms.py                       # Formularios
    ├── urls.py                        # URLs de la aplicación
    ├── tests.py                       # Pruebas unitarias
    │
    ├── migrations/                    # Migraciones de base de datos
    │   ├── __init__.py
    │   ├── 0001_initial.py           # Migración inicial (tabla Propietario)
    │   └── 0002_cuidador.py          # Migración de tabla Cuidador
    │
    ├── templates/                     # Plantillas HTML
    │   ├── app_mascotas/
    │   │   ├── base.html             # Plantilla base
    │   │   ├── index.html            # Página principal
    │   │   ├── cuidador.html         # Formulario de registro como cuidador
    │   │   └── perfil.html           # Página de perfil de usuario
    │   └── registration/
    │       ├── registro.html         # Formulario de registro
    │       └── login_custom.html     # Formulario de inicio de sesión
    │
    └── static/                        # Archivos estáticos
        ├── app_mascotas/
        │   └── css/
        │       └── estilo.css        # Estilos personalizados
        └── images/                   # Imágenes del proyecto
            ├── patipaseospng.png
            ├── doberman.jpg
            ├── perri.jpg
            └── perro2.jpg
```

---

## 🗄 Base de Datos

### Sistema de Base de Datos

El proyecto utiliza **SQLite3**, una base de datos relacional embebida que no requiere un servidor de base de datos separado. El archivo `db.sqlite3` se crea automáticamente al ejecutar las migraciones.

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
- `es_cuidador` - Boolean que indica si el usuario es cuidador
- `is_active` - Indica si la cuenta está activa
- `date_joined` - Fecha de registro
- Campos adicionales heredados de `AbstractUser`

**Tabla en BD:** `app_mascotas_propietario`

#### 2. Cuidador

Modelo que almacena información adicional de los usuarios que se registran como cuidadores.

**Campos:**
- `id_cuidador` - Identificador único (AutoField, Primary Key)
- `propietario` - Relación OneToOne con Propietario (ForeignKey)
- `especializacion` - Campo de texto con la especialización del cuidador (CharField, max 50 caracteres)

**Relación:**
- Un `Propietario` puede tener un solo `Cuidador` (relación 1:1)
- Cuando un usuario se registra como cuidador, se actualiza `es_cuidador = True` en su perfil

**Tabla en BD:** `app_mascotas_cuidador`

### Migraciones

El proyecto incluye dos migraciones principales:

1. **0001_initial.py** - Crea la tabla `Propietario` con todos los campos del modelo de usuario personalizado
2. **0002_cuidador.py** - Crea la tabla `Cuidador` con la relación al modelo `Propietario`

### Comandos de Base de Datos

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

## 💻 Uso

### Ejecutar el Servidor de Desarrollo

```bash
# Desde la carpeta patipaseos/patipaseos/
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

1. **Página Principal** (`/`) - Vista general del sitio con carrusel y características
2. **Registro** (`/registro/`) - Crear nueva cuenta como propietario
3. **Inicio de Sesión** (`/login_custom/`) - Autenticarse en el sistema
4. **Registro como Cuidador** (`/cuidador/`) - Convertirse en cuidador (requiere autenticación)
5. **Perfil** (`/perfil/`) - Ver y gestionar información del perfil (requiere autenticación)
6. **Cerrar Sesión** (`/logout_custom/`) - Finalizar sesión de usuario

---

## 🔌 API y Endpoints

### URLs Principales

| Endpoint | Método | Descripción | Autenticación |
|----------|--------|-------------|---------------|
| `/` | GET | Página principal | No requerida |
| `/registro/` | GET, POST | Registro de nuevos usuarios | No requerida |
| `/login_custom/` | GET, POST | Inicio de sesión | No requerida |
| `/logout_custom/` | GET | Cerrar sesión | Requerida |
| `/cuidador/` | GET, POST | Registro como cuidador | Requerida |
| `/perfil/` | GET | Ver perfil de usuario | Requerida |
| `/admin/` | GET, POST | Panel de administración | Requerida (superusuario) |

### Vistas (Views)

- `index()` - Renderiza la página principal
- `registro()` - Maneja el registro de usuarios
- `login_custom()` - Maneja la autenticación
- `logout_custom()` - Maneja el cierre de sesión
- `cuidador()` - Maneja el registro como cuidador (decorador `@login_required`)
- `perfil()` - Muestra el perfil del usuario (decorador `@login_required`)

---

## 🔧 Desarrollo

### Crear Nuevas Migraciones

Si modificas los modelos en `models.py`:

```bash
py manage.py makemigrations
py manage.py migrate
```

### Ejecutar Pruebas

```bash
py manage.py test
```

### Recopilar Archivos Estáticos (Producción)

```bash
py manage.py collectstatic
```

### Shell de Django

Para interactuar con la base de datos desde Python:

```bash
py manage.py shell
```

Ejemplo de uso:

```python
from app_mascotas.models import Propietario, Cuidador

# Listar todos los usuarios
Propietario.objects.all()

# Crear un usuario
usuario = Propietario.objects.create_user(
    username='testuser',
    email='test@example.com',
    password='testpass123'
)
```

---

## 📝 Notas de Desarrollo

### Modelo de Usuario Personalizado

El proyecto utiliza un modelo de usuario personalizado (`Propietario`) que extiende `AbstractUser`. Esto permite agregar campos adicionales como `es_cuidador` sin modificar el sistema de autenticación de Django.

### Sistema de Autenticación

- Utiliza el sistema de autenticación estándar de Django
- Las contraseñas se almacenan hasheadas (PBKDF2)
- Implementa sesiones para mantener al usuario autenticado

### Formularios

Los formularios utilizan `django-crispy-forms` con el template pack `bootstrap4` para un diseño consistente y moderno.

### Archivos Estáticos

Los archivos estáticos (CSS, imágenes, JavaScript) se encuentran en `app_mascotas/static/` y se sirven automáticamente en modo desarrollo cuando `DEBUG = True`.

---

## 🤝 Contribución

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Estándares de Código

- Seguir las convenciones de estilo PEP 8 para Python
- Comentar código complejo
- Escribir pruebas para nuevas funcionalidades
- Mantener la documentación actualizada

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👥 Desarrolladores

Este proyecto fue desarrollado como trabajo académico para **DUOC UC Sede Concepción**.

### Equipo de Desarrollo

- **Gustavo Martinez Bravo** - Desarrollador Backend
  - Responsable del desarrollo del servidor, lógica de negocio, modelos de base de datos, vistas y API
  
- **Cedric Lavin** - Desarrollador Frontend
  - Responsable del diseño de interfaz, estilos CSS, implementación de componentes visuales y experiencia de usuario

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

- [ ] Sistema de búsqueda de cuidadores
- [ ] Sistema de calificaciones y reseñas
- [ ] Chat en tiempo real entre usuarios
- [ ] Sistema de pagos integrado
- [ ] Aplicación móvil
- [ ] Integración con mapas para ubicación
- [ ] Sistema de notificaciones

---

**Última actualización:** 2025

