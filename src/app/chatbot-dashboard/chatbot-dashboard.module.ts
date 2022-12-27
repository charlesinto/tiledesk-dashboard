import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';

// import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelReplyToolsComponent } from './dashboard/panel-intent-detail/actions/action-reply/panel-reply-tools/panel-reply-tools.component';
import { ActionReplyComponent } from './dashboard/panel-intent-detail/actions/action-reply/action-reply.component';
import { TextResponseComponent } from './dashboard/panel-intent-detail/actions/action-reply/reply-types/text-response/text-response.component';
import { DelaySliderComponent } from './dashboard/panel-intent-detail/actions/action-reply/elements/delay-slider/delay-slider.component';
// import { ButtonConfigurationPanelComponent } from './dashboard/button-configuration-panel/button-configuration-panel.component';
import { ImageResponseComponent } from './dashboard/panel-intent-detail/actions/action-reply/reply-types/image-response/image-response.component';
import { FrameResponseComponent } from './dashboard/panel-intent-detail/actions/action-reply/reply-types/frame-response/frame-response.component';
import { ImagePanelComponent } from './dashboard/panel-intent-detail/actions/action-reply/elements/image-panel/image-panel.component';
import { PanelIntentListComponent } from './dashboard/panel-intent-list/panel-intent-list.component';
import { PanelIntentComponent } from './dashboard/panel-intent/panel-intent.component';
import { PanelActionsComponent } from './dashboard/panel-actions/panel-actions.component';
import { PanelIntentDetailComponent } from './dashboard/panel-intent-detail/panel-intent-detail.component';
import { PanelIntentHeaderComponent } from './dashboard/panel-intent-header/panel-intent-header.component';
import { PanelButtonConfigurationComponent } from './dashboard/panel-intent-detail/actions/action-reply/panel-button-configuration/panel-button-configuration.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PanelReplyToolsComponent,
    ActionReplyComponent,
    TextResponseComponent,
    DelaySliderComponent,
    // ButtonConfigurationPanelComponent,
    ImageResponseComponent,
    FrameResponseComponent,
    ImagePanelComponent,
    PanelIntentListComponent,
    PanelIntentComponent,
    PanelActionsComponent,
    PanelIntentDetailComponent,
    PanelIntentHeaderComponent,
    PanelButtonConfigurationComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgSelectModule,
    TextFieldModule,
    MatSliderModule,
    MatSelectModule,
    RouterModule,
    TranslateModule,
    FormsModule,
    MatInputModule
  ]
})
export class ChatbotDashboardModule { }