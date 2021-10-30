import { getRepository, Not } from "typeorm";
import { PaginationDefaults } from "../config/defaults";
import Pagination from "../types/pagination";
import { Exception400 } from "../utils/exception";

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

    public uniqueCheckOnCreate = async (attribute: string[], object: any, message: string, repo?: any) => {
        const filterObj: any = {};
        for (const att of attribute) { filterObj[att] = object[att]; }
        const result = (repo) ? await repo.findOne(filterObj) : await this.repository.findOne(filterObj);
        if (result) throw new Exception400(message);
        return;
    }

    public uniqueCheckOnUpdate = async (attribute: string[], id: number, object: any, message: string, repo?: any) => {
        const filterObj: any = {};
        for (const att of attribute) { filterObj[att] = object[att]; }
        filterObj.id = Not(id);
        const result = (repo) ? await repo.findOne(filterObj) : await this.repository.findOne(filterObj);
        if (result) throw new Exception400(message);
        return;
    }


}

export default Model;