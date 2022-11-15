import { Test, TestingModule } from '@nestjs/testing';
import { PagoServiceService } from './pago-service.service';

describe('PagoServiceService', () => {
  let service: PagoServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PagoServiceService],
    }).compile();

    service = module.get<PagoServiceService>(PagoServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
