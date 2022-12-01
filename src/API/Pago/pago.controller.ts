import { IPago } from './../../Model/Pago';
import { PagoService } from './pago.service';
import { Controller, Post, Body } from '@nestjs/common';

@Controller('pago')
export class PagoController {
  constructor(private pagoService: PagoService) {}

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

}
