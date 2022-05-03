import * as mongoose from 'mongoose';
import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

@Schema({
    collection: 'dinosaurs'
})
export class Dinosaur extends mongoose.Document{
    @Prop() "id": number;
    @Prop() "name": string;
    @Prop() "pronunciation": string;
    @Prop() "meaningOfName": string;
    @Prop() "diet": string;
    @Prop() "length": string;
    @Prop() "period": string;
    @Prop() "mya": string;
    @Prop() "info": string;
}

export const DinosaurSchema =  SchemaFactory.createForClass(Dinosaur);
