npm run build

cd dist

# navega previamente hasta el directorio de salida de tus archivos para producción:
git init
git add -A
git commit -m 'deploy'

# si tu proyecto va como mi-usuario.github.io, habilita esta línea
git push -f git@github.com:alejoquintana/alejoquintana.github.io.git master

cd -