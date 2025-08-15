// src/lib/stores/comments.ts

import { writable } from 'svelte/store';

export interface Comment {
  id: number;
  author: string;
  text: string;
  timestamp: Date;
}

const initialComments: Comment[] = [
  { id: 1, author: 'GamerX', text: 'Elden Ring คือสุดยอดเกมแห่งปีจริงๆ!', timestamp: new Date() },
  { id: 2, author: 'SvelteFan', text: 'เว็บสวยมากเลยครับ ทำจาก Svelte ด้วย!', timestamp: new Date() }
];

function createCommentStore() {
  const { subscribe, update } = writable<Comment[]>(initialComments);

  return {
    subscribe,
    addComment: (author: string, text: string) => {
      const newComment: Comment = {
        id: Date.now(),
        author,
        text,
        timestamp: new Date()
      };
      update(comments => [...comments, newComment]);
    }
  };
}

// **สำคัญมาก: ตรวจสอบว่ามีบรรทัดนี้ เพื่อส่งออก store ไปให้ไฟล์อื่นใช้**
export const comments = createCommentStore();