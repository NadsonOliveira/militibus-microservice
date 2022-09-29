import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmpresaDto {
  @ApiProperty()
  nomeEmpresa: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  logoEmpresa: string;

  @ApiProperty()
  @Optional()
  excluido: boolean;

  @ApiProperty()
  @Optional()
  flAdm: boolean;

  @ApiProperty()
  dataCadastro: Date;

  @ApiProperty()
  dataAlteracao: Date;
}
