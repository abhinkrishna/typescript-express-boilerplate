import Pagination from "../types/pagination";
import dotenv from 'dotenv';

dotenv.config();

export const PaginationDefaults: Pagination = {
    page: 1,
    column_name: process.env.DEFAULT_PAGINATION_COLUMN ?? 'id',
    sort_direction: process.env.DEFAULT_PAGINATION_DIRECTION ?? 'DESC',
    size: Number(process.env.DEFAULT_PAGINATION_LIMIT) ?? 10
}