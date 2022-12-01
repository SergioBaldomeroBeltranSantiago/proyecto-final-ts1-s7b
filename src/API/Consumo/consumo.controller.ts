import { IConsumo } from './../../Model/Consumo';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ConsumoService } from './consumo.service';
import { ClienteService } from '../Cliente/cliente.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService/*, private clienteService: ClienteService*/) {}

    @Post('/new')
    Create(@Body() params: IConsumo): boolean {
        try {
            this.consumoService.crearConsumo(params)
            return true
        } catch (error) {
            console.log({ error })
            return false
        }
    }

    @Get('/reporte_Consumos')
    allConsumos() {
        return this.consumoService.getAll()
    }

    @Get('/reporte_mas_menos')
    bordes(){
        try {
            return this.consumoService.getBordes()
        } catch (error) {
            console.log({ error })
            return false
        }
    }

    @Get('/reporte/:id')
    consumoUsuario(@Param('id') param:number){
        try {
            return this.consumoService.reporteUsuario(param)
        } catch (error) {
            console.log({ error })
            return false
        }
    }
}
