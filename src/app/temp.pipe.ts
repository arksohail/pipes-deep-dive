import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true
})
export class TempPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    // console.log(value, "- TRANSFORMED");
    let val;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    const outputTemp = value * (9/5) + 32;
    return `${outputTemp}°F`;
  }

}