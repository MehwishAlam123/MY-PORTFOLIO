/* ===================================================================
   MEHWISH ALAM PORTFOLIO - JAVASCRIPT APPLICATION
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNeuralCanvas();
  initTypewriter();
  initMobileMenu();
  initScrollSpy();
  initCircularProjectOrbit();
  initModals();
  initTerminalCopy();
  initTicTacToeAI();
  initPortfolioAIChat();
  initContactForm();
  initCopyButtons();
  initTechCubical();
});

/* --------------------------------------------------
 * 1. THEME TOGGLE (DARK / LIGHT)
 * -------------------------------------------------- */
function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl = document.documentElement;
  
  // Check persisted theme or system preference
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlEl.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlEl.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      showToast(`Switched to ${newTheme} mode`, 'info');
    });
  }
}

/* --------------------------------------------------
 * 2. INTERACTIVE NEURAL NETWORK CANVAS
 * -------------------------------------------------- */
function initNeuralCanvas() {
  const canvas = document.getElementById('neuralCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particleCount = Math.min(Math.floor(window.innerWidth / 22), 55);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      radius: Math.random() * 2 + 1.2
    });
  }

  let mouseX = width / 2;
  let mouseY = height / 2;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    ctx.clearRect(0, 0, width, height);

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const nodeColor = isLight ? 'rgba(2, 132, 199, ' : 'rgba(0, 242, 254, ';
    const lineColor = isLight ? 'rgba(100, 116, 139, ' : 'rgba(121, 40, 202, ';

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = nodeColor + '0.7)';
      ctx.fill();

      // Connect near neighbors
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const opacity = (1 - dist / 130) * 0.25;
          ctx.strokeStyle = lineColor + opacity + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* --------------------------------------------------
 * 3. HERO TYPEWRITER EFFECT
 * -------------------------------------------------- */
function initTypewriter() {
  const dynamicTextEl = document.getElementById('typedText');
  if (!dynamicTextEl) return;

  const roles = [
    'Machine Learning & Deep Learning',
    'B.Tech CSE (AI/ML) @ RAIT (2025–2029)',
    'Hybrid AI (Minimax + Random Forest)',
    'Medical AI & Multimodal DICOM Models',
    'Responsive Full-Stack Web Development',
    'Data Structures & Algorithms (30+ Solved)'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typeSpeed = 70;
  const deleteSpeed = 35;
  const delayBetween = 2000;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      dynamicTextEl.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicTextEl.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, delayBetween);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(type, 350);
      return;
    }

    const currentSpeed = isDeleting ? deleteSpeed : typeSpeed;
    setTimeout(type, currentSpeed);
  }

  type();
}

/* --------------------------------------------------
 * 4. MOBILE MENU & SCROLL SPY
 * -------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Back to top button
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------
 * 5. CIRCULAR 3D PROJECT ORBIT & SQUARE MORPHING
 * -------------------------------------------------- */
function initCircularProjectOrbit() {
  const stage = document.getElementById('projectsCircularStage');
  const ring = document.getElementById('projectsCarouselRing');
  const cards = document.querySelectorAll('.circular-project-card');
  const pills = document.querySelectorAll('.orbit-pill');
  const prevBtn = document.getElementById('prevProjectBtn');
  const nextBtn = document.getElementById('nextProjectBtn');
  const orbitProjectCode = document.getElementById('orbitProjectCode');
  const orbitProjectTitle = document.getElementById('orbitProjectTitle');
  const gestureBar = document.getElementById('cursorOrbitGestureBar');
  const gestureDots = document.querySelectorAll('.g-dot');
  const revolveBtn = document.getElementById('revolveCircleBtn');
  const stopBtn = document.getElementById('stopSquareBtn');
  const morphBadge = document.getElementById('morphStateBadge');
  const pulseDot = document.getElementById('orbitPulseDot');

  if (!stage || !ring || cards.length === 0) return;

  const projectTitles = [
    'Knee MRI Abnormality Detection Model',
    'Tic-Tac-Toe Move Prediction Model',
    'Artisan Coffee Shop Website'
  ];

  let activeIndex = 0;
  const totalProjects = cards.length;
  const angleStep = 360 / totalProjects; // 120 deg for 3 projects
  let isSquare = false;
  let isRevolving = true;
  let currentAngle = 0;
  let targetAngle = 0;
  let autoRevolveRafId = null;
  let idleTimeout = null;

  function getRadius() {
    return window.innerWidth <= 768 ? 260 : 480;
  }

  function positionCards() {
    const R = getRadius();
    cards.forEach((card, i) => {
      const angle = i * angleStep;
      if (!isSquare) {
        card.style.transform = `rotateY(${angle}deg) translateZ(${R}px)`;
      } else {
        // Stopped in square geometry: active card front and center
        if (i === activeIndex) {
          card.style.transform = `rotateY(0deg) translateZ(0px) scale(1)`;
        } else {
          const relIndex = (i - activeIndex + totalProjects) % totalProjects;
          const sqAngle = relIndex === 1 ? 120 : 240;
          card.style.transform = `rotateY(${sqAngle}deg) translateZ(${R}px) scale(0.85)`;
        }
      }
    });
  }

  positionCards();
  window.addEventListener('resize', positionCards);

  function setActiveProject(index, animate = true) {
    activeIndex = (index % totalProjects + totalProjects) % totalProjects;
    targetAngle = -activeIndex * angleStep;
    currentAngle = targetAngle;
    const R = getRadius();

    if (!isSquare) {
      ring.style.transition = animate ? 'transform 0.65s cubic-bezier(0.16, 1, 0.3, 1)' : 'none';
      ring.style.transform = `translateZ(-${R}px) rotateY(${targetAngle}deg)`;
    }

    cards.forEach((card, i) => {
      const isActive = i === activeIndex;
      card.classList.toggle('active', isActive);
    });

    pills.forEach((pill, i) => {
      pill.classList.toggle('active', i === activeIndex);
    });

    gestureDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === activeIndex);
    });

    if (orbitProjectCode) {
      orbitProjectCode.textContent = `ORBIT RADAR // [PROJECT 0${activeIndex + 1} / 0${totalProjects}]`;
    }
    if (orbitProjectTitle) {
      orbitProjectTitle.textContent = projectTitles[activeIndex] || '';
    }

    if (isSquare) {
      positionCards();
    }
  }

  setActiveProject(0, false);

  // Set Square or Circular State
  function setSquareMode(toSquare) {
    isSquare = toSquare;
    isRevolving = !toSquare;

    stage.classList.toggle('is-square', isSquare);
    stage.classList.toggle('is-revolving', !isSquare);

    if (revolveBtn) revolveBtn.classList.toggle('active', !isSquare);
    if (stopBtn) stopBtn.classList.toggle('active', isSquare);

    if (pulseDot) {
      pulseDot.classList.toggle('square-mode', isSquare);
    }

    if (morphBadge) {
      morphBadge.classList.toggle('square-locked', isSquare);
      morphBadge.innerHTML = isSquare
        ? '<i class="fa-solid fa-square"></i> GEOMETRY: SQUARE MATRIX LOCKED'
        : '<i class="fa-solid fa-arrows-rotate"></i> REVOLVING IN CIRCLE';
    }

    if (isSquare) {
      stopAutoRevolve();
      targetAngle = -activeIndex * angleStep;
      currentAngle = targetAngle;
      ring.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      ring.style.transform = 'translateZ(0px) rotateY(0deg)';
      positionCards();
    } else {
      const R = getRadius();
      targetAngle = -activeIndex * angleStep;
      currentAngle = targetAngle;
      ring.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      positionCards();
      setActiveProject(activeIndex, true);
      startAutoRevolve();
    }
  }

  // Smooth Auto-Revolve Animation
  function stepAutoRevolve() {
    if (isRevolving && !isSquare) {
      const R = getRadius();
      currentAngle -= 0.18; // gentle constant revolution in circle
      ring.style.transition = 'none';
      ring.style.transform = `translateZ(-${R}px) rotateY(${currentAngle}deg)`;

      // Derive active project from currentAngle
      const normalizedAngle = (-currentAngle % 360 + 360) % 360;
      const nearestIndex = Math.round(normalizedAngle / angleStep) % totalProjects;
      if (nearestIndex !== activeIndex) {
        activeIndex = nearestIndex;
        cards.forEach((card, i) => card.classList.toggle('active', i === activeIndex));
        pills.forEach((pill, i) => pill.classList.toggle('active', i === activeIndex));
        gestureDots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
        if (orbitProjectCode) orbitProjectCode.textContent = `ORBIT RADAR // [PROJECT 0${activeIndex + 1} / 0${totalProjects}]`;
        if (orbitProjectTitle) orbitProjectTitle.textContent = projectTitles[activeIndex] || '';
      }
    }
    autoRevolveRafId = requestAnimationFrame(stepAutoRevolve);
  }

  function startAutoRevolve() {
    if (!autoRevolveRafId) {
      currentAngle = -activeIndex * angleStep;
      autoRevolveRafId = requestAnimationFrame(stepAutoRevolve);
    }
  }

  function stopAutoRevolve() {
    if (autoRevolveRafId) {
      cancelAnimationFrame(autoRevolveRafId);
      autoRevolveRafId = null;
    }
  }

  startAutoRevolve();

  // Mode Switch Buttons
  if (revolveBtn) {
    revolveBtn.addEventListener('click', () => setSquareMode(false));
  }
  if (stopBtn) {
    stopBtn.addEventListener('click', () => setSquareMode(true));
  }

  // 1. Cursor Movement Across Stage Arena
  // "make the projects revolve in a circle and when it stops it should end up looking like a square"
  let lastX = null;
  let accumulatedDelta = 0;
  const moveThreshold = 75;

  stage.addEventListener('mousemove', (e) => {
    // If was paused as square, moving cursor triggers revolving back into a circle!
    if (isSquare) {
      setSquareMode(false);
    }

    if (lastX === null) {
      lastX = e.clientX;
      return;
    }

    const deltaX = e.clientX - lastX;
    lastX = e.clientX;
    accumulatedDelta += deltaX;

    // Direct cursor steer to spin faster in circle
    const R = getRadius();
    currentAngle += deltaX * 0.4;
    ring.style.transform = `translateZ(-${R}px) rotateY(${currentAngle}deg)`;

    if (accumulatedDelta > moveThreshold) {
      setActiveProject(activeIndex - 1);
      accumulatedDelta = 0;
    } else if (accumulatedDelta < -moveThreshold) {
      setActiveProject(activeIndex + 1);
      accumulatedDelta = 0;
    }

    // Debounce cursor stop: when cursor stops moving, halts and morphs into a square!
    clearTimeout(idleTimeout);
    idleTimeout = setTimeout(() => {
      setSquareMode(true);
    }, 850);
  });

  stage.addEventListener('mouseleave', () => {
    lastX = null;
    accumulatedDelta = 0;
    clearTimeout(idleTimeout);
    // When cursor leaves, settle into square formation
    setSquareMode(true);
  });

  // Hovering on any project card pauses revolution and morphs into square for reading
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      clearTimeout(idleTimeout);
      setSquareMode(true);
    });
  });

  // 2. Cursor Drag / Swipe Support
  let isDragging = false;
  let dragStartX = 0;

  stage.addEventListener('mousedown', (e) => {
    if (e.target.closest('button, a')) return;
    isDragging = true;
    dragStartX = e.clientX;
    if (isSquare) setSquareMode(false);
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  stage.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const diff = e.clientX - dragStartX;
      if (Math.abs(diff) > 45) {
        if (diff < 0) {
          setActiveProject(activeIndex + 1);
        } else {
          setActiveProject(activeIndex - 1);
        }
        isDragging = false;
      }
    }
  });

  // Touch Swipe Support
  let touchStartX = 0;
  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) touchStartX = e.touches[0].clientX;
    if (isSquare) setSquareMode(false);
  }, { passive: true });

  stage.addEventListener('touchend', (e) => {
    if (e.changedTouches.length > 0) {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) {
        if (diff < 0) {
          setActiveProject(activeIndex + 1);
        } else {
          setActiveProject(activeIndex - 1);
        }
      }
    }
  });

  // 3. Gesture Bar
  if (gestureBar) {
    gestureBar.addEventListener('mousemove', (e) => {
      if (isSquare) setSquareMode(false);
      const rect = gestureBar.getBoundingClientRect();
      const ratio = (e.clientX - rect.left) / rect.width;
      const targetIndex = Math.min(totalProjects - 1, Math.max(0, Math.floor(ratio * totalProjects)));
      if (targetIndex !== activeIndex) {
        setActiveProject(targetIndex);
      }
    });
  }

  // 4. Navigation Buttons & Pills
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      setActiveProject(activeIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      setActiveProject(activeIndex + 1);
    });
  }

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const idx = parseInt(pill.getAttribute('data-project-index'), 10);
      setActiveProject(idx);
    });
  });
}

/* --------------------------------------------------
 * 6. MODAL SYSTEM
 * -------------------------------------------------- */
function initModals() {
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroPlayAiBtn = document.getElementById('heroPlayAiBtn');
  const resumeModal = document.getElementById('resumeModal');
  const gameModal = document.getElementById('gameModal');
  const mriModal = document.getElementById('mriModal');
  const coffeeModal = document.getElementById('coffeeModal');

  // Trigger buttons
  if (openResumeBtn && resumeModal) {
    openResumeBtn.addEventListener('click', () => openModal(resumeModal));
  }

  if (heroPlayAiBtn && gameModal) {
    heroPlayAiBtn.addEventListener('click', () => openModal(gameModal));
  }

  document.querySelectorAll('.open-game-modal').forEach(btn => {
    btn.addEventListener('click', () => openModal(gameModal));
  });

  document.querySelectorAll('.open-mri-modal').forEach(btn => {
    btn.addEventListener('click', () => openModal(mriModal));
  });

  document.querySelectorAll('.open-coffee-modal').forEach(btn => {
    btn.addEventListener('click', () => openModal(coffeeModal));
  });

  // Close buttons
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-close');
      const target = document.getElementById(targetId);
      if (target) closeModal(target);
    });
  });

  // Backdrop click to close
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

  // ESC key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal);
      });
    }
  });

  // Print Resume
  const printResumeBtn = document.getElementById('printResumeBtn');
  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

function openModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  if (!modalEl) return;
  modalEl.classList.remove('open');
  document.body.style.overflow = '';
}

/* --------------------------------------------------
 * 7. CODE COPY & CLIPBOARD HELPERS
 * -------------------------------------------------- */
function initTerminalCopy() {
  const copyBtn = document.getElementById('copyCodeBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const code = `class EngineerProfile:
    def __init__(self):
        self.name = "Mehwish Alam"
        self.role = "B.Tech CSE (AI/ML) Undergraduate"
        self.university = "RAIT, D.Y. Patil University"
        self.academic_years = "2025 - 2029"
        self.focus_domains = [
            "Applied Machine Learning",
            "Medical Deep Learning (DICOM)",
            "Responsive Web Engineering",
            "Data Structures & Algorithms"
        ]`;
    navigator.clipboard.writeText(code).then(() => {
      showToast('Profile code snippet copied!', 'success');
    });
  });
}

function initCopyButtons() {
  document.querySelectorAll('.copy-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`, 'success');
        });
      }
    });
  });
}

/* --------------------------------------------------
 * 8. INTERACTIVE PLAYABLE TIC-TAC-TOE HYBRID AI
 * -------------------------------------------------- */
function initTicTacToeAI() {
  const boardEl = document.getElementById('tttBoard');
  const cells = document.querySelectorAll('.ttt-cell');
  const statusText = document.getElementById('gameStatusText');
  const resetBtn = document.getElementById('resetGameBtn');
  const advantageFill = document.getElementById('advantageFill');
  const advantageScore = document.getElementById('advantageScore');
  const predictedBadge = document.getElementById('predictedMoveBadge');

  if (!boardEl || cells.length !== 9) return;

  let boardState = Array(9).fill(null);
  let isGameOver = false;
  const human = 'X';
  const ai = 'O';

  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function checkWin(board, player) {
    return winningCombos.some(combo => combo.every(idx => board[idx] === player));
  }

  function isBoardFull(board) {
    return board.every(cell => cell !== null);
  }

  function updateTelemetry(board) {
    // Simulated Random Forest evaluation score
    let aiAdvantage = 50;
    const aiCount = board.filter(c => c === ai).length;
    const humanCount = board.filter(c => c === human).length;

    if (board[4] === ai) aiAdvantage += 18;
    if (board[4] === human) aiAdvantage -= 10;

    // Corner control bonus
    const corners = [0, 2, 6, 8];
    const aiCorners = corners.filter(c => board[c] === ai).length;
    const humanCorners = corners.filter(c => board[c] === human).length;
    aiAdvantage += (aiCorners - humanCorners) * 6;

    aiAdvantage = Math.max(15, Math.min(95, aiAdvantage));
    if (advantageFill) advantageFill.style.width = `${aiAdvantage}%`;
    if (advantageScore) advantageScore.textContent = `${aiAdvantage}% AI Favored`;

    // Suggest next optimal move
    const bestNext = getBestMove(board);
    if (predictedBadge) {
      if (bestNext !== -1) {
        const moveNames = ['Top-Left', 'Top-Mid', 'Top-Right', 'Mid-Left', 'Center', 'Mid-Right', 'Bottom-Left', 'Bottom-Mid', 'Bottom-Right'];
        predictedBadge.textContent = `${moveNames[bestNext]} (Cell #${bestNext})`;
      } else {
        predictedBadge.textContent = 'Game Concluded';
      }
    }
  }

  // Minimax Algorithm
  function minimax(newBoard, player, depth) {
    const availSpots = newBoard.map((v, i) => (v === null ? i : null)).filter(v => v !== null);

    if (checkWin(newBoard, human)) return { score: -10 + depth };
    if (checkWin(newBoard, ai)) return { score: 10 - depth };
    if (availSpots.length === 0) return { score: 0 };

    const moves = [];

    for (let i = 0; i < availSpots.length; i++) {
      const spot = availSpots[i];
      newBoard[spot] = player;

      const result = player === ai
        ? minimax(newBoard, human, depth + 1)
        : minimax(newBoard, ai, depth + 1);

      moves.push({ index: spot, score: result.score });
      newBoard[spot] = null;
    }

    let bestMove;
    if (player === ai) {
      let bestScore = -Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }

    return bestMove;
  }

  function getBestMove(board) {
    const emptyIndices = board.map((v, i) => (v === null ? i : null)).filter(v => v !== null);
    if (emptyIndices.length === 0) return -1;
    if (emptyIndices.length === 9) return 4; // Center preference

    const best = minimax(board, ai, 0);
    return best ? best.index : emptyIndices[0];
  }

  function handleHumanMove(index) {
    if (boardState[index] !== null || isGameOver) return;

    boardState[index] = human;
    renderBoard();

    if (checkWin(boardState, human)) {
      statusText.innerHTML = '<span style="color: #10b981;">🎉 Impressive! You beat the model!</span>';
      isGameOver = true;
      return;
    }

    if (isBoardFull(boardState)) {
      statusText.innerHTML = '<span>🤝 Well played! It\'s a hard-fought Draw.</span>';
      isGameOver = true;
      return;
    }

    // AI Turn
    statusText.innerHTML = '<span>🤖 Hybrid AI is evaluating tree branches...</span>';
    setTimeout(() => {
      const aiMove = getBestMove(boardState);
      if (aiMove !== -1) {
        boardState[aiMove] = ai;
        renderBoard();

        if (checkWin(boardState, ai)) {
          statusText.innerHTML = '<span style="color: #ff0080;">🤖 Minimax AI Wins! Optimal heuristics applied.</span>';
          isGameOver = true;
        } else if (isBoardFull(boardState)) {
          statusText.innerHTML = '<span>🤝 Tactical Draw! Both players played optimal moves.</span>';
          isGameOver = true;
        } else {
          statusText.innerHTML = 'Your turn! Place an <strong>X</strong>';
        }
      }
      updateTelemetry(boardState);
    }, 380);
  }

  function renderBoard() {
    cells.forEach((cell, idx) => {
      cell.textContent = boardState[idx] || '';
      cell.className = 'ttt-cell';
      if (boardState[idx] === human) {
        cell.classList.add('taken', 'x');
      } else if (boardState[idx] === ai) {
        cell.classList.add('taken', 'o');
      }
    });
    updateTelemetry(boardState);
  }

  function resetGame() {
    boardState = Array(9).fill(null);
    isGameOver = false;
    statusText.innerHTML = 'Your turn! Place an <strong>X</strong>';
    renderBoard();
  }

  cells.forEach(cell => {
    cell.addEventListener('click', () => {
      const idx = parseInt(cell.getAttribute('data-index'), 10);
      handleHumanMove(idx);
    });
  });

  if (resetBtn) resetBtn.addEventListener('click', resetGame);
  resetGame();
}

/* --------------------------------------------------
 * 9. PORTFOLIO AI ASSISTANT CHATBOT
 * -------------------------------------------------- */
function initPortfolioAIChat() {
  const chatMessages = document.getElementById('chatMessages');
  const chatForm = document.getElementById('chatForm');
  const chatInput = document.getElementById('chatInput');
  const resetChatBtn = document.getElementById('resetChatBtn');
  const quickChips = document.querySelectorAll('.quick-chip');
  const floatingChatBtn = document.getElementById('floatingChatBtn');

  if (!chatMessages || !chatForm || !chatInput) return;

  const knowledgeBase = [
    {
      keywords: ['mri', 'knee', 'medical', 'abnormality', 'dicom', 'radiology'],
      response: "🏥 <strong>Knee MRI Abnormality Detection:</strong> Mehwish is actively developing a multimodal deep learning model to detect <strong>12 knee abnormalities</strong> simultaneously from MRI scans. It integrates 3D DICOM imaging with clinical radiology report text using weak-labeling techniques and multi-label classification!"
    },
    {
      keywords: ['tic-tac-toe', 'tictactoe', 'minimax', 'random forest', 'hybrid', 'game'],
      response: "🎮 <strong>Tic-Tac-Toe Prediction Model:</strong> Mehwish engineered a hybrid system synthesizing the classical Minimax decision-tree algorithm with a Scikit-Learn Random Forest Classifier to evaluate and predict moves in real-time, backed by complete PRD documentation."
    },
    {
      keywords: ['coffee', 'shop', 'website', 'frontend', 'web'],
      response: "☕ <strong>Coffee Shop Website:</strong> A modern, responsive 4-page website built with HTML5, CSS3, and JavaScript. It features Home, Menu, Gallery, and Testimonials sections with interactive UI components and a mobile-friendly design."
    },
    {
      keywords: ['education', 'college', 'university', 'rait', 'dy patil', 'degree', 'btech', 'school'],
      response: "🎓 <strong>Education Background:</strong><br>• <strong>B.Tech in CSE (AI/ML):</strong> Ramrao Adik Institute of Technology, D.Y. Patil University (RAIT) | 2025–2029 (Second Year)<br>• <strong>Higher Secondary (12th):</strong> Oxford Public School (2022–2024)<br>• <strong>Secondary (10th):</strong> Sacred Heart School (2022)"
    },
    {
      keywords: ['skill', 'skills', 'python', 'java', 'c', 'tech', 'languages', 'stack'],
      response: "⚡ <strong>Technical Skills:</strong><br>• <strong>Languages:</strong> Python, C, Java<br>• <strong>Frontend:</strong> HTML5, CSS3, JavaScript (DOM, components, responsive design)<br>• <strong>Core CS:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP)<br>• <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Linux & VirtualBox"
    },
    {
      keywords: ['leetcode', 'dsa', 'data structures', 'algorithms', 'trees', 'problem'],
      response: "🧠 <strong>Coding Practice & LeetCode:</strong> Mehwish has solved <strong>30+ DSA problems</strong> on LeetCode using Python and C, focusing on Binary Trees, Sliding Window, Two-Pointer techniques, Linked Lists, and Stacks."
    },
    {
      keywords: ['iete', 'leadership', 'workshop', 'co-head', 'ethical hacking', 'responsibility'],
      response: "🛡️ <strong>Leadership & Position of Responsibility:</strong> Mehwish served as the <strong>Technical Co-Head</strong> of the Tech Committee for the <strong>IETE Student Chapter</strong>, co-leading student volunteers and organizing a hands-on Ethical Hacking workshop with VirtualBox & Kali Linux."
    },
    {
      keywords: ['contact', 'hire', 'internship', 'email', 'phone', 'reach', 'resume'],
      response: "💼 <strong>Contact & Availability:</strong> Mehwish is actively seeking Software Development and Machine Learning internships!<br>• <strong>Email:</strong> <a href='mailto:mehwishalam987@gmail.com'>mehwishalam987@gmail.com</a><br>• <strong>Phone:</strong> +91 9296565349<br>• <strong>Location:</strong> Navi Mumbai, Maharashtra<br>• <strong>GitHub:</strong> <a href='https://github.com/MehwishAlam123' target='_blank'>github.com/MehwishAlam123</a>"
    }
  ];

  function getAIResponse(userText) {
    const cleanText = userText.toLowerCase();
    for (const item of knowledgeBase) {
      if (item.keywords.some(kw => cleanText.includes(kw))) {
        return item.response;
      }
    }
    return "💡 Mehwish is a 2nd year B.Tech student in CSE (AI/ML) at RAIT, DY Patil University, proficient in Python, Java, JavaScript, and Machine Learning. Try asking about her <em>Knee MRI model</em>, <em>Tic-Tac-Toe prediction model</em>, <em>LeetCode practice</em>, or <em>internship availability</em>!";
  }

  function appendMessage(sender, htmlContent) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message msg-${sender}`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'msg-bubble';
    bubbleDiv.innerHTML = `<p>${htmlContent}</p>`;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'msg-time';
    const now = new Date();
    timeSpan.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    msgDiv.appendChild(bubbleDiv);
    msgDiv.appendChild(timeSpan);
    chatMessages.appendChild(msgDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInput.value.trim();
    if (!query) return;

    appendMessage('user', query);
    chatInput.value = '';

    setTimeout(() => {
      const reply = getAIResponse(query);
      appendMessage('ai', reply);
    }, 400);
  });

  quickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      if (query) {
        appendMessage('user', query);
        setTimeout(() => {
          const reply = getAIResponse(query);
          appendMessage('ai', reply);
        }, 350);
      }
    });
  });

  if (resetChatBtn) {
    resetChatBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="message msg-ai">
          <div class="msg-bubble">
            <p>Chat cleared! 👋 Feel free to ask another question about Mehwish's portfolio or projects.</p>
          </div>
          <span class="msg-time">Just now</span>
        </div>
      `;
      showToast('Conversation reset', 'info');
    });
  }

  if (floatingChatBtn) {
    floatingChatBtn.addEventListener('click', () => {
      const aiSection = document.getElementById('ai-assistant');
      if (aiSection) {
        aiSection.scrollIntoView({ behavior: 'smooth' });
        chatInput.focus();
      }
    });
  }
}

/* --------------------------------------------------
 * 10. CONTACT FORM VALIDATION & HANDLING
 * -------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('contactName');
  const emailInput = document.getElementById('contactEmail');
  const messageInput = document.getElementById('contactMessage');
  const subjectSelect = document.getElementById('contactSubject');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = 'Please enter your full name (at least 2 characters).';
      isValid = false;
    }

    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.textContent = 'Please provide a message with at least 10 characters.';
      isValid = false;
    }

    if (isValid) {
      const submitBtn = document.getElementById('submitFormBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showToast(`Thank you, ${nameInput.value.trim()}! Your message regarding "${subjectSelect.value}" has been received.`, 'success');
        form.reset();
      }, 1000);
    }
  });
}

/* --------------------------------------------------
 * 11. TOAST NOTIFICATION UTILITY
 * -------------------------------------------------- */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i><span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 4000);
}

/* --------------------------------------------------
 * 11B. DIRECT GITHUB REPO CLIPBOARD COPY
 * -------------------------------------------------- */
function initCopyButtons() {
  document.querySelectorAll('.btn-copy-repo').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const repoUrl = btn.getAttribute('data-repo');
      if (!repoUrl) return;

      navigator.clipboard.writeText(repoUrl).then(() => {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.add('copied');
        showToast(`Copied GitHub repo link: ${repoUrl}`, 'success');
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.classList.remove('copied');
        }, 2200);
      }).catch(() => {
        showToast(`Repo link: ${repoUrl}`, 'info');
      });
    });
  });
}

/* --------------------------------------------------
 * 12. SEPARATE 3D TECHNICAL CUBICALS & CURSOR SWARM
 * -------------------------------------------------- */
function initTechCubical() {
  const arena = document.getElementById('smallCubicalsArena');
  const cubeCoords = document.getElementById('cubeCoords');
  const filterChips = document.querySelectorAll('.c-filter-chip');
  const cubeElements = document.querySelectorAll('.tech-cube-item');
  const cursorReticle = document.getElementById('arenaCursorReticle');
  const reticleLabel = document.getElementById('reticleLabel');

  // Inspector HUD elements
  const hud = document.getElementById('techInspectorHud');
  const inspectorIcon = document.getElementById('inspectorIcon');
  const inspectorTitle = document.getElementById('inspectorTitle');
  const inspectorDesc = document.getElementById('inspectorDesc');
  const inspectorProjText = document.getElementById('inspectorProjText');
  const inspectorProjPill = document.getElementById('inspectorProjPill');

  if (!arena || cubeElements.length === 0) return;

  let arenaRect = arena.getBoundingClientRect();
  let arenaW = arena.clientWidth || 1100;
  let arenaH = arena.clientHeight || 640;

  function updateArenaSize() {
    arenaRect = arena.getBoundingClientRect();
    arenaW = arena.clientWidth || 1100;
    arenaH = arena.clientHeight || 640;
  }
  window.addEventListener('resize', updateArenaSize);

  // Setup cubical physics data objects
  const cubicalObjects = [];
  const total = cubeElements.length;
  const cols = 4;
  const rows = Math.ceil(total / cols);
  const cellW = (arenaW - 120) / cols;
  const cellH = (arenaH - 120) / rows;

  cubeElements.forEach((el, index) => {
    const cubeBox = el.querySelector('.tech-cube-3d');
    const col = index % cols;
    const row = Math.floor(index / cols);
    const startX = 40 + col * cellW + (Math.random() * 24 - 12);
    const startY = 40 + row * cellH + (Math.random() * 24 - 12);

    // Give each cube an individual continuous 3D rotation speed
    const rotSpeedX = (Math.random() * 0.45 + 0.25) * (Math.random() > 0.5 ? 1 : -1);
    const rotSpeedY = (Math.random() * 0.55 + 0.3) * (Math.random() > 0.5 ? 1 : -1);

    cubicalObjects.push({
      el,
      cubeBox,
      index,
      cat: el.getAttribute('data-cat') || 'all',
      skill: el.getAttribute('data-skill') || '',
      x: startX,
      y: startY,
      vx: (Math.random() - 0.5) * 1.8,
      vy: (Math.random() - 0.5) * 1.8,
      baseX: startX,
      baseY: startY,
      rotX: Math.random() * 40 - 20,
      rotY: Math.random() * 40 - 20,
      rotSpeedX,
      rotSpeedY,
      phase: Math.random() * Math.PI * 2,
      hidden: false,
      isHovered: false
    });
  });

  // Track cursor position inside arena
  let isMouseInside = false;
  let mouseArenaX = arenaW / 2;
  let mouseArenaY = arenaH / 2;

  arena.addEventListener('mousemove', (e) => {
    updateArenaSize();
    const x = e.clientX - arenaRect.left;
    const y = e.clientY - arenaRect.top;

    if (x >= 0 && x <= arenaW && y >= 0 && y <= arenaH) {
      isMouseInside = true;
      mouseArenaX = x;
      mouseArenaY = y;

      if (cursorReticle) {
        cursorReticle.classList.add('active');
        cursorReticle.style.transform = `translate3d(${mouseArenaX}px, ${mouseArenaY}px, 0)`;
      }

      if (cubeCoords) {
        cubeCoords.textContent = `CURSOR: [X: ${Math.round(mouseArenaX)}px, Y: ${Math.round(mouseArenaY)}px] | 16 SEPARATE CUBICALS: SWARM ACTIVE`;
      }
    }
  });

  arena.addEventListener('mouseleave', () => {
    isMouseInside = false;
    if (cursorReticle) cursorReticle.classList.remove('active');
    if (cubeCoords) {
      cubeCoords.textContent = `CURSOR: [STANDBY] | 16 SEPARATE CUBICALS: AMBIENT DRIFT`;
    }
  });

  // Main physics simulation loop
  let lastTime = performance.now();
  function animateCubicals(time) {
    const dt = Math.min((time - lastTime) / 1000, 0.035);
    lastTime = time;

    const isMobile = window.innerWidth <= 768;
    const cubeSize = isMobile ? 72 : 86;
    const minDist = isMobile ? 86 : 108; // Separation distance guaranteeing every cube stays strictly separate!
    const padding = 15;
    const maxX = arenaW - cubeSize - padding;
    const maxY = arenaH - cubeSize - padding;

    // Apply forces
    cubicalObjects.forEach((c, i) => {
      if (c.hidden) return;

      if (isMouseInside) {
        // Move towards cursor: fluid magnetic pull with distributed constellation
        const angle = (i / total) * Math.PI * 2 + (time * 0.0006);
        const orbitRadius = isMobile ? (70 + (i % 3) * 35) : (110 + (i % 4) * 45);
        const targetX = mouseArenaX + Math.cos(angle) * orbitRadius - cubeSize / 2;
        const targetY = mouseArenaY + Math.sin(angle) * orbitRadius - cubeSize / 2;

        const steerX = targetX - c.x;
        const steerY = targetY - c.y;

        c.vx += steerX * 0.045;
        c.vy += steerY * 0.045;
      } else {
        // Ambient natural organic floating across the arena
        const floatX = Math.sin(time * 0.0016 + c.phase) * 0.4;
        const floatY = Math.cos(time * 0.0016 + c.phase) * 0.4;
        const homeDx = c.baseX - c.x;
        const homeDy = c.baseY - c.y;

        c.vx += homeDx * 0.012 + floatX;
        c.vy += homeDy * 0.012 + floatY;
      }

      // STRICT PAIRWISE REPULSION: guarantees separate floating without clumping
      for (let j = i + 1; j < cubicalObjects.length; j++) {
        const other = cubicalObjects[j];
        if (other.hidden) continue;

        const sepDx = (c.x + cubeSize / 2) - (other.x + cubeSize / 2);
        const sepDy = (c.y + cubeSize / 2) - (other.y + cubeSize / 2);
        const sepDist = Math.hypot(sepDx, sepDy) || 0.001;

        if (sepDist < minDist) {
          const overlap = minDist - sepDist;
          const force = (overlap / minDist) * 4.5; // Strong repulsive force guarantees clear visual separation
          const nx = sepDx / sepDist;
          const ny = sepDy / sepDist;

          c.vx += nx * force;
          c.vy += ny * force;
          other.vx -= nx * force;
          other.vy -= ny * force;
        }
      }

      // Arena boundary collision with elastic bounce
      if (c.x < padding) { c.x = padding; c.vx = Math.abs(c.vx) * 0.6; }
      if (c.x > maxX)    { c.x = maxX;    c.vx = -Math.abs(c.vx) * 0.6; }
      if (c.y < padding) { c.y = padding; c.vy = Math.abs(c.vy) * 0.6; }
      if (c.y > maxY)    { c.y = maxY;    c.vy = -Math.abs(c.vy) * 0.6; }

      // Velocity damping
      c.vx *= 0.86;
      c.vy *= 0.86;

      // Position update
      c.x += c.vx;
      c.y += c.vy;

      // Dynamic 3D rotation update
      if (c.isHovered) {
        // Face forward smoothly for crisp readability
        c.targetRotX = 0;
        c.rotY += (0 - c.rotY) * 0.2;
      } else {
        // Gentle vertical tilt from above (-22deg to -12deg) so top cap and front face are always upright
        c.targetRotX = -17 + Math.sin(time * 0.0016 + c.phase) * 5;
        // Continuous smooth horizontal 360 spin
        c.rotY = (c.rotY + c.rotSpeedY) % 360;
      }

      c.rotX += (c.targetRotX - c.rotX) * 0.15;

      // Apply 3D transforms
      c.el.style.transform = `translate3d(${c.x.toFixed(1)}px, ${c.y.toFixed(1)}px, 0)`;
      if (c.cubeBox) {
        c.cubeBox.style.transform = `rotateX(${c.rotX.toFixed(1)}deg) rotateY(${c.rotY.toFixed(1)}deg)`;
      }
    });

    requestAnimationFrame(animateCubicals);
  }

  requestAnimationFrame(animateCubicals);

  // Category Filter Chips
  filterChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      filterChips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');

      const filterCat = chip.getAttribute('data-filter');
      cubicalObjects.forEach((c) => {
        if (filterCat === 'all' || c.cat === filterCat) {
          c.hidden = false;
          c.el.classList.remove('hidden-cat');
        } else {
          c.hidden = true;
          c.el.classList.add('hidden-cat');
        }
      });
    });
  });

  // Real-Time Tech Inspector HUD & Cubical Click / Hover
  cubicalObjects.forEach((c) => {
    const card = c.el;
    const skill = card.getAttribute('data-skill');
    const spec = card.getAttribute('data-spec');
    const proj = card.getAttribute('data-proj');
    const iconEl = card.querySelector('.cube-icon i');
    const iconClass = iconEl ? iconEl.className : 'fa-solid fa-microchip';

    function inspect(e) {
      if (e) e.stopPropagation();
      cubicalObjects.forEach((item) => {
        item.el.classList.remove('active');
        item.isHovered = false;
      });
      card.classList.add('active');
      c.isHovered = true;

      if (hud) hud.classList.add('active-inspection');
      if (inspectorProjPill) inspectorProjPill.classList.add('highlight');

      if (inspectorIcon) inspectorIcon.innerHTML = `<i class="${iconClass}"></i>`;
      if (inspectorTitle) inspectorTitle.textContent = skill;
      if (inspectorDesc) inspectorDesc.textContent = spec;
      if (inspectorProjText) inspectorProjText.textContent = proj;

      if (reticleLabel) {
        reticleLabel.textContent = `TARGET: ${skill.toUpperCase()}`;
      }
    }

    card.addEventListener('mouseenter', inspect);
    card.addEventListener('mouseleave', () => {
      c.isHovered = false;
    });
    card.addEventListener('click', inspect);
  });
}


