import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class IBaseTypeormTable {
  @Column({ name: 'FL_SITUACAO' })
  flSituacao: number;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dtCadastro: Date;

  @Column({ name: 'ID_USUARIO_CADASTRO', default: null })
  idUsuarioCadastro: string;

  @Column({ name: 'DS_USUARIO_CADASTRO', default: null })
  dsUsuarioCadastro?: string;

  @UpdateDateColumn({ name: 'DT_ALTERACAO', default: null })
  dtAlteracao: Date;

  @Column({ name: 'ID_USUARIO_ALTERACAO', default: null })
  idUsuarioAlteracao: string;

  @Column({ name: 'DS_USUARIO_ALTERACAO', default: null })
  dsUsuarioAlteracao: string;
}
