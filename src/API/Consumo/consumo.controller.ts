import { IConsumo } from './../../Model/Consumo';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ConsumoService } from './consumo.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService) {}

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

    //Reporte general de todos los consumos
    @Get('/reporte_Consumos')
    allConsumos() {
        return this.consumoService.getAll()
    }

    //Reporte el cual indica que usuario consumio mas Kw y quien consumio menos Kw
    @Get('/reporte_mas_menos')
    bordes(){
        try {
            return this.consumoService.getBordes()
        } catch (error) {
            console.log({ error })
            return false
        }
    }

    //Reporte de detalles de consumo por cliente. 
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
