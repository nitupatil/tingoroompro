const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

// Fetch keys directly from your single source of truth (config.js)
const CONFIG = require('./config.js'); 
const supabase = createClient(CONFIG.SUPABASE_URL, CONFIG.SUPABASE_ANON_KEY);
const SITE_URL = 'https://www.tingorooms.online';

const escapeAttr = (str) => {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
};

async function buildSite() {
  const rootPath = __dirname;
  const roomDir = path.join(rootPath, 'room');
  if (!fs.existsSync(roomDir)) { fs.mkdirSync(roomDir); }

  const { data: posts, error } = await supabase.from('posts').select('*').eq('status', 'approved').order('created_at', { ascending: false });
  if (error) { console.error('Error fetching posts:', error); process.exit(1); }
  const postsData = posts || [];

  // 1. GENERATE INDIVIDUAL SEO POST PAGES
  postsData.forEach((post) => {
    const mainImg = (post.image_urls && post.image_urls.length > 0) ? post.image_urls[0] : 'https://placehold.co/800x500/121212/dc2626?text=TingoRooms';
    const cleanTitle = escapeAttr(post.title || `${post.post_type === 'seeking' ? 'Need Room' : 'Room Available'} in ${post.location}`);
    const metaDesc = escapeAttr((post.description || '').slice(0, 160));

    // GENERATE CONTACT BLOCK (If user opted in)
    let contactHtml = '';
    if (post.show_contact && post.contact_number) {
        const waNum = post.whatsapp_number || post.contact_number;
        const cleanWa = waNum.replace(/\D/g, ''); // Removes spaces/pluses for the WhatsApp API link
        
        contactHtml = `
        <div class="meta-item" style="grid-column: 1 / -1; background: rgba(220,38,38,0.1); padding: 15px; border-radius: 8px; margin-top: 5px;">
            <span style="color:var(--muted); font-size:0.85rem; display:block; margin-bottom:8px;">Direct Contact Owner</span>
            <div style="display:flex; gap:20px; flex-wrap:wrap;">
                <a href="tel:${escapeAttr(post.contact_number)}" style="color:white; text-decoration:none; display:flex; align-items:center; gap:6px; font-weight:600;">
                    📞 ${escapeAttr(post.contact_number)}
                </a>
                <a href="https://wa.me/${cleanWa}" target="_blank" style="color:#25D366; text-decoration:none; display:flex; align-items:center; gap:6px; font-weight:600;">
                    💬 Chat on WhatsApp
                </a>
            </div>
        </div>`;
    }

    const postHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>${cleanTitle} | TingoRooms</title>
    <meta name="description" content="${metaDesc}">
    <meta property="og:title" content="${cleanTitle}">
    <meta property="og:description" content="${metaDesc}">
    <meta property="og:image" content="${mainImg}">
    <meta property="og:url" content="${SITE_URL}/room/${post.slug}">
    <meta property="og:type" content="article">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="/config.js"></script>
    <style>
        :root { --primary: #dc2626; --bg: #000000; --surface: #121212; --border: #262626; --text: #ffffff; --muted: #a3a3a3; }
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Inter',sans-serif; }
        body { background:var(--bg); color:var(--text); padding-bottom:80px; }
        header { padding:15px 20px; border-bottom:1px solid var(--border); display:flex; justify-content:space-between; align-items:center; background:rgba(0,0,0,0.9); position:sticky; top:0; z-index:10; }
        .logo { font-size:1.4rem; font-weight:800; text-decoration:none; color:#fff; }
        .logo span { color:var(--primary); }
        .hero-img { width:100%; max-height:420px; object-fit:cover; background:var(--surface); }
        .content { max-width:800px; margin:0 auto; padding:25px 20px; }
        .badge { display:inline-block; padding:5px 12px; border-radius:6px; font-size:0.8rem; font-weight:700; text-transform:uppercase; margin-bottom:12px; }
        .badge-offering { background:rgba(16,185,129,0.2); color:#10b981; }
        .badge-seeking { background:rgba(220,38,38,0.2); color:var(--primary); }
        h1 { font-size:1.8rem; font-weight:800; margin-bottom:10px; line-height:1.3; }
        .price { font-size:1.6rem; color:var(--primary); font-weight:800; margin-bottom:15px; }
        .meta-box { background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:15px; margin:20px 0; display:grid; grid-template-columns: 1fr 1fr; gap:15px; }
        .meta-item { display:flex; flex-direction:column; }
        .desc { font-size:1.05rem; line-height:1.7; color:#d4d4d8; margin:20px 0; white-space:pre-wrap; }
        .action-bar { position:fixed; bottom:0; left:0; width:100%; background:var(--surface); border-top:1px solid var(--border); padding:12px 20px; display:flex; justify-content:space-between; align-items:center; max-width:100%; z-index:100; }
        .btn-msg { background:var(--primary); color:#fff; padding:12px 25px; border-radius:8px; border:none; font-size:1rem; font-weight:700; cursor:pointer; }
    </style>
</head>
<body>
    <header>
        <a href="/" class="logo">Tingo<span>Rooms.</span></a>
        <a href="/" style="color:var(--muted); text-decoration:none; font-size:0.9rem;">← Back to feed</a>
    </header>
    <img src="${mainImg}" class="hero-img" alt="${cleanTitle}">
    <div class="content">
        <span class="badge ${post.post_type === 'seeking' ? 'badge-seeking' : 'badge-offering'}">${post.post_type === 'seeking' ? 'Looking for Room' : 'Room Available'}</span>
        <h1>${cleanTitle}</h1>
        <div class="price">₹${(post.rent_amount || 0).toLocaleString()} <span style="font-size:0.9rem; color:var(--muted); font-weight:400;">/ month</span></div>
        <div class="meta-box">
            <div class="meta-item"><span style="color:var(--muted); font-size:0.85rem;">Location</span><strong>📍 ${escapeAttr(post.location || 'Pune')}</strong></div>
            <div class="meta-item"><span style="color:var(--muted); font-size:0.85rem;">Deposit</span><strong>₹${(post.deposit_amount || 0).toLocaleString()}</strong></div>
            <div class="meta-item"><span style="color:var(--muted); font-size:0.85rem;">Brokerage</span><strong>₹${(post.brokerage_amount || 0).toLocaleString()}</strong></div>
            ${contactHtml}
        </div>
        <h3 style="margin-bottom:8px;">Description</h3>
        <div class="desc">${escapeAttr(post.description || 'No description provided.')}</div>
    </div>
    <div class="action-bar">
        <div><span style="font-size:0.8rem; color:var(--muted); display:block;">Interested?</span><strong>Contact Publisher</strong></div>
        <button class="btn-msg" onclick="openChat('${post.user_id}', '${post.id}')">In-App Chat</button>
    </div>
    <script>
        function openChat(ownerId, postId) {
            const token = localStorage.getItem('tingo_session_token');
            if(!token) {
                localStorage.setItem('redirect_after_login', window.location.pathname);
                window.location.href = '/auth';
                return;
            }
            window.location.href = '/chat?target_user=' + ownerId + '&post_id=' + postId;
        }
    </script>
</body>
</html>`;
    fs.writeFileSync(path.join(roomDir, `${post.slug}.html`), postHtml);
  });

  // 2. GENERATE STATIC INDEX.HTML (With Embedded Data & Instant Load)
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>TingoRooms | Verified Rooms & Flatmates in Pune</title>
    <meta name="description" content="Discover verified room rentals, shared apartments, and flatmates across Pune.">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root { --primary: #dc2626; --bg: #000000; --surface: #121212; --surface-light: #262626; --text-main: #ffffff; --text-muted: #a3a3a3; --shadow: 0 4px 6px -1px rgba(0,0,0,0.5); --nav-height: 65px; }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Inter', sans-serif; }
        body { background-color: var(--bg); color: var(--text-main); padding-bottom: calc(var(--nav-height) + 20px); }
        header { position: sticky; top: 0; background-color: rgba(0,0,0,0.85); backdrop-filter: blur(10px); padding: 15px 20px; z-index: 100; border-bottom: 1px solid var(--surface-light); }
        .header-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .logo { font-size: 1.5rem; font-weight: 800; text-decoration: none; color: #fff; }
        .logo span { color: var(--primary); }
        .search-wrapper { position: relative; }
        .search-input { width: 100%; padding: 12px 15px; background-color: var(--surface); border: 1px solid var(--surface-light); border-radius: 8px; color: white; font-size: 1rem; outline: none; }
        .search-input:focus { border-color: var(--primary); }
        .suggestions-box { position: absolute; top: 100%; left: 0; width: 100%; background: var(--surface); border: 1px solid var(--surface-light); border-radius: 8px; margin-top: 5px; max-height: 250px; overflow-y: auto; display: none; z-index: 101; box-shadow: var(--shadow); }
        .suggestion-item { padding: 12px 15px; border-bottom: 1px solid var(--surface-light); cursor: pointer; font-size: 0.9rem; color: var(--text-muted); display: flex; flex-direction: column; }
        .suggestion-item span.main-text { color: white; font-weight: 600; margin-bottom: 2px; }
        .suggestion-item span.sub-text { font-size: 0.75rem; color: #737373; }
        .suggestion-item:hover { background-color: var(--surface-light); }
        .feed-container { padding: 20px; max-width: 900px; margin: 0 auto; }
        .section-title { font-size: 1.1rem; font-weight: 600; margin-bottom: 15px; color: var(--text-muted); }
        .notice-banner { background: rgba(220,38,38,0.15); border: 1px solid rgba(220,38,38,0.4); color: #fca5a5; padding: 12px 16px; border-radius: 8px; font-size: 0.9rem; margin-bottom: 15px; display: none; }
        .card { background-color: var(--surface); border-radius: 12px; overflow: hidden; margin-bottom: 20px; box-shadow: var(--shadow); border: 1px solid var(--surface-light); cursor: pointer; text-decoration: none; color: inherit; display: block; transition: transform 0.2s; }
        .card:hover { transform: translateY(-2px); }
        .card-img { width: 100%; height: 200px; background-color: var(--surface-light); object-fit: cover; }
        .card-body { padding: 15px; }
        .card-price { color: var(--text-main); font-size: 1.4rem; font-weight: 700; margin-bottom: 5px; display:flex; align-items:center; gap:10px; flex-wrap:wrap; }
        .card-financials { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; background: rgba(255,255,255,0.05); padding: 4px 8px; border-radius: 6px; }
        .card-title { font-size: 1.1rem; font-weight: 500; margin-bottom: 8px; }
        .card-meta { display: flex; justify-content: space-between; font-size: 0.85rem; color: var(--text-muted); align-items: center; }
        .dist-badge { background: rgba(220, 38, 38, 0.15); color: var(--primary); padding: 4px 8px; border-radius: 4px; font-weight: 600; }
        .type-badge { font-size: 0.75rem; text-transform: uppercase; font-weight: 700; padding: 2px 6px; border-radius: 4px; }
        .type-seeking { background: rgba(239,68,68,0.2); color: #f87171; }
        .type-offering { background: rgba(16,185,129,0.2); color: #34d399; }
        .bottom-nav { position: fixed; bottom: 0; left: 0; width: 100%; height: var(--nav-height); background-color: var(--surface); border-top: 1px solid var(--surface-light); display: flex; justify-content: space-around; align-items: center; z-index: 1000; }
        .nav-item { color: var(--text-muted); text-decoration: none; display: flex; flex-direction: column; align-items: center; font-size: 0.75rem; font-weight: 500; width: 25%; }
        .nav-item.active { color: var(--primary); }
        .nav-icon { font-size: 1.4rem; margin-bottom: 4px; }
        .add-post-btn { background-color: var(--primary); color: white !important; width: 45px; height: 45px; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-size: 1.8rem; transform: translateY(-10px); box-shadow: 0 4px 10px rgba(220, 38, 38, 0.4); }
    </style>
</head>
<body>
    <header>
        <div class="header-top">
            <a href="/" class="logo">Tingo<span>Rooms.</span></a>
            <div id="user-greeting" style="font-size:0.9rem; color:var(--text-muted);">Welcome</div>
        </div>
        <div class="search-wrapper">
            <input type="text" id="searchInput" class="search-input" placeholder="Search areas, chowks, shops..." autocomplete="off">
            <div id="suggestionsBox" class="suggestions-box"></div>
        </div>
    </header>

    <main class="feed-container">
        <div id="noticeBanner" class="notice-banner"></div>
        <div class="section-title" id="feed-title">All Rooms in Pune</div>
        <div id="listings-wrapper"></div>
    </main>

    <nav class="bottom-nav">
        <a href="/" class="nav-item active"><span class="nav-icon">🏠</span>Home</a>
        <a href="/map" class="nav-item"><span class="nav-icon">🗺️</span>Map</a>
        <a href="/post" class="nav-item add-post-btn">+</a>
        <a href="/chat" class="nav-item"><span class="nav-icon">💬</span>Chat</a>
        <a href="/auth" class="nav-item"><span class="nav-icon">👤</span>Account</a>
    </nav>

    <script>
        const allPosts = ${JSON.stringify(postsData).replace(/</g, '\\u003c')};
        let userLat = null;
        let userLon = null;

        function calculateDistance(lat1, lon1, lat2, lon2) {
            if (!lat1 || !lon1 || !lat2 || !lon2) return null;
            const R = 6371; 
            const dLat = (lat2 - lat1) * Math.PI / 180;
            const dLon = (lon2 - lon1) * Math.PI / 180;
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
            return parseFloat((R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)))).toFixed(1));
        }

        function renderListings(postsToRender, isFallback = false, fallbackArea = '') {
            const wrapper = document.getElementById('listings-wrapper');
            const notice = document.getElementById('noticeBanner');
            wrapper.innerHTML = '';

            if (isFallback) {
                notice.style.display = 'block';
                notice.innerText = 'No exact matches in ' + fallbackArea + ' yet. Showing closest spaces nearby:';
            } else { notice.style.display = 'none'; }

            if (!postsToRender || postsToRender.length === 0) {
                wrapper.innerHTML = '<div style="text-align:center; padding:40px; color:var(--text-muted);">No rooms found.</div>';
                return;
            }

            postsToRender.forEach(post => {
                const imgUrl = (post.image_urls && post.image_urls.length > 0) ? post.image_urls[0] : 'https://placehold.co/400x200/262626/dc2626?text=TingoRooms';
                const distHtml = (post.distance !== null && post.distance !== undefined) ? '<span class="dist-badge">' + post.distance + ' km away</span>' : '';
                const typeClass = post.post_type === 'seeking' ? 'type-seeking' : 'type-offering';
                const typeText = post.post_type === 'seeking' ? 'Seeking' : 'Offering';
                const postUrl = post.slug ? '/room/' + post.slug : '/post-detail?id=' + post.id;

                wrapper.innerHTML += \`
                    <a class="card" href="\${postUrl}">
                        <img src="\${imgUrl}" class="card-img" alt="\${post.title || 'Room'}">
                        <div class="card-body">
                            <div class="card-price">
                                ₹\${(post.rent_amount || 0).toLocaleString()}/mo
                                <span class="card-financials">Dep: ₹\${(post.deposit_amount || 0).toLocaleString()} | Brk: ₹\${(post.brokerage_amount || 0).toLocaleString()}</span>
                            </div>
                            <div class="card-title">\${post.title || 'Room Listing'}</div>
                            <div class="card-meta">
                                <span>📍 \${post.location || 'Pune'} <span class="type-badge \${typeClass}">\${typeText}</span></span>
                                \${distHtml}
                            </div>
                        </div>
                    </a>
                \`;
            });
        }

        function sortAndRender(refLat, refLon, areaName = null) {
            let workingList = allPosts.map(p => ({ ...p }));
            if (refLat && refLon) {
                workingList.forEach(p => p.distance = calculateDistance(refLat, refLon, p.latitude, p.longitude));
                workingList.sort((a, b) => (a.distance ?? 9999) - (b.distance ?? 9999));

                if (areaName) {
                    const exactMatches = workingList.filter(p => (p.location || '').toLowerCase().includes(areaName.toLowerCase()) || (p.distance !== null && p.distance <= 5));
                    if (exactMatches.length === 0) {
                        renderListings(workingList, true, areaName);
                        return;
                    }
                }
            }
            renderListings(workingList);
        }

        const cachedLat = sessionStorage.getItem('tingo_user_lat');
        const cachedLon = sessionStorage.getItem('tingo_user_lon');
        if (cachedLat && cachedLon) {
            userLat = parseFloat(cachedLat);
            userLon = parseFloat(cachedLon);
            document.getElementById('feed-title').innerText = 'Rooms Near You';
            sortAndRender(userLat, userLon);
        } else {
            sortAndRender(null, null);
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    userLat = pos.coords.latitude;
                    userLon = pos.coords.longitude;
                    sessionStorage.setItem('tingo_user_lat', userLat);
                    sessionStorage.setItem('tingo_user_lon', userLon);
                    document.getElementById('feed-title').innerText = 'Rooms Near You';
                    sortAndRender(userLat, userLon);
                }, () => {}, { enableHighAccuracy: false, timeout: 4000 });
            }
        }

        const searchInput = document.getElementById('searchInput');
        const suggestionsBox = document.getElementById('suggestionsBox');
        let searchTimeout;

        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            if (query.length < 2) {
                suggestionsBox.style.display = 'none';
                if (query.length === 0) sortAndRender(userLat, userLon);
                return;
            }

            suggestionsBox.innerHTML = '<div class="suggestion-item"><span class="main-text" style="color:var(--primary); text-align:center;">Searching...</span></div>';
            suggestionsBox.style.display = 'block';

            searchTimeout = setTimeout(() => {
                fetch('https://photon.komoot.io/api/?q=' + encodeURIComponent(query) + '&lat=18.5204&lon=73.8567&limit=6')
                .then(r => r.json())
                .then(data => {
                    suggestionsBox.innerHTML = '';
                    if (data.features && data.features.length > 0) {
                        data.features.forEach(feature => {
                            const props = feature.properties;
                            const coords = feature.geometry.coordinates;
                            const div = document.createElement('div');
                            div.className = 'suggestion-item';
                            
                            const mainName = props.name || props.street || query;
                            const subName = [props.district, props.city, props.state].filter(Boolean).join(', ');
                            
                            div.innerHTML = \`<span class="main-text">\${mainName}</span><span class="sub-text">\${subName || 'Pune'}</span>\`;

                            div.onclick = () => {
                                searchInput.value = mainName;
                                suggestionsBox.style.display = 'none';
                                document.getElementById('feed-title').innerText = 'Near ' + mainName;
                                sortAndRender(coords[1], coords[0], mainName);
                            };
                            suggestionsBox.appendChild(div);
                        });
                        suggestionsBox.style.display = 'block';
                    } else {
                        suggestionsBox.innerHTML = '<div class="suggestion-item"><span class="sub-text" style="text-align:center;">No locations found</span></div>';
                    }
                }).catch(() => { suggestionsBox.style.display = 'none'; });
            }, 300);
        });

        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
                suggestionsBox.style.display = 'none';
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
            const userName = localStorage.getItem('tingo_user_name');
            if (userName) {
                document.getElementById('user-greeting').innerText = 'Hi, ' + userName.split(' ')[0];
                document.getElementById('user-greeting').style.color = '#fff';
            }
        });
    </script>
</body>
</html>`;

  fs.writeFileSync(path.join(rootPath, 'index.html'), indexHtml);
  console.log(`Successfully built site with ${postsData.length} listings inside the /room/ folder.`);
}

buildSite();
