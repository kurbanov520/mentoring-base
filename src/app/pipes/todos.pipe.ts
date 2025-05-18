import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'slice',
  standalone: true,
})

export class TodosPipe implements PipeTransform {
    transform(value: string, number: number = 20): any {
      if (!value) return '';
     return value.length > number ? value.slice(0, 17) + '...' : value
    }

}
