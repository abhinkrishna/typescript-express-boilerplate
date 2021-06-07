import { getRepository } from "typeorm";
import { PaginationDefaults } from "../config/defaults";
import Pagination from "../types/pagination";

class Model {

    public repository: any;
    private pagination: Pagination;

    constructor(entity?: any) {
        this.pagination = PaginationDefaults;
        if ( entity ) this.repository = getRepository(entity); 
    }

    public paginationOptions = (order_by: string, order: string, page: number, size: number) => {
        const column_name: string = order_by ?? this.pagination.column_name;
        const sort_direction: string = order ?? this.pagination.sort_direction;
        const page_number: number = Number(page) ?? this.pagination.page;
        const take: number = Number(size) ?? this.pagination.size;

        const options = {
            order: { [column_name]: sort_direction },
            skip: ( (page_number - 1) * take),
            take,
        };
        return options;
    }

}

export default Model;