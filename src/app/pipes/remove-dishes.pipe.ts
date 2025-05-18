import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'removeDashes',
  standalone: true,
})

export class RemoveDishesPipe implements PipeTransform {
    transform(value: string): string {
        if(!value) return '';
        return value.replace(/-/g, '')
    }

}
