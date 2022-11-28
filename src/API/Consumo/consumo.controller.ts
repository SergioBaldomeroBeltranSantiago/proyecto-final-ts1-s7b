import { Controller } from '@nestjs/common';
import { ConsumoService } from './consumo.service';

@Controller('consumo')
export class ConsumoController {
    constructor(private consumoService: ConsumoService) {}
}
