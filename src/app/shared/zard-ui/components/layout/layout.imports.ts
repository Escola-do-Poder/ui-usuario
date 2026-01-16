import { ContentComponent } from '@zard-ui/components/layout/content.component';
import { FooterComponent } from '@zard-ui/components/layout/footer.component';
import { HeaderComponent } from '@zard-ui/components/layout/header.component';
import { LayoutComponent } from '@zard-ui/components/layout/layout.component';
import {
  SidebarComponent,
  SidebarGroupComponent,
  SidebarGroupLabelComponent,
} from '@zard-ui/components/layout/sidebar.component';

export const LayoutImports = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ContentComponent,
  SidebarComponent,
  SidebarGroupComponent,
  SidebarGroupLabelComponent,
] as const;
