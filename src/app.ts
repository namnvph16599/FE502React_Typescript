export {}

type Products = {
    id: number,
    name: string,
    price: number
}
type Products2 = {
    id: number,
    name: string,
    status : boolean
}
type MergeType = Products | Products2;
function sum(numA: number, numB: number) {
    return numA + numB;
}
console.log(sum(10, 20));
const myStr: string|number = "10";
const obj: Products = { id: 1, name: "Ngo Van Nam", price: 10 }
const arr: string[] = ["a", "b", "c"];
const objarr: MergeType[] = [
    {
        id: 1,
        name: "sp1",
        price: 10,
    },
    {
        id: 2,
        name: "sp2",
        status: true,
    }
];
console.log(objarr);



