import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { YoutubeResponse, YoutubeItem } from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  public videosMock: YoutubeItem[] = [
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Kq-9mzFf1I2LRyeEko4DAb5CdBA"',
        id: {
            kind: 'youtube#video',
            videoId: '3fumBcKC6RE'
        },
        snippet: {
            publishedAt: '2011-05-12T20:01:31.000Z',
            channelId: 'UCEOhcOACopL42xyOBIv1ekg',
            title: 'Lil Wayne - John ft. Rick Ross (Explicit) (Official Music Video)',
            description: 'Music video by Lil Wayne performing John. (C) 2011 Cash Money Records Inc.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/3fumBcKC6RE/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'LilWayneVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/SrWYkel_jsoVI32tSArn5l6GoSI"',
        id: {
            kind: 'youtube#video',
            videoId: '3D5oO5qmAuY'
        },
        snippet: {
            publishedAt: '2020-05-02T20:16:22.000Z',
            channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
            title: 'Roblox Powering Moderation',
            description: 'thank you #roblox very cool!',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/3D5oO5qmAuY/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/3D5oO5qmAuY/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/3D5oO5qmAuY/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JOHN ROBLOX',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/3oqcNz-5sDPRX5dmsV8uxfkuzxo"',
        id: {
            kind: 'youtube#video',
            videoId: 'WNd0Ewzd1tw'
        },
        snippet: {
            publishedAt: '2020-02-28T10:59:32.000Z',
            channelId: 'UCtke4StIE5z2EiF85Zeqb-A',
            title: '5GANG - JOHN CENA (Official Video)',
            description: 'Magazin Oficial 5GANG™: https://shop.5gang.ro @5GANG: @Selly @Gami @Diana C @Madalin Serban @PAIN Daca vreti sa va inscrieti in concurs pentru a ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/WNd0Ewzd1tw/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Selly',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/wXZgJfxPyl7WVjwVyJr9U-t7Csg"',
        id: {
            kind: 'youtube#video',
            videoId: 'CfihYWRWRTQ'
        },
        snippet: {
            publishedAt: '2013-05-08T20:00:30.000Z',
            channelId: 'UC7KqPOHnMTzdBjkbTQp5ebg',
            title: 'John Newman - Love Me Again',
            description: 'Debut album \'Tribute\' is out now: https://JohnNewman.lnk.to/tributeID New album \'Revolve\' is available to pre-order now (released 16th Oct 2015). Get signed ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/CfihYWRWRTQ/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JohnNewmanVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/HY_Q6YVFuxTsJwCLCFq1tibsK7w"',
        id: {
            kind: 'youtube#video',
            videoId: '450p7goxZqg'
        },
        snippet: {
            publishedAt: '2013-10-02T14:00:06.000Z',
            channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
            title: 'John Legend - All of Me (Edited Video)',
            description: 'John Legend\'s official music video for \'All Of Me\'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?IQid=... As featured on Love In The ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/450p7goxZqg/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/450p7goxZqg/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/450p7goxZqg/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'johnlegendVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/2HxHWsmx18Eh_l8NH9rQkD1B0CY"',
        id: {
            kind: 'youtube#video',
            videoId: 'VMjk_7yBboY'
        },
        snippet: {
            publishedAt: '2020-04-28T15:00:26.000Z',
            channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
            title: 'Let&#39;s Keep You Safe Baby John | No No Seat Belt! | Little Angel Kids Songs',
            description: 'Baby John decides to venture out in the world, but he needs to learn how to be safe. With the help of his family, Baby John learns the importance of always ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/VMjk_7yBboY/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/VMjk_7yBboY/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/VMjk_7yBboY/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel Playtime',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/qH2x2vb6nAVApD5ex5M5pNLpvKQ"',
        id: {
            kind: 'youtube#video',
            videoId: '4JUkzxEsdUs'
        },
        snippet: {
            publishedAt: '2020-05-03T06:51:26.000Z',
            channelId: 'UCMgbYmq6I5zcQUiCN-k_pFA',
            title: '🔴#Sunday #Online #Live Worship On 3rd May 2020 | #CHRIST WORSHIP CENTRE | #John Wesly Ministries',
            description: 'Welcome to John Wesly International Ministries and John Wesly Foundation. God has anointed Man of God, John Wesly to reach out millions around the world ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/4JUkzxEsdUs/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/4JUkzxEsdUs/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/4JUkzxEsdUs/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'John Wesly Ministries',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Y7tzGO0rHgB13MDNkVfv9v2JwzQ"',
        id: {
            kind: 'youtube#video',
            videoId: 'SDqQY2qMMxw'
        },
        snippet: {
            publishedAt: '2012-10-31T03:02:34.000Z',
            channelId: 'UCCXmpUg7EJTf8pDsEDQUKrQ',
            title: 'The Holy Bible - Book 43 - John - KJV Dramatized Audio',
            description: 'This is the holy book of John, known as "The Gospel According to Saint John". The recording is dramatized, from the King James Bible. This is, in my opinion, the ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/SDqQY2qMMxw/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'tmantz625',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/p16Bx3qgHmfVokdMUEsdHORmB7Y"',
        id: {
            kind: 'youtube#video',
            videoId: 'HKWk1YVDMl4'
        },
        snippet: {
            publishedAt: '2020-03-17T22:28:26.000Z',
            channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
            title: 'hey john arsenal skin memes',
            description: 'zero two got destroyed lol credits to chaseroony and roxapox for voice acting. #roblox.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/HKWk1YVDMl4/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/HKWk1YVDMl4/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/HKWk1YVDMl4/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JOHN ROBLOX',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/1voTo9Kv0J-W9dchov4wBtvgELw"',
        id: {
            kind: 'youtube#video',
            videoId: 'trgEAhhYp7A'
        },
        snippet: {
            publishedAt: '2019-01-31T15:03:15.000Z',
            channelId: 'UCPoCWloyfRWsmfApN_svCYA',
            title: 'CEL MAI SINCER Q and A  (cu John)',
            description: 'Cadou: Ai 10% REDUCERE pe http://footshop.eu/ COD: SCOALAINVERS10 John pe Insta- https://www.instagram.com/radu.co/ Radu pe Insta- ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/trgEAhhYp7A/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/trgEAhhYp7A/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/trgEAhhYp7A/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Radu Constantin',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/EMpV69251s_qzsaMre59Dbu3LCI"',
        id: {
            kind: 'youtube#video',
            videoId: 'iXvy8ZeCs5M'
        },
        snippet: {
            publishedAt: '2012-03-13T07:00:07.000Z',
            channelId: 'UCNnnwVSI5Ndo2I4Y-LPuuew',
            title: 'John Legend - Tonight (Best You Ever Had) ft. Ludacris (Official Music Video)',
            description: 'John Legend\'s official music video for \'Tonight (Best You Ever Had) ft. Ludacris\'. Click to listen to John Legend on Spotify: http://smarturl.it/JohnLSpotify?',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/iXvy8ZeCs5M/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'johnlegendVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/5Nk_SwekBReAM83dIDLJObViIHo"',
        id: {
            kind: 'youtube#video',
            videoId: 'fJTBmCVaaTc'
        },
        snippet: {
            publishedAt: '2020-03-08T14:00:10.000Z',
            channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
            title: 'Baby John To The Rescue | Wheels On The Ambulance &amp; More Little Angel Kids Songs',
            description: 'When the family gets to the playground, Baby John becomes an ambulance driver. He decides to go out and save the day. Enjoy this version of the Wheels on ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/fJTBmCVaaTc/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/EGyXEygxaW6y0WDAQQSx_yh3Vok"',
        id: {
            kind: 'youtube#video',
            videoId: 'E-Pw5DFFiVg'
        },
        snippet: {
            publishedAt: '2020-03-05T18:00:03.000Z',
            channelId: 'UCaGKDR0HlJQcYkp-R6Myz4w',
            title: 'Greseli in 5GANG - JOHN CENA',
            description: 'daca vezi asta follow aici : https://www.instagram.com/stefan.shire/ Scris cu mazga: @plecxsus Videoclipul original : 5GANG - JOHN CENA Clipuri anterioare: ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/E-Pw5DFFiVg/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/E-Pw5DFFiVg/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/E-Pw5DFFiVg/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'ROVISION',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/KGtW_rnc2bfSxmZEH0UIMkcpphw"',
        id: {
            kind: 'youtube#video',
            videoId: '62n6dh6hSdU'
        },
        snippet: {
            publishedAt: '2020-05-01T22:33:52.000Z',
            channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
            title: 'ROBLOX ADMIN ABUSING IN TOWER DEFENSE SIMULATOR (Nuclear)',
            description: 'i do it again but this time where blue guys make boss go weeeeeee #roblox.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/62n6dh6hSdU/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/62n6dh6hSdU/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/62n6dh6hSdU/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JOHN ROBLOX',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/YU6I9Yb1wk_Huul_UPrA87dnecY"',
        id: {
            kind: 'youtube#video',
            videoId: 'OTAoNXmISkI'
        },
        snippet: {
            publishedAt: '2020-04-30T17:19:46.000Z',
            channelId: 'UCdntfVwTKE9c3zs0P9VwwxA',
            title: 'SCP-3199 A TUÉ MON FRÈRE SUR MINECRAFT SURVIE ....',
            description: 'Dans ce nouvel épisode de ma survie scp sur minecraft pour la découverte de scp 3199 Contact pro : jon.57@outlook.fr ✔️ ABONNE-TOI ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/OTAoNXmISkI/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/OTAoNXmISkI/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/OTAoNXmISkI/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'John 2.0',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/McdurrEUi7SKLTv63zgrwF2w5Kk"',
        id: {
            kind: 'youtube#video',
            videoId: 'WuICJ92MEKM'
        },
        snippet: {
            publishedAt: '2020-05-02T03:10:14.000Z',
            channelId: 'UCMgbYmq6I5zcQUiCN-k_pFA',
            title: 'Praying for the World | #LIVE Worship | 2nd May 2020 | #Dr John Wesly &amp; Mrs #Blessie Wesly',
            description: 'Welcome to John Wesly International Ministries and John Wesly Foundation. God has anointed Man of God, John Wesly to reach out millions around the world ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/WuICJ92MEKM/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/WuICJ92MEKM/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/WuICJ92MEKM/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'John Wesly Ministries',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/7-6sTGTKq7uzvFibV7hym7rPqNM"',
        id: {
            kind: 'youtube#video',
            videoId: 'DXKHgA1e71E'
        },
        snippet: {
            publishedAt: '2020-02-28T16:00:02.000Z',
            channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
            title: 'Daddy Got Sick | Baby John To The Rescue | Little Angel Kids Songs and Nursery Rhymes',
            description: 'While building a snowman outside, Daddy gets a cold. Watch as Jill and Baby John attempt to nurse Daddy back to full health. Enjoy this new version of the ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/DXKHgA1e71E/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/DXKHgA1e71E/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/DXKHgA1e71E/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ws2DEOaqf5naKl9fWi5LJ1d9Jow"',
        id: {
            kind: 'youtube#video',
            videoId: 'V7h80R9m4m8'
        },
        snippet: {
            publishedAt: '2020-05-02T02:41:57.000Z',
            channelId: 'UCeMgGu3weIJArIQ3Y30wp2A',
            title: 'Gaming-Livestream #1 (+ Zocken mit Zuschauern) | Stefan und John',
            description: 'Bitte hier kommentieren: https://kommentare.stefanundjohn.de/stream/11/details ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/V7h80R9m4m8/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/V7h80R9m4m8/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/V7h80R9m4m8/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Stefan und John - Familienleben als Vlog',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/K_HECi_b_pldIMQtHqLXq8QD-yM"',
        id: {
            kind: 'youtube#video',
            videoId: 'H9bGITkIHmM'
        },
        snippet: {
            publishedAt: '2019-08-15T13:00:14.000Z',
            channelId: 'UC2Qw1dzXDBAZPwS7zm37g8g',
            title: 'Sho Madjozi - John Cena | A COLORS SHOW',
            description: 'South African based artist Sho Madjozi shares a vibrant performance of previously unreleased single \'John Cena\' Follow ▷ Stream: ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/H9bGITkIHmM/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/H9bGITkIHmM/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/H9bGITkIHmM/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'COLORS',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/5ngbmdwSGpv6e_ctr4a9doMbv-c"',
        id: {
            kind: 'youtube#video',
            videoId: '6ACl8s_tBzE'
        },
        snippet: {
            publishedAt: '2014-09-12T07:00:01.000Z',
            channelId: 'UCaHNFIob5Ixv74f5on3lvIw',
            title: 'Calvin Harris - Blame ft. John Newman',
            description: 'Blame ft. John Newman is taken from the new album Motion, out now: Digital: http://smarturl.it/CHMotion?IQid=YT Stream: http://smarturl.it/StreamCH?IQid=YT ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/6ACl8s_tBzE/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'CalvinHarrisVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Ss8NgTIfLHbtjqi3e6rIC2pTZ3E"',
        id: {
            kind: 'youtube#video',
            videoId: 'en9ZkOo2rRA'
        },
        snippet: {
            publishedAt: '2017-09-10T08:52:42.000Z',
            channelId: 'UC4NALVCmcmL5ntpV0thoH6w',
            title: 'Are You Sleeping (Brother John)? - Amazing Songs for Children | LooLoo Kids',
            description: 'Are You Sleeping? Watch this super fun animated nursery rhyme created by LooLoo Kids and let\'s sing together Download our new app for and now: ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/en9ZkOo2rRA/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'LooLoo Kids - Nursery Rhymes and Children\'s Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/DpUy4H0FZKW_PS_iAIn2yN0RFu8"',
        id: {
            kind: 'youtube#video',
            videoId: 'Wu71w5KHd80'
        },
        snippet: {
            publishedAt: '2019-01-02T12:58:47.000Z',
            channelId: 'UCf3cbiNQccgbgzkQccLTKtw',
            title: 'John Cena Workout Motivation Best of John Cena 2018',
            description: 'Best videos of John Cena working out 2018.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/Wu71w5KHd80/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/Wu71w5KHd80/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/Wu71w5KHd80/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Workout Motivation',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/kH08mXBZwnOE1SAEWWiL8J6xpwk"',
        id: {
            kind: 'youtube#video',
            videoId: '3VCyQqbH11s'
        },
        snippet: {
            publishedAt: '2020-03-04T14:00:01.000Z',
            channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
            title: 'No More Snacks Baby John! | Yummy Vegetables &amp; Healthy Habits Song | Little Angel Kids Songs',
            description: 'Baby John\'s tummy hurts after eating too much snacks. Thankfully, mommy is here to prepare him yummy, healthy snacks like fruits and vegetables. Enjoy this ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/3VCyQqbH11s/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/3VCyQqbH11s/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/3VCyQqbH11s/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/q8-xvDRko_4JDqn26IrReSGIFhQ"',
        id: {
            kind: 'youtube#video',
            videoId: 'wZIOzFKlWjo'
        },
        snippet: {
            publishedAt: '2020-05-02T07:35:00.000Z',
            channelId: 'UCMtFAi84ehTSYSE9XoHefig',
            title: 'John Mulaney Reads The Internet&#39;s Community Calendar',
            description: 'Resident of The Internet, comedian John Mulaney, joins Stephen Colbert to announce real upcoming events that are available to attend online. To read more ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/wZIOzFKlWjo/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/wZIOzFKlWjo/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/wZIOzFKlWjo/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'The Late Show with Stephen Colbert',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ntX-Co4pwfm2JWomaRRULueerCw"',
        id: {
            kind: 'youtube#video',
            videoId: 'YkgkThdzX-8'
        },
        snippet: {
            publishedAt: '2016-12-18T15:19:53.000Z',
            channelId: 'UCYU4eunPInnHTNWfGvOgkbg',
            title: 'Imagine - John Lennon &amp; The Plastic Ono Band (w the Flux Fiddlers) (official music video  HD long v)',
            description: 'Imagine - The Ultimate Collection - the audio box set: http://bit.ly/imagine-ult Imagine John Yoko - the definitive book: http://bit.ly/imaginejohnyoko Imagine film ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/YkgkThdzX-8/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/YkgkThdzX-8/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/YkgkThdzX-8/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'johnlennon',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/E-X5maDQ_BBS58wvrrb5SN-mSH8"',
        id: {
            kind: 'youtube#video',
            videoId: '0RSY3Agv11E'
        },
        snippet: {
            publishedAt: '2017-11-16T20:51:05.000Z',
            channelId: 'UCkIBen3YHH9OiaidJYRoYhA',
            title: 'KREŠO BENGALKA - JOHN 3:16 (OFFICIAL VIDEO)',
            description: 'http://www.kresobengalka.com http://www.facebook.com/kresobengalkaofficial/ http://www.instagram.com/kresobengalkaofficial/ Booking contact: ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/0RSY3Agv11E/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/0RSY3Agv11E/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/0RSY3Agv11E/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Krešo Bengalka',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/bynNSL26LcuvfzW85u6OO0PLdwo"',
        id: {
            kind: 'youtube#video',
            videoId: 'EZforRcwTko'
        },
        snippet: {
            publishedAt: '2019-12-03T14:00:02.000Z',
            channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
            title: 'Baby John Does the Chicken Dance | Little Angel Nursery Rhymes &amp; Kids Songs',
            description: 'Baby John puts his little chicken costume and gets ready for the animal costume party at the daycare. He shakes his little chicken tail and learns how to do the ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/EZforRcwTko/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/EZforRcwTko/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/EZforRcwTko/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ifiWgwA8c3v_wLcMNaS4_dhzFOE"',
        id: {
            kind: 'youtube#video',
            videoId: 'NrLkTZrPZA4'
        },
        snippet: {
            publishedAt: '2010-09-01T15:28:09.000Z',
            channelId: 'UCI8Ry7NdFNLel-S8dWU7mDA',
            title: 'Elton John - Sacrifice',
            description: 'Directed by Alek Keshishian and starring Yasmeen Ghauri and Chris Isaak, the video for "Sacrifice" was filmed in Los Angeles in 1989. This second single from ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/NrLkTZrPZA4/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/NrLkTZrPZA4/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/NrLkTZrPZA4/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'EltonJohnVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/gUKt1V7Xxsic7zuxi68eOnM_tYE"',
        id: {
            kind: 'youtube#video',
            videoId: '3kyUPp6xpPc'
        },
        snippet: {
            publishedAt: '2012-05-22T02:42:53.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'John Cena vs. David Otunga: Raw, May 21, 2012',
            description: 'David Otunga looks to do what his boss did a night earlier and beat John Cena. Check out Superstar reactions to this moment - http://youtu.be/L5RIufakGN8.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/3kyUPp6xpPc/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/P_z7nh56LGnUsFvVR1pYAVPcrRM"',
        id: {
            kind: 'youtube#video',
            videoId: 'dRFbwjwQ4VE'
        },
        snippet: {
            publishedAt: '2020-04-20T06:30:04.000Z',
            channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
            title: 'Coronavirus V: Last Week Tonight with John Oliver (HBO)',
            description: 'As COVID-19 continues to dominate the news cycle, John Oliver looks at the various sources of misinformation about the disease - from televangelists and the ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/dRFbwjwQ4VE/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'LastWeekTonight',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/fEG8sszQvEpypIn9EBq63qJ_YWw"',
        id: {
            kind: 'youtube#video',
            videoId: 'EMKDsIKVFX8'
        },
        snippet: {
            publishedAt: '2020-04-30T19:42:36.000Z',
            channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
            title: 'Nuclear Update, can&#39;t win | Tower Defense Simulator ROBLOX',
            description: 'very cool, thank you games #roblox.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/EMKDsIKVFX8/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JOHN ROBLOX',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/FydSPlVKvXgnJDZ9hLn3dNVla50"',
        id: {
            kind: 'youtube#video',
            videoId: '2qERgf6UWIA'
        },
        snippet: {
            publishedAt: '2017-12-01T12:56:00.000Z',
            channelId: 'UCsPF3cApzCohxPp5oKdoWSQ',
            title: 'Are You Sleeping Brother John - 3D Nursery Rhymes &amp; Songs For Children',
            description: 'Are You Sleeping Brother John 3D Animation Nursery Rhymes & Kids Songs For Children.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/2qERgf6UWIA/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/2qERgf6UWIA/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/2qERgf6UWIA/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'CVS 3D Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/M0XXKgM1OsNnaLmrzsny9c3moQs"',
        id: {
            kind: 'youtube#video',
            videoId: '8ubWi1XuPTc'
        },
        snippet: {
            publishedAt: '2019-04-23T15:57:42.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'John Cena&#39;s 16 World Championship victories: WWE Milestones',
            description: 'One of the most decorated Superstars in WWE history, John Cena is a 16-time World Champion, tying the record set by two-time WWE Hall of Famer Ric Flair.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/8ubWi1XuPTc/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/8ubWi1XuPTc/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/8ubWi1XuPTc/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/X5KZcN20mEPcHZbAFUjHwKiadiw"',
        id: {
            kind: 'youtube#video',
            videoId: 'SJfQGBI9utA'
        },
        snippet: {
            publishedAt: '2020-05-02T13:00:56.000Z',
            channelId: 'UC0_j7SdW18oR5UqDRHf67WA',
            title: 'JOHN CENA BUAT HAL DI BAZAAR RAMADAN! - GTA RAMADAN SPECIAL (Bahasa Malaysia)',
            description: 'Grand Theft Auto (GTA) 5 Gameplay Bahasa Malaysia / GTA MALAYSIA ----- SyafiqHangouts https://www.youtube.com/channel/UCsA2jZqG_GEUI_JIXMi5nEQ ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/SJfQGBI9utA/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/SJfQGBI9utA/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/SJfQGBI9utA/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Syafiq Aiman',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/1FyRC_Y9Ys8tDvokCQqQYjxOPzw"',
        id: {
            kind: 'youtube#video',
            videoId: 'z3-Tm_aS3N0'
        },
        snippet: {
            publishedAt: '2019-06-18T07:00:05.000Z',
            channelId: 'UCbCmjCuTUZos6Inko4u57UQ',
            title: 'John Jacob Jingleheimer Schmidt | CoComelon Nursery Rhymes &amp; Kids Songs',
            description: 'Let\'s play "follow the leader". In this game, everyone follows and also leads. Subscribe for new videos every week: ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/z3-Tm_aS3N0/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Cocomelon - Nursery Rhymes',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/32E9cCGzDXYwZCRwbrkBJZTOW1k"',
        id: {
            kind: 'youtube#video',
            videoId: 'y-7dcUL0yzg'
        },
        snippet: {
            publishedAt: '2016-10-24T02:30:00.000Z',
            channelId: 'UCN8S4CqMRy6tVKVXvs7Bzeg',
            title: 'Big John - Motu Patlu in Hindi WITH ENGLISH, SPANISH &amp; FRENCH SUBTITLES',
            description: 'John the don is constantly teased about his tiny stature and short height. People mistake him for a child and treat him that way. He is so furious that he sets out to ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/y-7dcUL0yzg/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Wow Kidz',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/tgTbv3DBJ6ovQ9lCjIun-aRaxBI"',
        id: {
            kind: 'youtube#video',
            videoId: 'j8bDOqtogMg'
        },
        snippet: {
            publishedAt: '2020-03-30T01:00:05.000Z',
            channelId: 'UCojsj6T5tNPGPZSx7wn4coQ',
            title: 'hey john, roblox games meme',
            description: 'haha owned!! #roblox.',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/j8bDOqtogMg/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/j8bDOqtogMg/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/j8bDOqtogMg/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'JOHN ROBLOX',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/uKUc4ZKn-FZPWV1EUf6-VA1sMeU"',
        id: {
            kind: 'youtube#video',
            videoId: 'AM0mxqPpCQM'
        },
        snippet: {
            publishedAt: '2020-04-07T14:00:04.000Z',
            channelId: 'UCFBO5h2l4Py0hXtSzETH7mw',
            title: 'Baby John&#39;s New Best Friend | Pin Pon | Little Angel Kids Songs &amp; Nursery Rhymes',
            description: 'While playing indoors, Baby John decides to build himself a new best friend, Pin Pon. As best friends, they begin fun new adventures that include, cutting their ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/AM0mxqPpCQM/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel Playtime',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/UvEMyv-IfLcNIERpQueSNgOszlo"',
        id: {
            kind: 'youtube#video',
            videoId: 'r9D-uvKih_k'
        },
        snippet: {
            publishedAt: '2019-11-14T07:01:02.000Z',
            channelId: 'UCa1yUHQmV6Z0PpAUtfgNd9g',
            title: 'Christmas 2019 Ad | John Lewis &amp; Partners and Waitrose &amp; Partners',
            description: 'Together with Waitrose & Partners, we\'re excited to share the festive tale of a little girl and her excitable friend, Edgar. #ExcitableEdgar Our story this year is all ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/r9D-uvKih_k/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/r9D-uvKih_k/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/r9D-uvKih_k/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'John Lewis & Partners',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/knW0ujRK7txXgokcKC3OhDEUhjk"',
        id: {
            kind: 'youtube#video',
            videoId: 'YtZIHd3LN3w'
        },
        snippet: {
            publishedAt: '2016-10-11T18:00:01.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'John teaches Brie how to drive stick shift: Total Bellas Preview Clip, Oct. 12, 2016',
            description: 'Brie says John is a patient teacher. More ACTION on WWE NETWORK : http://wwenetwork.com Subscribe to WWE on YouTube: http://bit.ly/1i64OdT Must-See ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/YtZIHd3LN3w/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/Wxde311O1RylcJIAGKR1knKB-RA"',
        id: {
            kind: 'youtube#video',
            videoId: 'A0X-pGwYC4Y'
        },
        snippet: {
            publishedAt: '2020-05-01T13:31:30.000Z',
            channelId: 'UCE2606prvXQc_noEqKxVJXA',
            title: 'Ellen Adarna idinetalye ang co-parenting setup nila ni John Lloyd | TV Patrol',
            description: 'Idinetalye ni Ellen Adarna ang kanilang co-parenting set-up ni John Lloyd Cruz sa anak nilang si Elias. Inanunsiyo naman nina Coleen Garcia at Billy Crawford ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/A0X-pGwYC4Y/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/A0X-pGwYC4Y/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/A0X-pGwYC4Y/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'ABS-CBN News',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/4mHNKT9SY0Vpsw74jHgquSGyEog"',
        id: {
            kind: 'youtube#video',
            videoId: 'J9QX5r4Z1H8'
        },
        snippet: {
            publishedAt: '2020-01-22T15:00:02.000Z',
            channelId: 'UCNzsYU0aWwjERj-9Y9HUEng',
            title: 'It&#39;s Time to Sleep, Baby John! | Bedtime Routine Song | Little Angel Nursery Rhymes',
            description: 'Baby John doesn\'t want to follow his bedtime routine. The family comes together to get Baby John ready for bed! Enjoy this new version of The Bath and Bedtime ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/J9QX5r4Z1H8/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Little Angel: Nursery Rhymes & Kids Songs',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/sDgLEbQSuRKmApVVU3u7Ge3WZ3U"',
        id: {
            kind: 'youtube#video',
            videoId: 'ZbpcwqGpvWk'
        },
        snippet: {
            publishedAt: '2020-05-01T18:30:03.000Z',
            channelId: 'UCMgbYmq6I5zcQUiCN-k_pFA',
            title: 'యేసుతో స్నేహం (2 మే 2020) | జ్ఞానాన్ని ఎలా భద్రపరుచుకోవాలి ? | Dr John Wesly',
            description: 'Welcome to John Wesly International Ministries and John Wesly Foundation. God has anointed Man of God, John Wesly to reach out millions around the world ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/ZbpcwqGpvWk/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/ZbpcwqGpvWk/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/ZbpcwqGpvWk/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'John Wesly Ministries',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/OwRRWsz691EvaPg75m8PAohB1xU"',
        id: {
            kind: 'youtube#video',
            videoId: '42J_clIvoWA'
        },
        snippet: {
            publishedAt: '2020-04-12T13:00:02.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'FULL MATCH - John Cena vs Mark Henry – WWE Title Match: WWE Money in the Bank 2013',
            description: 'The Cenation Leader defends the WWE Championship against “The World\'s Strongest Man” Mark Henry: Courtesy of WWE Network. GET YOUR 1st MONTH of ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/42J_clIvoWA/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/42J_clIvoWA/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/42J_clIvoWA/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ami0SDEfWaWeLTKjY7IRByAR-u0"',
        id: {
            kind: 'youtube#video',
            videoId: 'JPQsip61_o0'
        },
        snippet: {
            publishedAt: '2019-11-14T08:25:17.000Z',
            channelId: 'UC7RQon_YwCnp_LbPtEwW65w',
            title: 'John Lewis Christmas advert 2019: Edgar the Dragon stars in Christmas ad for John Lewis &amp; Waitrose',
            description: 'Subscribe to the Evening Standard on YouTube: https://www.youtube.com/channel/UC7RQon_YwCnp_LbPtEwW65w?sub_confirmation=1 An exuberant young ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/JPQsip61_o0/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/JPQsip61_o0/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/JPQsip61_o0/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'Evening Standard',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ysvp56XOQkk1yxttZcpNQ6if5SQ"',
        id: {
            kind: 'youtube#video',
            videoId: '6s4Bx7mzNkM'
        },
        snippet: {
            publishedAt: '2020-04-13T06:45:02.000Z',
            channelId: 'UC3XTzVzaHQEd30rQbuvCtTQ',
            title: 'Coronavirus IV: Last Week Tonight with John Oliver (HBO)',
            description: 'John Oliver discusses how Coronavirus is impacting the US workforce, from mass unemployment to the problems faced by essential workers. Connect with Last ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/6s4Bx7mzNkM/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'LastWeekTonight',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/ge8UYXFuC4DpIp3rzXiT6iZ_fnc"',
        id: {
            kind: 'youtube#video',
            videoId: 'Tg-Q-Acv4qs'
        },
        snippet: {
            publishedAt: '2016-11-25T08:00:00.000Z',
            channelId: 'UCI8Ry7NdFNLel-S8dWU7mDA',
            title: 'Elton John - Nikita',
            description: 'Featuring George Michael on backing vocals at song\'s end, “Nikita” was one of Elton\'s most popular singles of the 1980s. The video shoot starred actress and ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/Tg-Q-Acv4qs/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/Tg-Q-Acv4qs/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/Tg-Q-Acv4qs/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'EltonJohnVEVO',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/sjBnTmlcXQEDD5wDocWF3fq8_kY"',
        id: {
            kind: 'youtube#video',
            videoId: 'CDkgg-IzutM'
        },
        snippet: {
            publishedAt: '2020-04-18T17:47:55.000Z',
            channelId: 'UC7BznjDn5e3uH_Zr362cUHQ',
            title: 'John McBride bị dọa giết,vì nói sự thật về chống covid-19 ở Mỹ,và Mỹ chính thức nhờ VN chống dịch.',
            description: 'JohnMcBride #JohnMcBride DAME.TV trân trọng cảm ơn sự ủng hộ của quý vị! Hãy Like, share và cho chúng tôi biết ý kiến của bạn về vấn đề này nhé!',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/CDkgg-IzutM/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/CDkgg-IzutM/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/CDkgg-IzutM/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'DAME. TV',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/rFSVEPaOhDLFY5_i1ZL4QaL0aOc"',
        id: {
            kind: 'youtube#video',
            videoId: 'JxxEuar_HV8'
        },
        snippet: {
            publishedAt: '2020-04-23T14:23:28.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'John Cena&#39;s most underrated moments: WWE Playlist',
            description: 'From providing an assist to The Rock at WrestleMania to taking on the entire Raw roster with Randy Orton, relive some of John Cena\'s most underrated ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/JxxEuar_HV8/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/JxxEuar_HV8/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/JxxEuar_HV8/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    },
    {
        kind: 'youtube#searchResult',
        etag: '"Dn5xIderbhAnUk5TAW0qkFFir0M/thm2rMp8mSRIJvSlZQu9Pec7fh0"',
        id: {
            kind: 'youtube#video',
            videoId: 'tb-g9YTBOGY'
        },
        snippet: {
            publishedAt: '2020-04-26T13:00:33.000Z',
            channelId: 'UCJ5v_MCY6GNUBTO8-D3XoAg',
            title: 'FULL MATCH - John Cena vs. Dolph Ziggler – Ladder Match: WWE TLC 2012',
            description: 'The Showoff\'s World Heavyweight Title Money in the Bank contract is at stake in a high-risk Ladder Match against The Cenation Leader: Courtesy of WWE ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/default.jpg',
                    width: 120,
                    height: 90
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/mqdefault.jpg',
                    width: 320,
                    height: 180
                },
                high: {
                    url: 'https://i.ytimg.com/vi/tb-g9YTBOGY/hqdefault.jpg',
                    width: 480,
                    height: 360
                }
            },
            channelTitle: 'WWE',
            liveBroadcastContent: 'none'
        }
    }
];

  constructor(private httpClient: HttpClient) {}

  public getVideos(): Observable<YoutubeItem[]> {
    return this.httpClient
      .get<YoutubeResponse>(environment.youtubeSearchUrl)
      .pipe(map((youtubeResponse: YoutubeResponse) => youtubeResponse.items));
  }
}
