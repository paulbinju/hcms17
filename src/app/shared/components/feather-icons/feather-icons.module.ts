import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FeatherIconsComponent } from "./feather-icons.component";

import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";

@NgModule({
  imports: [CommonModule, FeatherModule.pick(allIcons)],
  exports: [FeatherIconsComponent, FeatherModule],
  declarations: [FeatherIconsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FeatherIconsModule {}
