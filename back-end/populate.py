from dataclasses import dataclass
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config[
    "SQLALCHEMY_DATABASE_URI"
] = "postgresql://postgres:vBu1iSunMNScmB1L8cE1@containers-us-west-67.railway.app:5571/railway"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False


CORS(app)
db = SQLAlchemy(app)


@dataclass
class Producto(db.Model):
    id: int
    nombre: str
    precio: float
    descripcion: str
    fabricante_nombre: str

    __tablename__ = "producto"
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50))
    precio = db.Column(db.Float)
    descripcion = db.Column(db.String(50))
    fabricante_nombre = db.Column(
        db.String(50), db.ForeignKey("fabricante.nombre"))

    def __repr__(self):
        return f"<Producto {self.id}>"


@dataclass
class Fabricante(db.Model):
    nombre: str
    pais: str
    dominio_correo: str

    __tablename__ = "fabricante"

    nombre = db.Column(db.String(50), primary_key=True)
    pais = db.Column(db.String(50))
    dominio_correo = db.Column(db.String(50))

    def __repr__(self):
        return f"<Fabricante {self.nombre}>"


with app.app_context():

    # aniadir fabricantes
    db.session.add(Fabricante(
        nombre="AMD", pais="USA", dominio_correo="amd.com"))
    db.session.add(Fabricante(nombre="Nvidia", pais="USA",
                   dominio_correo="nvidia.com"))

    db.session.add(Producto(id=2, nombre="Ryzen 5",
                   precio=2000, fabricante_nombre="AMD"))
    db.session.add(Producto(id=3, nombre="Ryzen 7",
                   precio=3000, fabricante_nombre="AMD"))
    db.session.add(Producto(id=4, nombre="Ryzen 9",
                   precio=4000, fabricante_nombre="AMD"))
    db.session.add(Producto(id=5, nombre="RTX 2060",
                   precio=3000, fabricante_nombre="Nvidia"))
    db.session.add(Producto(id=6, nombre="RTX 2070",
                   precio=4000, fabricante_nombre="Nvidia"))
    db.session.add(Producto(id=7, nombre="RTX 2080",
                   precio=5000, fabricante_nombre="Nvidia"))
    db.session.add(Producto(id=8, nombre="RTX 2080 Ti",
                   precio=6000, fabricante_nombre="Nvidia"))
    db.session.add(Producto(id=9, nombre="GTX 1660",
                   precio=2000, fabricante_nombre="Nvidia"))
    db.session.add(Producto(id=10, nombre="GTX 1660 Ti",
                   precio=3000, fabricante_nombre="Nvidia"))

    # comitear
    db.session.commit()
