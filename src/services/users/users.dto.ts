import { IsDefined, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsString, Length } from "class-validator";

export class CreateUserDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public full_name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public country_code: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    @IsString()
    public mobile: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsString()
    public dob: string;

    @IsDefined()
    @IsNotEmpty()
    @IsEnum(['m', 'f', 'o'])
    public gender: string;

}

export class UpdateUserDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public full_name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public country_code: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    @IsString()
    public mobile: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsString()
    public dob: string;

    @IsDefined()
    @IsNotEmpty()
    @IsEnum(['m', 'f', 'o'])
    public gender: string;

}

export class UpdateUserStatusDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsEnum(['active', 'inactive'])
    public status: string;

}

export class UpdateUserByUserDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public full_name: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public country_code: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    @IsString()
    public mobile: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    @IsString()
    public dob: string;

    @IsDefined()
    @IsNotEmpty()
    @IsEnum(['m', 'f', 'o'])
    public gender: string;

}

export class ReadManyUsersDTO {

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public order_by: string;

    @IsDefined()
    @IsNotEmpty()
    @IsString()
    public order: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    public page: string;

    @IsDefined()
    @IsNotEmpty()
    @IsNumberString()
    public size: string;

}