class AdministradorUsuarios {
    constructor() {
        this.usuarios = [];

        const solicitud = new XMLHttpRequest();

        solicitud.open(
            "GET",
            "https://jsonplaceholder.typicode.com/users",
            false // síncrono para que la información quede cargada al crear el objeto
        );

        solicitud.onload = () => {
            if (solicitud.status === 200) {
                this.usuarios = JSON.parse(solicitud.responseText);
            }
        };

        solicitud.send();
    }

    // Listar todos los nombres
    listarNombres() {
        this.usuarios.forEach(usuario => {
            console.log(usuario.name);
        });
    }

    // Buscar usuario por nombre y mostrar username y correo
    mostrarInformacionBasica() {
        const nombre = prompt("Ingrese el nombre del usuario");

        const usuario = this.usuarios.find(
            u => u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Username:", usuario.username);
            console.log("Correo:", usuario.email);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    // Mostrar dirección completa
    mostrarDireccion() {
        const nombre = prompt("Ingrese el nombre del usuario");

        const usuario = this.usuarios.find(
            u => u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Calle:", usuario.address.street);
            console.log("Suite:", usuario.address.suite);
            console.log("Ciudad:", usuario.address.city);
            console.log("Código postal:", usuario.address.zipcode);
            console.log("Latitud:", usuario.address.geo.lat);
            console.log("Longitud:", usuario.address.geo.lng);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    // Mostrar información avanzada
    mostrarInformacionAvanzada() {
        const nombre = prompt("Ingrese el nombre del usuario");

        const usuario = this.usuarios.find(
            u => u.name.toLowerCase() === nombre.toLowerCase()
        );

        if (usuario) {
            console.log("Teléfono:", usuario.phone);
            console.log("Sitio web:", usuario.website);

            console.log("Compañía:");
            console.log("Nombre:", usuario.company.name);
            console.log("Frase:", usuario.company.catchPhrase);
            console.log("BS:", usuario.company.bs);
        } else {
            console.log("Usuario no encontrado");
        }
    }

    // Listar compañías y catchPhrase
    listarCompanias() {
        this.usuarios.forEach(usuario => {
            console.log(
                usuario.company.name +
                " - " +
                usuario.company.catchPhrase
            );
        });
    }

    // Listar nombres ordenados alfabéticamente
    listarNombresOrdenados() {
        const nombres = this.usuarios
            .map(usuario => usuario.name)
            .sort();

        nombres.forEach(nombre => {
            console.log(nombre);
        });
    }
}

const administrador = new AdministradorUsuarios();