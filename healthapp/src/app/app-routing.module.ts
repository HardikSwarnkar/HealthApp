import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalInfoComponent } from './Component/additional-info/additional-info.component';
import { FormComponent } from './Component/form/form.component';
import { GetGeminiDataComponent } from './Component/get-gemini-data/get-gemini-data.component';

const routes: Routes = [
  { path: '', component : FormComponent, pathMatch: 'full' },
  { path: 'Additional-Information', component: AdditionalInfoComponent },
  { path: 'Response', component: GetGeminiDataComponent},
  { path: '**', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
