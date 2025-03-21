import { Injectable } from '@angular/core';
import { Producto } from '../models/Productos.modesl';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { 
    console.log("Servicio listo para usar!!!");
  }
  private productos: Producto[] =[
    {nombre: "Audifom¡nos", img: "assets/img/1audi.avif" ,precio: 100},
    {nombre: "Tenis", img: "assets/img/2tenis.avif" ,precio: 100},
    {nombre: "Reloj", img: "assets/img/3reloj.avif" ,precio: 100},
  ];
  getProductos(): Producto[] {return this.productos;}
  getProducto(id: number) {return this.productos[id];}
  buscarProductos(termino: string): Producto[] {
    let productosArr: Producto[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.productos.length; i++){
      let producto = this.productos[i];
      let nombre = producto.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0){
        productosArr.push(producto)
      }
    }
    return productosArr;
  }
}
