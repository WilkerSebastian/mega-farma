import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100, type: 'varchar' })
  nome: string;

  @Column({ length: 100, unique: true, type: 'varchar' })
  email: string

  @Column({ length: 11, unique: true, type: 'varchar' })
  cpf: string;

  @Column({ length: 100, type: 'varchar' })
  bairro: string;

  @Column({ length: 100, type: 'varchar' })
  rua: string;

  @Column({ type: 'integer' })
  numero: number;

  @Column({ length: 15, type: 'varchar' })
  telefone: string;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column({ type: 'text' })
  senha: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false, type: 'boolean' })
  isValidated: boolean;

  constructor(nome: string, email: string, cpf: string, bairro: string, rua: string, numero: number, telefone: string, dataNascimento: Date, senha: string) {
    this.id = ""
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.bairro = bairro
    this.rua = rua
    this.numero = numero
    this.telefone = telefone
    this.dataNascimento = dataNascimento
    this.senha = senha
    this.createdAt = new Date()
    this.isValidated = false
  }

}
