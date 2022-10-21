let nombre="Jhon"
let apellido="Rodriguez"
// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = nombre.concat(" ", apellido)
// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus= estudiante.toLocaleLowerCase()
// Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let cant_estudiante=estudiante.length
// Una variable que contenga la primera letra del Nombre
let nombre_inicia=nombre[0]
// Otra variable que contenga la última letra del Apellido
let apellido_fin= apellido.charAt(apellido.length-1);
// Una cadena de texto que elimine los espacios de la variable "estudiante"
let estudiante_sin_espacio = estudiante.replace(/ /g, "")
// Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let estudiante_contiene=estudiante.includes(nombre)


