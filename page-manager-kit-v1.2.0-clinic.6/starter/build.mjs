import {copyPageManagerAssets} from '@mcg/page-manager/assets';
import {cp} from 'node:fs/promises';
await copyPageManagerAssets('public/page-manager');
await cp(new URL('./article-images.css',import.meta.url),new URL('./public/page-manager/article-images.css',import.meta.url));