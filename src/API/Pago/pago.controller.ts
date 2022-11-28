import { IPago } from './../../Model/Pago';
import { Controller, Get, Param } from '@nestjs/common';
import { PagoService } from './pago.service';
import { Controller, Get } from '@nestjs/common';

@Controller('pago')
export class PagoController {
  constructor(private pagoService: PagoService) {}
  @Get('/:idConsumo')
  getRegPago(@Param('idConsumo') id): IPago | string {
    const regPago = this.PagoService.obtenerPago(id);
    return regPago ?? 'Registro no existente';
  }
}
