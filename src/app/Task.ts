import { BuiltinConverter } from "@angular/compiler/src/compiler_util/expression_converter";

export interface Task {
    id?: number;
    text:string;
    day:string;
    reminder:Boolean;
}