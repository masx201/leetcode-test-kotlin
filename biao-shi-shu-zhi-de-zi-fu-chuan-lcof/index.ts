export default function isNumber(s: string): boolean {
    s = s.trim();
    return /^(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?$/.test(s);
}
// export default function isNumber(s: string): boolean {
//     s = s.trim();
//     if (s.length === 0) return false;
//     if (["+Infinity", "Infinity", "-Infinity"].includes(s)) return false;
//     const num = Number(s);
//     return !Number.isNaN(num);
// }
