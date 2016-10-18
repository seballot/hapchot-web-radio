import { ImageContentAdmnistrableItem } from '../../shared/image-content-administrable-item';
import { AIType } from '../../admin/shared/admin-item-config.module';

export class News extends ImageContentAdmnistrableItem { 

  constructor() {
    super(AIType.News);
  }
}

