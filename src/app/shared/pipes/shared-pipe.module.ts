import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateLocaleFilter } from './date-locale-filter';
import { LocalNumberPipe } from './locale-number.pipe';
import {TranslatorPipe} from './translator-pipe';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [DateLocaleFilter, LocalNumberPipe, TranslatorPipe],
    declarations: [DateLocaleFilter, LocalNumberPipe, TranslatorPipe],
    exports: [DateLocaleFilter, LocalNumberPipe, TranslatorPipe]
})
export class SharedPipesModule { }
