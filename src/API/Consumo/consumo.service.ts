import { ClienteService } from './../Cliente/cliente.service';
import { Injectable } from '@nestjs/common';
import { Consumo } from 'src/Entity/Usage';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IConsumo } from 'src/Model/Consumo';

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
        return await this.consumoEntity.find({
            relations:{
                cliente: true
            }
        });
    }

    //Registro de mas y menos consumo de Kw
    async getBordes() {
        let borde: string = "";

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

        return borde = "El cliente que consumio menos Kw es \"" + clientePrimero.nombre + "\" con un total de "+ primero[0].consumo + "Kw"+
            ". \nEl cliente que consumio mas Kw es \"" + clienteUltimo.nombre + "\" con un total de "+ ultimo[0].consumo + "Kw.";
    }

    async reporteUsuario(param: number) {
        const lista = await this.consumoEntity.find({
            where: {
                id_cliente: param
            }
        })

        //console.log(lista)

        return lista;
    }

    async consumoUnico(param: number) {
        const lista = await this.consumoEntity.find({
            where: {
                id: param
            }
        })

        //console.log(lista)

        return lista[0];
    }

    async pagados() {
        const users = await this.consumoEntity.query('SELECT pago.id AS "pagoid", consumo.id, id_cliente FROM `consumo` INNER JOIN `pago` ON `consumo`.`id` = `pago`.`id_consumo` ORDER BY `consumo`.`id_cliente` ASC')
        return users;
    }

    async nopagados() {
        const users = await this.consumoEntity.query('SELECT consumo.id_cliente, consumo.id FROM `pago` RIGHT JOIN `consumo` ON `consumo`.`id` = `pago`.`id_consumo` WHERE pago.id IS NULL ORDER BY consumo.id_cliente ASC')
        return users;
    }
}
