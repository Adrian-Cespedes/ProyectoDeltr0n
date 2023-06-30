--DELTRON DB SCRIPT
--No referencias
DROP TABLE IF EXISTS cliente;
CREATE TABLE IF NOT EXISTS cliente (
                                       ruc VARCHAR(11) PRIMARY KEY,
                                       email VARCHAR(100) NOT NULL,
                                       razon_social VARCHAR(50) NOT NULL,
                                       contrasena VARCHAR(32) NOT NULL,
                                       telefono varchar (12) NOT NULL
);

DROP TABLE IF EXISTS persona;
CREATE TABLE IF NOT EXISTS persona (
                                       dni VARCHAR(8) PRIMARY KEY,
                                       telefono VARCHAR(12) NOT NULL,
                                       nombre VARCHAR(50) NOT NULL,
                                       apellido VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS fabricante;
CREATE TABLE IF NOT EXISTS fabricante (
                                          nombre VARCHAR(40) PRIMARY KEY,
                                          pais VARCHAR(50) NOT NULL,
                                          dominio_correo VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS categoria;
CREATE TABLE IF NOT EXISTS categoria (
    nombre VARCHAR(50) PRIMARY KEY
);

DROP TABLE IF EXISTS descuento;
CREATE TABLE IF NOT EXISTS descuento (
                                         id INT PRIMARY KEY,
                                         porcentaje FLOAT NOT NULL,
                                         f_inicio DATE NOT NULL,
                                         f_fin DATE NOT NULL
);

DROP TABLE IF EXISTS almacen;
CREATE TABLE IF NOT EXISTS almacen (
                                       nro INT PRIMARY KEY,
                                       direccion VARCHAR(150) NOT NULL
);


--1 referencia

DROP TABLE IF EXISTS empleado;
CREATE TABLE IF NOT EXISTS empleado (
                                        dni VARCHAR(8) PRIMARY KEY REFERENCES persona(dni),
                                        correo_institucional VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS atencion_cliente;
CREATE TABLE IF NOT EXISTS atencion_cliente (
    dni VARCHAR(8) PRIMARY KEY REFERENCES empleado(dni)
);

DROP TABLE IF EXISTS almacenero;
CREATE TABLE IF NOT EXISTS almacenero (
                                          dni VARCHAR(8) PRIMARY KEY REFERENCES empleado(dni),
                                          en_almacen INT REFERENCES almacen(nro)
);

DROP TABLE IF EXISTS inspector;
CREATE TABLE IF NOT EXISTS inspector (
    dni VARCHAR(8) PRIMARY KEY REFERENCES empleado(dni)
);

DROP TABLE IF EXISTS transportista;
CREATE TABLE IF NOT EXISTS transportista (
    dni VARCHAR(8) PRIMARY KEY REFERENCES empleado(dni)
);

DROP TABLE IF EXISTS directivo;
CREATE TABLE IF NOT EXISTS directivo (
    dni VARCHAR(8) PRIMARY KEY REFERENCES empleado(dni)
);

DROP TABLE IF EXISTS recogedor;
CREATE TABLE IF NOT EXISTS recogedor (
                                         dni VARCHAR(8) PRIMARY KEY REFERENCES persona(dni),
                                         cliente VARCHAR(11) REFERENCES cliente(ruc)
);

DROP TABLE IF EXISTS producto;
CREATE TABLE IF NOT EXISTS producto (
                                        id BIGINT PRIMARY KEY,
                                        nombre VARCHAR(256) NOT NULL,
                                        precio FLOAT NOT NULL,
                                        descripcion VARCHAR(1536) NOT NULL,
                                        img_url TEXT NOT NULL,
                                        f_nombre VARCHAR(40) NOT NULL REFERENCES fabricante(nombre)
);

DROP TABLE IF EXISTS aplica;
CREATE TABLE IF NOT EXISTS aplica (
                                      PRIMARY KEY (producto_id, descuento_id),
                                      producto_id BIGINT REFERENCES producto(id),
                                      descuento_id INT REFERENCES descuento(id)
);

--2 referencias
DROP TABLE IF EXISTS venta;
CREATE TABLE IF NOT EXISTS venta (
                                     id BIGINT PRIMARY KEY,
                                     cliente_id_ruc VARCHAR(11) REFERENCES cliente(ruc) ,
                                     recogedor_asignado_dni  VARCHAR(8) REFERENCES recogedor(dni),
                                     f_creacion DATE NOT NULL,
                                     f_limite DATE NOT NULL,
                                     estado VARCHAR(20) NOT NULL,
                                     monto_total FLOAT NOT NULL

                                         CONSTRAINT chk_estado CHECK (estado IN ('pendiente', 'en camino', 'entregado', 'cancelado'))
);

DROP TABLE IF EXISTS compra;
CREATE TABLE IF NOT EXISTS compra (
                                      id BIGINT PRIMARY KEY,
                                      fecha DATE NOT NULL,
                                      a_fabricante VARCHAR(40) REFERENCES fabricante(nombre),
                                      almacen_nro INT REFERENCES almacen(nro)
);

DROP TABLE IF EXISTS compra_destinada;
CREATE TABLE IF NOT EXISTS compra_destinada (
                                                PRIMARY KEY (almacen_id, compra_id),
                                                almacen_id INT REFERENCES almacen(nro),
                                                compra_id BIGINT REFERENCES compra(id)
);

DROP TABLE IF EXISTS realiza_compra_dir;
CREATE TABLE IF NOT EXISTS realiza_compra_dir (
                                                  PRIMARY KEY (compra_id, directivo_dni),
                                                  compra_id BIGINT REFERENCES compra(id),
                                                  directivo_dni VARCHAR(8) REFERENCES directivo(dni)
);

DROP TABLE IF EXISTS categoria_de;
CREATE TABLE IF NOT EXISTS categoria_de (
                                            PRIMARY KEY(producto_id, categoria_id),
                                            producto_id BIGINT REFERENCES producto(id),
                                            categoria_id VARCHAR(50) REFERENCES categoria(nombre)

);

DROP TABLE IF EXISTS contiene_pr_venta;
CREATE TABLE IF NOT EXISTS contiene_pr_venta (
                                                 PRIMARY KEY (venta_id, producto_id),
                                                 venta_id BIGINT REFERENCES venta(id),
                                                 producto_id BIGINT REFERENCES producto(id),
                                                 cantidad INT NOT NULL
);

DROP TABLE IF EXISTS stock;
CREATE TABLE IF NOT EXISTS stock (
                                     PRIMARY KEY (producto_id, almacen_nro),
                                     producto_id BIGINT REFERENCES producto(id),
                                     almacen_nro INT REFERENCES almacen(nro),
                                     cantidad INT NOT NULL
);

DROP TABLE IF EXISTS pr_de_compra;
CREATE TABLE IF NOT EXISTS pr_de_compra(
                                           PRIMARY KEY (compra_id, producto_id),
                                           compra_id BIGINT REFERENCES compra(id),
                                           producto_id BIGINT REFERENCES producto(id),
                                           cantidad INT NOT NULL
);

DROP TABLE IF EXISTS pago;
CREATE TABLE IF NOT EXISTS pago (
                                    id BIGINT PRIMARY KEY,
                                    monto FLOAT NOT NULL,
                                    fecha DATE NOT NULL,
                                    tipo VARCHAR(20) NOT NULL,
                                    venta_id BIGINT REFERENCES venta(id)
);

DROP TABLE IF EXISTS reembolso;
CREATE TABLE IF NOT EXISTS reembolso (
                                         id BIGINT PRIMARY KEY,
                                         pago_id BIGINT REFERENCES pago(id),
                                         fecha DATE NOT NULL
);

DROP TABLE IF EXISTS hace_pago;
CREATE TABLE IF NOT EXISTS hace_pago (
                                         pago_id BIGINT PRIMARY KEY REFERENCES pago(id),
                                         venta_id BIGINT REFERENCES venta(id),
                                         fecha DATE NOT NULL
);

DROP TABLE IF EXISTS traslado_interno;
CREATE TABLE IF NOT EXISTS traslado_interno (
                                                id BIGINT PRIMARY KEY,
                                                fecha DATE NOT NULL,
                                                almacen_origen_nro INT REFERENCES almacen(nro),
                                                almacen_destino_nro INT REFERENCES almacen(nro),
                                                CONSTRAINT check_constraint_name CHECK (almacen_origen_nro <> almacen_destino_nro)
);

DROP TABLE IF EXISTS contiene_traslado;
CREATE TABLE IF NOT EXISTS contiene_traslado (
                                                 PRIMARY KEY (traslado_id, producto_id),
                                                 traslado_id BIGINT REFERENCES traslado_interno(id),
                                                 producto_id BIGINT REFERENCES producto(id),
                                                 cantidad INT NOT NULL
);

DROP TABLE IF EXISTS encargado_traslado;
CREATE TABLE IF NOT EXISTS encargado_traslado (
                                                  PRIMARY KEY (traslado_id, transportista_dni),
                                                  traslado_id BIGINT REFERENCES traslado_interno(id),
                                                  transportista_dni VARCHAR(8) REFERENCES transportista(dni)
);

DROP TABLE IF EXISTS monitoreo;
CREATE TABLE IF NOT EXISTS monitoreo (
                                         monitoreo_id int PRIMARY KEY,
                                         almacen_id INT REFERENCES almacen(nro),
                                         inspector_dni VARCHAR(8) REFERENCES inspector(dni),
                                         fecha DATE NOT NULL
);

DROP TABLE IF EXISTS despacho;
CREATE TABLE IF NOT EXISTS despacho (
                                        nro BIGINT PRIMARY KEY,
                                        fecha DATE NOT NULL,
                                        atendido_por VARCHAR(8) REFERENCES atencion_cliente(dni),
                                        recogido_por VARCHAR(8) REFERENCES recogedor(dni),
                                        venta_id BIGINT REFERENCES venta(id)
);
