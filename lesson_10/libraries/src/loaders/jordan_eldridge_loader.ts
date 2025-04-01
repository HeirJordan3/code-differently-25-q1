import csv from 'csv-parser';
import fs from 'fs';
import { Credit, MediaItem } from '../models/index.js';
import { Loader } from './loader.js';

export class JordanEldridgeLoader implements Loader {
  getLoaderName(): string {
    return 'jordaneldridge';
  }

  async loadData(): Promise<MediaItem[]> {
    const credits = await this.loadCredits();
    const mediaItems = await this.loadMediaItems();

    for (const credit of credits) {
      // 1. Look through the mediaItems list to find the one that matches the credit

      const mediaItem = mediaItems.find(
        (item) => item.getId() === credit.getMediaItemId(),
      );
      // 2. If we found a match, add that credit to the media item

      if (mediaItem) {
        mediaItem.addCredit(credit);
      }
    }

    console.log(
      `Loaded ${credits.length} credits and ${mediaItems.length} media items`,
    );

    return mediaItems;
  }



  async loadMediaItems(): Promise<MediaItem[]> {
    const media = [];
    const readable = fs
      .createReadStream('data/media_items.csv', 'utf-8')
      .pipe(csv());
    for await (const row of readable) {
      const { id, type, title, year } = row;
      media.push(new MediaItem(id, title, type, year, []));
    }
    return media;
  }

  async loadCredits(): Promise<Credit[]> {
    const credits = [];
    const readable = fs
      .createReadStream('data/credits.csv', 'utf-8')
      .pipe(csv());
    for await (const row of readable) {
      const { media_item_id, role, name } = row;
      credits.push(new Credit(media_item_id, name, role));
    }
    return credits;
  }
}
