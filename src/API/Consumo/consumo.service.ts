import { ClienteService } from './../Cliente/cliente.service';
import { Injectable } from '@nestjs/common';
import { Consumo } from 'src/Entity/Usage';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/Model/Consumo';
import { Cliente } from 'src/Entity/Client';

@Injectable()
export class ConsumoService {
    //constructor(@InjectRepository(Consumo) private consumoEntity: Repository<Consumo>) { }
    constructor(@InjectRepository(Consumo) private consumoEntity: Repository<Consumo>,
        private clienteService: ClienteService) { }

    async crearConsumo(consumo: IConsumo) {

        await this.consumoEntity.insert({
            fecha: consumo.fecha, //"2022-11-30"
            consumo: consumo.consumo,
            id_cliente: consumo.id_cliente    
        });

    }

    async getByID(id: number) {
        return await this.consumoEntity.find({
            where: {
                id: id
            }
        })
    }

    async getAll() {
        return await this.consumoEntity.find();
    }

    //Registro de mas y menos consumo de Kw
    async getBordes() {
        let borde:string = "";

        const primero = await this.consumoEntity.find({
            order: {
                consumo: "ASC"
            }
        })

        //console.log(primero);

        const ultimo = await this.consumoEntity.find({
            order: {
                consumo: "DESC"
            }
        })

        /*try{
            console.log(ultimo[0].cliente);
        }
        catch{

        }*/
        //Falta traducir el id del cliente en su nombre

        const clientePrimero = await this.clienteService.clienteUnico(primero[0].id_cliente)
        const clienteUltimo = await this.clienteService.clienteUnico(ultimo[0].id_cliente)

        return borde = "El cliente que consumio mas Kw es: " + clientePrimero.nombre + 
            ". \nLa ID del cliente que consumio menos Kw es: " + clienteUltimo.nombre + ".";
    }

    async reporteUsuario(param : number){
        const lista = await this.consumoEntity.find({
            where: {
                id_cliente: param
            }
        })

        //console.log(lista)

        return lista;
    }

    async consumoUnico(param : number){
        const lista = await this.consumoEntity.find({
            where: {
                id : param
            }
        })

        //console.log(lista)

        return lista[0];
    }
}
