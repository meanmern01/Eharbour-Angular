import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './component/data-table/data-table.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTreeModule } from '@angular/material/tree';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBadgeModule } from '@angular/material/badge';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AlertPopupComponent } from './component/alert-popup/alert-popup.component';
import { LoadingMaskComponent } from './component/loading-mask/loading-mask.component';
import { ToastifyComponent } from './component/toastify/toastify.component';
import { UtilsService } from './utils/utils.service';
@NgModule({
  declarations: [DataTableComponent, AlertPopupComponent, LoadingMaskComponent, ToastifyComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatRippleModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatTreeModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatAutocompleteModule
  ],
  exports: [
    MatIconModule,
    MatGridListModule,
    MatStepperModule,
    MatInputModule,
    MatExpansionModule,
    MatRadioModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    DataTableComponent,
    LoadingMaskComponent,
    ToastifyComponent,
    AlertPopupComponent,
    MatTreeModule,
    MatTooltipModule,
    MatToolbarModule,
    MatTabsModule,
    MatSortModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatBottomSheetModule,
    MatBadgeModule,
    MatAutocompleteModule
  ],

  providers: [UtilsService, {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}]

})
export class SharedModule { }
