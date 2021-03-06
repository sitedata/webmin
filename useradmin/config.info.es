line0=Comandos Antes y Después,11
pre_command=Comando a ejecutar antes de realizar cambios,0
post_command=Comando a ejecutar tras realizar cambios,0
line1=Opciones de directorio inicial,11
homedir_perms=Permisos de los nuevos directorios iniciales,0
user_files=Copiar archivos a nuevos directorios iniciales desde,9,40,3
home_base=Base de directorio inicial automática,3,Sin poner
real_base=Directorio de inicio real,3,El mismo que arriba
home_style=Estilo de directorio inicial automático,4,0-home/nombre_de_usuario,1-home/u/nombre_de_usuario,2-home/u/us/nombre_de_usuario,3-home/u/s/nombre_de_usuario,4-Sólo directorio base,5-home/grupo_primario/nombre_de_usuario
line2=Opciones de nuevo usuario,11
base_uid=UID más baja para nuevos usuarios,0,5
base_gid=GID más baja para nuevos grupos,0,5
uid_mode=Método de de entrada UID por defecto,4,0-Introducido por Usuario,1-Auto Incrementado,2-Calculado
gid_mode=Método de entrada de GID por defecto,4,0-Introducido por Usuario,1-Auto Incrementado,2-Calculado
uid_calc=Método de cálculo de UID,4,0-Cksum de Berkeley,1-Programa personalizado mkuid
gid_calc=Método de cálculo de GID,4,0-Cksum de Berkeley,1-Programa mkgid personalizado
new_user_group=¿Crear nuevo grupo para nuevos usuarios?,1,1-Sí,0-No
new_user_gid=¿Asignar el mismo ID a nuevo usuario y grupo?,1,1-Sí,0-No
md5=Método de encriptación de contraseña,1,1-Determinar automáticamente,0-Encriptación DES,2-MD5
alias_check=¿Revisar para evitar choques de alias de sendmail?,1,1-Sí,0-No
delete_only=¿Sólo borrar archivos pertenecientes al usuario?,1,1-Sí,0-No
max_length=Tamaño máximo de nombre de usuario y grupo,3,Ilimitada
username_re=Expresión regular de Perl contra la que chequear el nombre de usuario,3,Ninguna
shells=Construir lista de shells desde,2,fijo-Lista existente,passwd-Usuarios existentes,shells-/etc/shells
secmode=¿Mostrar grupos secundarios en el formulario de usuario?,1,0-Sí,1-No
line3=Valores por defecto de nuevo usuario,11
default_group=Grupo primario por defecto para nuevos usuarios,6,Por defecto
default_secs=Grupos secundarios or defecto para nuevos usuarios,3,Ninguno
default_shell=Shell por defecto para nuevos usuarios,3,Primero de la lista
default_min=Días mínimos por defecto para nuevos usuarios,3,Ninguno
default_max=Días máximos por defecto para nuevos usuarios,3,Ninguno
default_warn=Días de aviso por defecto para nuevos usuarios,3,Ninguno
default_inactive=Días de inactividad por defecto para nuevos usuarios,3,Ninguno
default_expire=Fecha de expiración por defecto para nuevos usuarios (dd/mm/aaaa),3,Ninguna
default_other=Crear y actualizar en otros módulos,1,1-Sí,0-No
line4=Opciones a mostrar,11
display_max=Máximo número de usuarios o grupos a mostrar,0
sort_mode=Clasificar usuarios y grupo por,4,0-Orden en archivo,1-Nombre de usuario,2-Nombre real,3-Alias,4-Shell,5-UID o GID,6-Directorio inicial
last_count=Número de logins previos a mostrar,3,Ilimitado
last_show=¿Mostrar el último login en la lista de usuarios?,1,1-Sí,0-No
display_mode=Mostrar usuarios y grupos por,1,2-Grupo primario categorizado,1-Detalles completos,0-Sólo nombre
passwd_stars=¿Ocultar clave de acceso de sólo texto?,1,1-Sí,0-No
from_files=Obtener información de usuario y grupo desde,1,1-Archivos,0-Llamadas a sistema
random_password=¿Generar clave de acceso para nuevos usuarios?,1,1-Sí,0-No
extra_real=¿Muestro detalles de oficina y teléfono?,1,1-Sí,0-No
delete_root=¿Permitir borrado de usuarios y grupos del sistema?,1,1-Sí,0-No
line5=Restricciones de contraseña,11
passwd_min=Tamaño mínimo de contraseña,3,Sin mínimo
passwd_dict=¿Impedir contraseñas que sean palabras del diccionario?,1,1-Sí,0-No
passwd_re=Expresión regular de Perl contra la que chequear la contraseña,3,Ninguna
passwd_same=¿Impedir contraseñas que contengan el nombre de usuario?,1,1-Sí,0-No
passwd_prog=Programa externo de chequeo de contraseña,3,Ninguno
line6=Configuración del sistema,11
passwd_file=Archivo de contraseñas,3,Generado
group_file=Archivo de grupo,0
shadow_file=Archivo de clave de acceso en la sombra (Shadow),3
master_file=Archivo de clave de acceso maestra BSD,3
gshadow_file=Archivo de grupo en la sombra (Shadow),3
netinfo_domain=Dominio NetInfo a gestionar,3,Dominio local (<tt>.</tt>)
lock_string=Reemplazar contraseña para cuentas bloqueadas con,0
lock_prepend=Prepend a contraseña para cuentas temporalmente deshabilitadas,3,Por Defecto (!)
