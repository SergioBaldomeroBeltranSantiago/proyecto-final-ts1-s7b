import { IPago } from './../../Model/Pago';
import { PagoService } from './pago.service';
import { Controller, Post, Body, Get } from '@nestjs/common';

@Controller('pago')
export class PagoController {
    constructor(private pagoService: PagoService) { }

    @Post('/new')
    Create(@Body() params: IPago): boolean {
        try {
            this.pagoService.crearPago(params)
            return true
        } catch (error) {
            console.log({ error })
            return false
        }
    }

    @Get('/todos_los_pagos')
    allConsumos() {
        return this.pagoService.getAll()
    }

    //Reporte de clientes que ya pagaron
    @Get('/clientesPagados')
    pagados() {
        this.pagoService.pagados()
    }

    //Reporte de clientes que aun no han pagado
    @Get('/clientesDeuda')
    pendientes() {
        this.pagoService.deuda()
    }

}
