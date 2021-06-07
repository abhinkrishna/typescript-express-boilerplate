import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("auth")
class Auth {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "enum",
        nullable: false,
        enum: ["ACCESS_TOKEN"]
    })
    public type: string[];

    @Column({
        type: "enum",
        nullable: false,
        enum: ["user", "admin"],
        default: "user",
    })
    public role: string;

    @Column({
        type: "integer",
        nullable: false
    })
    public user_id: number;

    @Column({
        type: "varchar",
        nullable: false
    })
    public token: string;

    @Column()
    @CreateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`
    })
    public created_at: Date;

    @Column()
    @UpdateDateColumn({
        type: 'timestamptz',
        default: () => `timezone('utc', now())`
    })
    public updated_at: Date;
}

export default Auth;