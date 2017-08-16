import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: TestComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [TestComponent],
    exports: [
        RouterModule
    ]
})
export class TestModule { }
