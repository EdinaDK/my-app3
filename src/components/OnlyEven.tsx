type OnlyEvenProps = {
    arr: number[];
}

export function OnlyEven({arr}: OnlyEvenProps) {
    return <ul>{arr.filter(a => a % 2 === 0).map(item => <li>{item}</li>)}</ul>;

}


