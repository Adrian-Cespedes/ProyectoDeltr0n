-- 0 relaciones

-- Tabla categoria
CREATE TABLE categoria (
    nombre VARCHAR(50) PRIMARY KEY
);

-- Tabla almacen
CREATE TABLE almacen (
    numero INTEGER PRIMARY KEY,
    direccion VARCHAR(50)
);

-- Tabla persona
CREATE TABLE persona (
    dni INTEGER PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono VARCHAR(12)
);

-- Tabla fabricante
CREATE TABLE fabricante (
    nombre VARCHAR(50) PRIMARY KEY,
    pais VARCHAR(50),
    dominio_correo VARCHAR(50)
);


-- Tabla cliente
CREATE TABLE cliente (
    ruc VARCHAR(11) PRIMARY KEY,
    email VARCHAR(50) UNIQUE,
    razon_social VARCHAR(50),
    contrasenha VARCHAR(200),
    telefono VARCHAR(50)
);


-- +1 REFERENCIAS

-- Tabla producto
CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    precio FLOAT,
    descripcion VARCHAR(50),
    fabricante_nombre VARCHAR(50) REFERENCES fabricante(nombre)
);

-- Tabla categoria_de
CREATE TABLE categoria_de (
    producto_id INTEGER REFERENCES producto(id),
    categoria_nombre VARCHAR(50) REFERENCES categoria(nombre),
    PRIMARY KEY (producto_id, categoria_nombre)
);

-- Tabla stock
CREATE TABLE stock (
    producto_id INTEGER REFERENCES producto(id),
    almacen_numero INTEGER REFERENCES almacen(numero),
    cantidad INTEGER,
    PRIMARY KEY (producto_id, almacen_numero)
);

-- Tabla empleado
CREATE TABLE empleado (
    dni INTEGER PRIMARY KEY REFERENCES persona(dni),
    correo_institucional VARCHAR(50)
);

-- Tabla atencion_al_cliente
CREATE TABLE atencion_al_cliente (
    dni INTEGER PRIMARY KEY REFERENCES empleado(dni)
);

-- Tabla almacenero
CREATE TABLE almacenero (
    dni INTEGER PRIMARY KEY REFERENCES empleado(dni),
    almacen_numero INTEGER REFERENCES almacen(numero)
);

-- Tabla recogedor
CREATE TABLE recogedor (
    dni INTEGER PRIMARY KEY REFERENCES persona(dni),
    cliente_ruc VARCHAR(11) REFERENCES cliente(ruc)
);

-- Tabla venta
CREATE TABLE venta (
    id SERIAL PRIMARY KEY,
    cliente_ruc VARCHAR(11) REFERENCES cliente(ruc),
    recogedor_asignado_dni INTEGER REFERENCES recogedor(dni),
    f_creacion TIMESTAMP,
    f_limite TIMESTAMP,
    estado VARCHAR(50),
    monto_total FLOAT
);

-- Tabla carrito_de_compras
CREATE TABLE carrito_de_compras (
    cliente_ruc VARCHAR(11) REFERENCES cliente(ruc),
    producto_id INTEGER REFERENCES producto(id),
    cantidad INTEGER,
    PRIMARY KEY (cliente_ruc, producto_id)
);

-- Tabla pago
CREATE TABLE pago (
    id SERIAL PRIMARY KEY,
    venta_id INTEGER REFERENCES venta(id),
    fecha TIMESTAMP,
    monto FLOAT,
    metodo VARCHAR(50)
);

-- Tabla reembolso
CREATE TABLE reembolso (
    id SERIAL PRIMARY KEY,
    pago_id INTEGER REFERENCES pago(id),
    fecha TIMESTAMP
);

-- Tabla contiene_pr_venta
CREATE TABLE contiene_pr_venta (
    venta_id INTEGER REFERENCES venta(id),
    producto_id INTEGER REFERENCES producto(id),
    cantidad INTEGER,
    PRIMARY KEY (venta_id, producto_id)
);

-- Tabla despacho
CREATE TABLE despacho (
    numero SERIAL PRIMARY KEY,
    fecha TIMESTAMP,
    venta_id INTEGER REFERENCES venta(id),
    atencion_al_cliente_dni INTEGER REFERENCES atencion_al_cliente(dni),
    recogedor_asignado_dni INTEGER REFERENCES recogedor(dni)
);

-- Populating tables
-- Insertar fabricantes
INSERT INTO fabricante (nombre, pais, dominio_correo) VALUES
('AMD', 'USA', 'amd.com'),
('Nvidia', 'USA', 'nvidia.com');

-- Insertar productos
INSERT INTO producto (id, nombre, precio, fabricante_nombre) VALUES
(1, 'Ryzen 5', 2000, 'AMD'),
(2, 'Ryzen 7', 3000, 'AMD'),
(3, 'Ryzen 9', 4000, 'AMD'),
(4, 'RTX 2060', 3000, 'Nvidia'),
(5, 'RTX 2070', 4000, 'Nvidia'),
(6, 'RTX 2080', 5000, 'Nvidia'),
(7, 'RTX 2080 Ti', 6000, 'Nvidia'),
(8, 'GTX 1660', 2000, 'Nvidia'),
(9, 'GTX 1660 Ti', 3000, 'Nvidia');

-- Insertar clientes
INSERT INTO cliente (ruc, email, razon_social, contrasenha, telefono) VALUES
('10999999991', 'test1@gmail.com', 'Test1 SAC', 'asE79a1Fs3b6aw', '999888777'),
('10999999992', 'test2@gmail.com', 'Test2 SAC', '3w686Xbgdf546Q', '999888666');

-- Insertar carrito de compras
INSERT INTO carrito_de_compras (cliente_ruc, producto_id, cantidad) VALUES
('10999999991', 2, 10),
('10999999991', 5, 6),
('10999999991', 9, 3);
