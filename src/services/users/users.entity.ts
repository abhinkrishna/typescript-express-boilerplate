import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: "enum",
        enum: ["active", "inactive"],
        default: "active"
    })
    public status: string;

    @Column({
        type: "varchar",
        nullable: true
    })
    public full_name: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public country_code: string;

    @Column({
        type: "varchar",
        nullable: true,
    })
    public mobile: string;

    @Column({
        type: "varchar",
        nullable: true,
        unique: true,
    })
    public email: string;

    @Column({
        select: false,
        type: "varchar",
        nullable: true
    })
    public password: string | null;

    @Column({
        select: false,
        type: "varchar",
        default: 'user'
    })
    public role: string[];

    @Column({
        type: "timestamptz",
        nullable: true
    })
    public dob: Date;

    @Column({
        type: "enum",
        enum: ["m", "f", "o"],
        nullable: true,
    })
    public gender: string;

    @Column()
    @CreateDateColumn({
        type: "timestamptz",
        default: () => `timezone('utc', now())`
    })
    public created_at: Date;

    @Column()
    @UpdateDateColumn({
        type: "timestamptz",
        default: () => `timezone('utc', now())`
    })
    public updated_at: Date;

    @DeleteDateColumn({
        type: "date",
        nullable: true
    })
    public deleted_on: Date

}

export default User;