import {ApiProperty} from "@nestjs/swagger";
import {IsBoolean, IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.ru', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;
    @ApiProperty({example: '12345', description: 'пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
    readonly password: string;
    @ApiProperty({example: 'true', description: 'Зарегистрировать как администратора. Опциональное свойство'})
    @IsBoolean({message: 'Должно быть true, либо false'})
    readonly asAdmin: boolean = false;
}
