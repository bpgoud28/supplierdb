import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateFormatPipe} from './dateformat.pipe.service';
import { SortPipe } from './sort.pipe.service';
import {DateSortPipe} from './datesort.pipe.service';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DateFormatPipe,
        SortPipe,
        DateSortPipe
    ],
    exports: [
        DateFormatPipe,
        SortPipe,
        DateSortPipe
    ]
})
export class PipeModule { }
