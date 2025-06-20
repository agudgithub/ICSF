# CI/CD con GitHub Actions

Este proyecto utiliza **GitHub Actions** para la integración continua (CI) y la ejecución automática de pruebas.

## ¿Cómo funciona?

Cada vez que se realiza un **push** o se crea un **pull request** en la rama `master`, se ejecuta automáticamente el workflow definido en `.github/workflows/ci.yml`.

### El workflow realiza los siguientes pasos:
1. Descarga el código del repositorio.
2. Instala las dependencias de Node.js.
3. Ejecuta los tests definidos en el proyecto.

## Archivo de configuración

El archivo principal del workflow es:
```
.github/workflows/ci.yml
```

## ¿Dónde ver los resultados?

Puedes ver el historial y los resultados de las ejecuciones en la pestaña **Actions** de tu repositorio en GitHub.

---

**Ejemplo de ejecución exitosa:**
- Todos los tests pasan y el build es exitoso.

**Ejemplo de ejecución fallida:**
- Algún test falla o hay un error en la instalación/build.

---

Para más información sobre GitHub Actions, visita: [https://docs.github.com/en/actions](https://docs.github.com/en/actions)
