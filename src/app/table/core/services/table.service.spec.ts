import {TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TableService } from './table.service';

describe('TableService', () => {
  let tableService: TableService;
  let httpMock: HttpTestingController;
  const mocks = {
    videos: [
      {
        etag: 'etag',
        kind: 'king',

        snippet: {
          channelId: 'string',
          channelTitle: 'string',
          description: 'string',
          liveBroadcastContent: 'string',
          publishTime: 'string',
          publishedAt: 'string',
          thumbnails: {
            default: {
              url: 'string',
              width: 0,
              height: 0,
            },
            high: {
              url: 'string',
              width: 0,
              height: 0,
            },
            medium: {
              url: 'string',
              width: 0,
              height: 0,
            },
          },
          title: 'string',
        },
        id: {
          kind: 'string',
          videoId: 'string',
        },
      },
      {
        etag: 'etag',
        kind: 'king',

        snippet: {
          channelId: 'string',
          channelTitle: 'string',
          description: 'string',
          liveBroadcastContent: 'string',
          publishTime: 'string',
          publishedAt: 'string',
          thumbnails: {
            default: {
              url: 'string',
              width: 0,
              height: 0,
            },
            high: {
              url: 'string',
              width: 0,
              height: 0,
            },
            medium: {
              url: 'string',
              width: 0,
              height: 0,
            },
          },
          title: 'string',
        },
        id: {
          kind: 'string',
          videoId: 'string',
        },
      },
      {
        etag: 'etag',
        kind: 'king',

        snippet: {
          channelId: 'string',
          channelTitle: 'string',
          description: 'string',
          liveBroadcastContent: 'string',
          publishTime: 'string',
          publishedAt: 'string',
          thumbnails: {
            default: {
              url: 'string',
              width: 0,
              height: 0,
            },
            high: {
              url: 'string',
              width: 0,
              height: 0,
            },
            medium: {
              url: 'string',
              width: 0,
              height: 0,
            },
          },
          title: 'string',
        },
        id: {
          kind: 'string',
          videoId: 'string',
        },
      },
    ],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TableService],
    });

    tableService = TestBed.inject(TableService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should initialize TableService', () => {
    expect(tableService).toBeTruthy();
  });

  it('#getVideos should return appropriate result', async(async () => {
    tableService.getVideos().subscribe((items) => {
      expect(items.length).toBe(3);
      expect(items).toEqual(mocks.videos);
    });
  }));
});
