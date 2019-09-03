export interface IUnit {
    maxHP: number,
    damage: number,
    initiative: number,
    team: string,
    id: number
    [propName: string]: any;
}