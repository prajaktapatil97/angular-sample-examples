import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name :'truncate'})

export class truncatePipe implements PipeTransform{
  transform(value: string) {
    return value.slice(0,2);
  }
}

