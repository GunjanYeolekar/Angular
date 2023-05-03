import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousPipe'
})
export class MarvellousPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown
  {
    let str = value;

    if(args[0] == "Progressive")
    {
      str += "Educating for better tomorrow" 
    }
    return str;
  }

}
