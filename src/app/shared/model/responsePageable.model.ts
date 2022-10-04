export class ResponsePageable{
    id(id: any) {
      throw new Error('Method not implemented.');
    }
    content!: any[];
    first!: boolean;
    last!: boolean;
    number!: number;
    numberOfElements!: number;
    pageable!:any[];
    size!: number;
    sort!: number;
    totalElements!: number;
    totalPages!: number;

}