import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ENV_SCHEMA } from 'src/constants/env.constants';

@Module({
    imports: [
        ConfigModule.forRoot({
            expandVariables: true,
            validationSchema:ENV_SCHEMA
        })
    ],
})
export class EnvModule {}
