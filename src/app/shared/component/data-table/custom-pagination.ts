import { MatPaginatorIntl } from '@angular/material/paginator';

// FOR CHANGING THE PAGINATION LABEL
export function CustomPaginator() {
    const customPaginatorIntl = new MatPaginatorIntl();
    customPaginatorIntl.itemsPerPageLabel = 'Rows Per Page';

    return customPaginatorIntl;
}