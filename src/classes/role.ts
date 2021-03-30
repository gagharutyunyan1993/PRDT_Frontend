import {Permission} from "./permission";

export class Role{
    id: number;
    name: string;
    permission: Permission[];

    constructor(id = 0, name = '',permission = []) {
        this.id = id;
        this.name = name;
        this.permission = permission;
    }
}