import { Test, TestingModule } from '@nestjs/testing';
import { ConsumoService } from './consumo.service';

describe('ConsumoService', () => {
  let service: ConsumoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsumoService],
    }).compile();

    service = module.get<ConsumoService>(ConsumoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
