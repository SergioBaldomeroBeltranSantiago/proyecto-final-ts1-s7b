import { PagoService } from './pago.service';
import { Controller } from '@nestjs/common';

@Controller('pago')
export class PagoController {
  constructor(private pagoService: PagoService) {}
}
