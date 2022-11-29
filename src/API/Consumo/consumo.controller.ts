import { IConsumo } from './../../Model/Consumo';
import { Controller, Post, Body, Get } from '@nestjs/common';
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

    @Get('/all')
    allConsumos() {
        return this.consumoService.getAll()
    }

    @Get('/mas_menos')
    bordes(){
        try {
            this.consumoService.getBordes()
        } catch (error) {
            console.log({ error })
            return false
        }
    }
}
