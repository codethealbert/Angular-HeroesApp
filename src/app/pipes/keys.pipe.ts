import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false // Para estar escuchando los cambios que haya en el objeto a evaluar
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];

    for (const key in value) {
      keys.push(key);
    }

    return keys;
  }

}
