// ===== ECOSYSTEM PROJECTS =====
// To add more projects: just add more objects to this array
const ecosystemProjects = [
  {
    name: "FusnSwap",
    nameZh: "FusnSwap",
    descZh: "去中心化交换协议",
    descEn: "Decentralized Exchange Protocol",
    logo: "https://raw.githubusercontent.com/FusnChain/FusnChain/main/images/FusnSwap.png",
    url: "https://swap.fusn.network/",
    tag: "DEX"
  },
  {
    name: "FusnBridge",
    nameZh: "FusnBridge",
    descZh: "跨链资产桥接",
    descEn: "Cross-Chain Asset Bridge",
    logo: "https://raw.githubusercontent.com/FusnChain/FusnChain/main/images/FusnBridge.png",
    url: "https://www.fusnbridge.com/",
    tag: "Bridge"
  },
  {
    name: "FusnScan",
    nameZh: "FusnScan",
    descZh: "区块链浏览器",
    descEn: "Blockchain Explorer",
    logo: "https://raw.githubusercontent.com/FusnChain/FusnChain/main/images/FusnChain.logo1.png",
    url: "https://scan.fusn.network/",
    tag: "Explorer"
  },
  {
    name: "FusnAPI",
    nameZh: "FusnAPI",
    descZh: "开发者 API 接口",
    descEn: "Developer API Interface",
    logo: "https://raw.githubusercontent.com/FusnChain/FusnChain/main/images/FusnChain.logo1.png",
    url: "https://scan.fusn.network/api-docs",
    tag: "Developer"
  },
  // ---- Add more ecosystem projects below ----
  // {
  //   name: "ProjectName",
  //   nameZh: "项目名",
  //   descZh: "项目描述",
  //   descEn: "Project description",
  //   logo: "path/to/logo.png",
  //   url: "https://...",
  //   tag: "Category"
  // },
];

// ===== PARTNERS =====
// To add more partners: just add more objects to this array
const partners = [
  // ---- Add partners below ----
  // {
  //   name: "Partner Name",
  //   logo: "https://...",
  //   url: "https://..."
  // },
];

// ===== RENDER ECOSYSTEM =====
function renderEcosystem() {
  const grid = document.getElementById('ecosystem-grid');
  if (!grid) return;
  const lang = document.documentElement.getAttribute('data-lang') || 
    (document.body.__x ? document.body.__x.$data.lang : 'zh');

  grid.innerHTML = ecosystemProjects.map((p, i) => `
    <a href="${p.url}" target="_blank"
       class="card-hover bg-gray-800 p-6 rounded-xl border border-gray-700 text-center group"
       data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
      <span class="inline-block px-2 py-1 text-xs bg-blue-500/20 text-blue-400 rounded mb-4">${p.tag}</span>
      <img src="${p.logo}" alt="${p.name}" class="h-14 mx-auto mb-4 object-contain"
        onerror="this.onerror=null;this.src='https://raw.githubusercontent.com/FusnChain/FusnChain/main/images/FusnChain.logo1.png'">
      <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400 transition">${p.name}</h3>
      <p class="text-gray-400 text-sm eco-desc" data-zh="${p.descZh}" data-en="${p.descEn}"></p>
    </a>
  `).join('');
}

// ===== RENDER PARTNERS =====
function renderPartners() {
  const grid = document.getElementById('partners-grid');
  if (!grid) return;

  if (partners.length === 0) {
    // Show placeholder slots when no partners yet
    const placeholders = Array.from({length: 5}, (_, i) => `
      <div class="card-hover bg-gray-800 p-6 rounded-xl border border-dashed border-gray-600 text-center flex items-center justify-center h-24"
           data-aos="fade-up" data-aos-delay="${i * 80}">
        <span class="text-gray-600 text-sm" id="partner-placeholder">Coming Soon</span>
      </div>
    `);
    grid.innerHTML = placeholders.join('');
    return;
  }

  grid.innerHTML = partners.map((p, i) => `
    <a href="${p.url}" target="_blank"
       class="card-hover bg-gray-800 p-6 rounded-xl border border-gray-700 flex items-center justify-center h-24"
       data-aos="fade-up" data-aos-delay="${i * 80}">
      <img src="${p.logo}" alt="${p.name}" class="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition"
        onerror="this.onerror=null;this.parentNode.innerHTML='<span class=\'text-gray-400 font-bold\'>${p.name}</span>'">
    </a>
  `).join('');
}

// ===== UPDATE LANGUAGE =====
function updateLanguage(lang) {
  document.querySelectorAll('.eco-desc').forEach(el => {
    el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
  document.querySelectorAll('#partner-placeholder').forEach(el => {
    el.textContent = lang === 'zh' ? '即将公布' : 'Coming Soon';
  });
}

// ===== TOKENOMICS CHART =====
function renderChart() {
  const ctx = document.getElementById('tokenChart');
  if (!ctx) return;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Staking (90%)', 'Mining (10%)'],
      datasets: [{
        data: [90, 10],
        backgroundColor: ['#1E6BFF', '#00D4FF'],
        borderColor: ['#1E6BFF', '#00D4FF'],
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: '#9CA3AF', font: { size: 14 } }
        }
      },
      cutout: '65%'
    }
  });
}

// ===== COPY ADDRESS =====
function copyAddress() {
  const addr = '0x39da1edc75798eab229b7d92593e0a6684645a70';
  navigator.clipboard.writeText(addr).then(() => {
    const btn = document.querySelector('[onclick="copyAddress()"]');
    if (btn) { btn.textContent = '✅'; setTimeout(() => btn.textContent = '📋', 2000); }
  });
}

// ===== ADD TO WALLET =====
async function addToWallet() {
  if (typeof window.ethereum === 'undefined') {
    alert('Please install MetaMask or another Web3 wallet.');
    return;
  }
  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: '0x20BB',
        chainName: 'FusnChain',
        nativeCurrency: { name: 'FUSN', symbol: 'FUSN', decimals: 18 },
        rpcUrls: ['https://rpc.fusn.network/'],
        blockExplorerUrls: ['https://scan.fusn.network/']
      }]
    });
  } catch (err) {
    console.error(err);
  }
}

// ===== PARTICLES CONFIG =====
function initParticles() {
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: '#1E6BFF' },
        shape: { type: 'circle' },
        opacity: { value: 0.3, random: true },
        size: { value: 2, random: true },
        line_linked: { enable: true, distance: 150, color: '#1E6BFF', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 1.5, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'grab' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 140, line_linked: { opacity: 0.5 } }, push: { particles_nb: 4 } }
      },
      retina_detect: true
    });
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({ duration: 800, once: true, offset: 80 });
  renderEcosystem();
  renderPartners();
  renderChart();
  initParticles();
  updateLanguage('zh');
  
  // Watch Alpine.js language changes
  document.addEventListener('alpine:initialized', () => {
    Alpine.effect(() => {
      const lang = Alpine.store('lang');
    });
  });
  
  // MutationObserver to track lang changes via x-text updates
  const langBtn = document.querySelector('[\\@click*="lang"]');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setTimeout(() => {
        const bodyData = document.body.__x && document.body.__x.$data;
        const l = bodyData ? bodyData.lang : 'zh';
        updateLanguage(l);
      }, 50);
    });
  }
});
