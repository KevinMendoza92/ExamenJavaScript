# ExamenJavaScript
Kevin Mendoza

c. Ejercicio 3
Crear 1 tabla en Sailsjs de Pastelería.
La Pastelería tendrá los campos:
• Nombre (string)
• Ciudad (string)
• Correo (email)

Después de encontrar su ejercicio haga lo siguiente:
1. Cree los modelos con el comando “sails generate api modelo” (1pt)
a. Documentación: http://sailsjs.com/documentation/reference/command-line-interface/sails-generate
2. Cree los atributos dependiendo de su ejercicio (3 pt)
a. Documentación: http://sailsjs.com/documentation/concepts/models-and-orm/attributes
4) FrontEnd con Angular de su Ejercicio
1. Cree una aplicación con angular con el nombre en formato: “twj-examen-apellido-nombre” (1pt)
a. Ejemplo: ng new twj-examen-eguez-adrian
b. Documentación: https://github.com/angular/angular-cli
2. Importar el Bootstrap (1 pt)
3. Crear una clase (en typescript) para su ejercicio. (2 pt)
a. Por ejemplo, si su ejercicio es de bodegas la clase seria BodegasClass y los atributos que tendrían serían: id, nombre, dirección, capacidad, createdAt, updatedAt
4. Crear un componente para mostrar su ejercicio (por ejemplo, si es bodega para mostrar las bodegas). Dentro del componente deben de tener los siguientes ítems (4 pt):
a. El nombre del componente debe de ser singular de su Ejercicio (por ejemplo si es bodega el componente debería de llamarse bodegas.component.ts y los demás archivos con el mismo formato)
b. Dentro del componente deben de mostrarse todos los elementos del modelo en sails (por ejemplo, si es bodega debería de tener nombre, dirección y capacidad en toneladas)
5. Dentro del componente recibir un “@Input” para llenar los datos del componente (1 pt)
6. Importar el servicio Http en su componente principal (1 pt)
7. Crear el método para llamar a los datos dentro del componente principal con el evento ngOnInit
a. Dentro de ngOnInit utilizar el servicio Http para llamar a todos los registros desde sails.
8. Crear el método para crear nuevos datos en su ejercicio
9. Crear el html para crear datos en su ejercicio (inputs y botón) (4 pt)
10. Utilizar *ngFor para presentar los datos cargados con ngOnInit en su html (sea responsive) (2 pt)
5) Crear otra aplicación con un api
Puede utilizar cualquier api de cualquier tema (como el de star wars) https://swapi.co para mostrar en un componente los datos de ese tema.
1. Cree una aplicación con angular con el nombre en formato: “twj-examen-api-apellido-nombre” (1pt)
a. Ejemplo: ng new twj-examen-api-eguez-adrian
b. Documentación: https://github.com/angular/angular-cli
2. Importar el Bootstrap (1 pt)
3. Crear una clase (en typescript) para su api. (2 pt)
a. Por ejemplo, si su ejercicio es de star wars la clase seria PlanetasStarWarsClass y los atributos que tendrían serían los que de el api.
4. Crear un componente para mostrar su ejercicio (por ejemplo, si es planetas de starwars para mostrar los planetas). Dentro del componente deben de tener los siguientes ítems (6 pt):
a. El nombre del componente debe de ser singular de su Ejercicio (por ejemplo si es planetas el componente debería de llamarse planeta.component.ts y los demás archivos con el mismo formato)
b. Dentro del componente deben de mostrarse 4 de los elementos del modelo que tenga su api
c. La presentación será calificada (hágalo de la mejor manera)
5. Dentro del componente recibir un “@Input” para llenar los datos del componente (1 pt)
6. Importar el servicio Http en su componente principal (1 pt)
7. Crear el método para llamar a los datos dentro del componente principal con el evento ngOnInit
a. Dentro de ngOnInit utilizar el servicio Http para llamar a todos los registros desde sails
