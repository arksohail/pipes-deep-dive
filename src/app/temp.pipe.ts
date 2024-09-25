import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'temp',
  standalone: true
})
export class TempPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
      // console.log(value, "- TRANSFORMED");
      return value + ' ℃';
  }

}