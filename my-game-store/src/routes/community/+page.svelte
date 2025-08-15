<script lang="ts">
  import { comments } from '$lib/stores/comments';
  import { fly } from 'svelte/transition';

  let author = '';
  let text = '';

  function handleSubmit() {
    if (author.trim() && text.trim()) {
      comments.addComment(author, text);
      author = '';
      text = '';
    }
  }
</script>

<svelte:head>
  <title>Community - GameZone</title>
</svelte:head>

<div class="container page-container">
  <h1 class="page-title">Community Hub</h1>
  <p class="page-subtitle">พื้นที่สำหรับพูดคุย แลกเปลี่ยนความคิดเห็นเกี่ยวกับเกมต่างๆ</p>

  <div class="community-content">
    <!-- Form for new comment -->
    <div class="comment-form-wrapper">
      <h3>แสดงความคิดเห็น</h3>
      <form on:submit|preventDefault={handleSubmit}>
        <input bind:value={author} type="text" placeholder="ชื่อของคุณ" required />
        <textarea bind:value={text} placeholder="เขียนความคิดเห็น..." rows="4" required></textarea>
        <button type="submit">ส่งข้อความ</button>
      </form>
    </div>

    <!-- List of comments -->
    <div class="comment-list">
      {#each $comments.slice().reverse() as comment (comment.id)}
        <div in:fly={{ y: 20, duration: 300 }} class="comment-item">
          <div class="comment-header">
            <p class="comment-author">{comment.author}</p>
            <p class="comment-timestamp">{comment.timestamp.toLocaleString('th-TH')}</p>
          </div>
          <p class="comment-text">{comment.text}</p>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .page-container {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .page-title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-yellow);
  }
  .page-subtitle {
    text-align: center;
    color: var(--text-gray);
    margin-bottom: 2.5rem;
  }

  .community-content {
    max-width: 800px;
    margin: 0 auto;
  }

  /* Comment Form */
  .comment-form-wrapper {
    background-color: var(--dark-gray);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
  }
  .comment-form-wrapper h3 {
    font-size: 1.25rem;
    color: var(--primary-yellow);
    margin-bottom: 1rem;
  }
  .comment-form-wrapper form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .comment-form-wrapper input,
  .comment-form-wrapper textarea {
    width: 100%;
    padding: 0.75rem;
    background-color: var(--medium-gray);
    color: var(--text-white);
    border: 1px solid #777;
    border-radius: 4px;
    font-size: 1rem;
  }
  .comment-form-wrapper input:focus,
  .comment-form-wrapper textarea:focus {
    outline: none;
    border-color: var(--primary-yellow);
  }
  .comment-form-wrapper button {
    align-self: flex-start;
    background-color: var(--primary-yellow);
    color: var(--dark-gray);
    font-weight: bold;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }
  .comment-form-wrapper button:hover {
    background-color: #ffd43b;
  }

  /* Comment List */
  .comment-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .comment-item {
    background-color: var(--dark-gray);
    padding: 1rem;
    border-radius: var(--border-radius);
  }
  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  .comment-author {
    color: var(--primary-yellow);
    font-weight: bold;
  }
  .comment-timestamp {
    font-size: 0.8rem;
    color: var(--text-gray);
  }
  .comment-text {
    color: var(--light-gray);
    line-height: 1.6;
  }
</style>