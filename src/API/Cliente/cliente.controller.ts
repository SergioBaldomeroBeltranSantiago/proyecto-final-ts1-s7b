import { ClienteService } from './cliente.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ICliente } from 'src/Model/Cliente';

@Controller('cliente')
export class ClienteController {
    constructor(private clienteService: ClienteService) { }

    @Post('/new')
    Create(@Body() params: ICliente): boolean {
        try {
            this.clienteService.crearUsuario(params)
            return true
        } catch (error) {
            console.log({ error })
            return false
        }
    }

    @Get('/all')
    getClientes() {
        return this.clienteService.getAll()
    }

    @Get('/:id')
    getCliente(@Param('id') param:number) {
        const user = this.clienteService.getByID(param)
        if (user == null)
        {
            return "El usuario no existe"
        }
        else{
            return user
        }
    }
}
