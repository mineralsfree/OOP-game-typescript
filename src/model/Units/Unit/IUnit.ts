export interface IUnit {
    maxHP: number,
    damage: number,
    initiative: number,
    team: string,
    [propName: string]: any;
}