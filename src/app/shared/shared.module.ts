import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from  "@ngx-translate/core";
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import {
    NgbAccordionModule,
    NgbAlertModule,
    NgbButtonsModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbModalModule,
    NgbPaginationModule,
    NgbPopoverModule,
    NgbProgressbarModule,
    NgbRatingModule,
    NgbTabsetModule,
    NgbTimepickerModule,
    NgbTooltipModule,
    NgbTypeaheadModule
} from '@ng-bootstrap/ng-bootstrap';


import { FlotDirective } from './directives/flot/flot.directive';
import { SparklineDirective } from './directives/sparkline/sparkline.directive';
import { EasypiechartDirective } from './directives/easypiechart/easypiechart.directive';
import { ColorsService } from './colors/colors.service';
import { CheckallDirective } from './directives/checkall/checkall.directive';
import { VectormapDirective } from './directives/vectormap/vectormap.directive';
import { NowDirective } from './directives/now/now.directive';
import { ScrollableDirective } from './directives/scrollable/scrollable.directive';
import { JqcloudDirective } from './directives/jqcloud/jqcloud.directive';

// https://angular.io/styleguide#!#04-10
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        NgbAccordionModule.forRoot(),
        NgbAlertModule.forRoot(),
        NgbButtonsModule.forRoot(),
        NgbCarouselModule.forRoot(),
        NgbCollapseModule.forRoot(),
        NgbDatepickerModule.forRoot(),
        NgbDropdownModule.forRoot(),
        NgbModalModule.forRoot(),
        NgbPaginationModule.forRoot(),
        NgbPopoverModule.forRoot(),
        NgbProgressbarModule.forRoot(),
        NgbRatingModule.forRoot(),
        NgbTabsetModule.forRoot(),
        NgbTimepickerModule.forRoot(),
        NgbTooltipModule.forRoot(),
        NgbTypeaheadModule.forRoot(),
        ToastModule
    ],
    providers: [
        ColorsService
    ],
    declarations: [
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        RouterModule,
        NgbAccordionModule,
        NgbAlertModule,
        NgbButtonsModule,
        NgbCarouselModule,
        NgbCollapseModule,
        NgbDatepickerModule,
        NgbDropdownModule,
        NgbModalModule,
        NgbPaginationModule,
        NgbPopoverModule,
        NgbProgressbarModule,
        NgbRatingModule,
        NgbTabsetModule,
        NgbTimepickerModule,
        NgbTooltipModule,
        NgbTypeaheadModule,
        ToastModule,
        FlotDirective,
        SparklineDirective,
        EasypiechartDirective,
        CheckallDirective,
        VectormapDirective,
        NowDirective,
        ScrollableDirective,
        JqcloudDirective
    ]
})


export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        };
    }
}
