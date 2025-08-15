<svelte:head>
  <title>Home - Horse account</title>
</svelte:head>

<!-- HERO SECTION: ส่วนที่เราจะแก้ไข -->
<section class="hero">
  <!-- เนื้อหาจะอยู่ตรงกลาง และอยู่บนสุด -->
  <div class="hero-content container">
    <h1 class="hero-title">Welcome to Horse account</h1>
    <p class="hero-subtitle">
      ร้านค้าสำหรับเกมเมอร์ตัวจริง! เราจำหน่ายบัญชีม้าในราคาที่คุ้มค่าที่สุด
      รับประกันของแท้ ส่งไวทันใจ พร้อมให้คุณเข้าสู่โลกแห่งด้านมืดและมิจฉาชีพได้ทันที
    </p>
    <a href="/products" class="hero-button">เลือกชมสินค้าทั้งหมด</a>
  </div>
</section>
<!-- END HERO SECTION -->


<section class="features">
  <div class="container">
    <h2 class="section-title">ทำไมต้องเลือกเรา?</h2>
    <div class="features-grid">
      <div class="feature-card">
        <h3>ส่งทันที</h3>
        <p>รับรหัสเกมของคุณทันทีหลังจากการชำระเงินสำเร็จ</p>
      </div>
      <div class="feature-card">
        <h3>ปลอดภัย 100%</h3>
        <p>มั่นใจได้กับระบบชำระเงินที่ปลอดภัยและรหัสเกมของแท้</p>
      </div>
      <div class="feature-card">
        <h3>บริการ 24/7</h3>
        <p>ทีมงานของเราพร้อมช่วยเหลือคุณตลอดเวลา</p>
      </div>
    </div>
  </div>
</section>

<style>
  /* --- HERO SECTION STYLES --- */
  .hero {
    position: relative; /* สำคัญมาก! เพื่อให้ Overlay (::before) ยึดตำแหน่งกับส่วนนี้ */
    display: flex; /* ใช้ Flexbox เพื่อจัดเนื้อหาให้อยู่ตรงกลางได้ง่าย */
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 0;
    min-height: 70vh; /* กำหนดความสูงของ Hero Section */

    /* --- รูปภาพพื้นหลัง --- */
    background-image: url('https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3224770/0396d46a4b49730b3ea4282e99e9d9c345bf2132/capsule_616x353.jpg?t=1750819298');
    background-size: cover; /* ทำให้รูปภาพเต็มพื้นที่เสมอ */
    background-position: center; /* จัดให้รูปภาพอยู่ตรงกลาง */
    background-repeat: no-repeat;
  }

  /* --- Overlay สีดำโปร่งแสง --- */
  .hero::before {
    content: ''; /* Pseudo-element ต้องมี content เสมอ */
    position: absolute; /* ทำให้ลอยอยู่เหนือพื้นหลัง */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6); /* สีดำโปร่งแสง 60% */
    z-index: 1; /* อยู่ชั้นที่ 1 (เหนือ background แต่ใต้ content) */
  }

  /* --- เนื้อหาที่อยู่บนสุด --- */
  .hero-content {
    position: relative; /* ทำให้เนื้อหาลอยอยู่เหนือ Overlay */
    z-index: 2; /* อยู่ชั้นที่ 2 (บนสุด) */
  }

  .hero-title {
    font-size: 3.5rem; /* เพิ่มขนาดตัวอักษรให้เด่นขึ้น */
    font-weight: 800;
    color: var(--primary-yellow);
    text-shadow: 2px 2px 8px rgba(0,0,0,0.7); /* เพิ่มเงาให้ตัวหนังสือคมชัดขึ้น */
  }

  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--light-gray);
    max-width: 60ch;
    margin: 1rem auto 0;
    text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  }

  .hero-button {
    display: inline-block;
    background-color: var(--primary-yellow);
    color: var(--dark-gray);
    font-weight: bold;
    padding: 0.75rem 2rem;
    border-radius: var(--border-radius);
    margin-top: 2rem;
    font-size: 1.1rem;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  .hero-button:hover {
    transform: scale(1.05);
    background-color: #ffd43b;
  }

  /* --- FEATURES SECTION STYLES (โค้ดเดิม) --- */
  .features {
    padding: 4rem 0;
    background-color: var(--medium-gray);
  }
  .section-title {
    text-align: center;
    font-size: 2.25rem;
    font-weight: bold;
    color: var(--text-white);
    margin-bottom: 2.5rem;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }
  .feature-card {
    background-color: var(--dark-gray);
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
  }
  .feature-card h3 {
    color: var(--primary-yellow);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
</style>