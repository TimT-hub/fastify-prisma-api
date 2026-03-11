import { prisma } from 
import { UserDTO } from '../dto/user.dto'

export class Service {

    async create(userDto: UserDTO) {
        const user = await prisma.user.create({
            data: {
                name: userDto.name,
                email: userDto.email,
                password: userDto.password
            }
        })

        return user
    }

}