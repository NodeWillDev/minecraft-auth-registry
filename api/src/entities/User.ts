import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column('text')
  nick: string;

  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text')
  password: string;
}