// BacterioReto - Lógica de Aplicación
// Alineado con el PRD de la Universidad de Boyacá y el diseño Stitch

import { flashcardsData } from './data/flashcards.js';
import { questionsData } from './data/questions.js';

// --- ESTADO GLOBAL DE LA APLICACIÓN ---
const state = {
  currentView: 'inicio-repaso',
  selectedTopicFilter: 'todos',
  searchQuery: '',
  
  // Reto Exprés
  quiz: {
    activeQuestions: [],
    currentIndex: 0,
    answersLog: [], // { question, selectedOption, isCorrect }
    score: 0,
    isAnswered: false,
    startTime: null,
    elapsedSeconds: 0,
    timerInterval: null
  }
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupFlashcardsView();
  renderCountersOnHome();
  navigateTo('inicio-repaso');
});

// --- ENRUTADOR / NAVEGACIÓN DE VISTAS ---
export function navigateTo(viewName, params = {}) {
  state.currentView = viewName;

  // Actualizar contenedores de vista en el DOM
  const views = ['inicio-repaso', 'fichas-de-estudio', 'reto-expres', 'mis-resultados-diagnostico'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === viewName) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Actualizar barra de navegación activa
  document.querySelectorAll('header nav a, #mobile-nav a').forEach(link => {
    const linkPath = link.getAttribute('data-path');
    if (linkPath === viewName) {
      link.classList.add('bg-surface-container', 'text-primary', 'font-semibold');
      link.classList.remove('text-on-surface-variant');
    } else {
      link.classList.remove('bg-surface-container', 'text-primary', 'font-semibold');
      link.classList.add('text-on-surface-variant');
    }
  });

  // Scroll arriba
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Disparadores específicos por vista
  if (viewName === 'fichas-de-estudio') {
    if (params.topic) {
      state.selectedTopicFilter = params.topic;
      updateTopicTabs();
    }
    if (params.search) {
      state.searchQuery = params.search;
      const searchInput = document.getElementById('search-flashcards');
      if (searchInput) searchInput.value = params.search;
    }
    renderFlashcards();
  } else if (viewName === 'reto-expres') {
    if (params.startNew || state.quiz.activeQuestions.length === 0) {
      startNewQuiz();
    } else {
      renderCurrentQuestion();
    }
  } else if (viewName === 'mis-resultados-diagnostico') {
    renderResultsView();
  }
}

function setupNavigation() {
  // Manejo de clicks en enlaces con data-path
  document.body.addEventListener('click', (e) => {
    const targetLink = e.target.closest('[data-path]');
    if (targetLink) {
      e.preventDefault();
      const path = targetLink.getAttribute('data-path');
      const topic = targetLink.getAttribute('data-topic');
      const startNew = targetLink.getAttribute('data-action') === 'restart-quiz';
      navigateTo(path, { topic, startNew });
    }
  });
}

function renderCountersOnHome() {
  const totalCardsEl = document.getElementById('stat-total-cards');
  const totalQuestionsEl = document.getElementById('stat-total-questions');
  if (totalCardsEl) totalCardsEl.textContent = flashcardsData.length;
  if (totalQuestionsEl) totalQuestionsEl.textContent = questionsData.length;
}

// --- VISTA 2: FICHAS DE ESTUDIO ---
function setupFlashcardsView() {
  // Selector de pestañas por tema
  const tabsContainer = document.getElementById('topic-tabs-container');
  if (tabsContainer) {
    tabsContainer.addEventListener('click', (e) => {
      const tabBtn = e.target.closest('[data-filter-topic]');
      if (tabBtn) {
        state.selectedTopicFilter = tabBtn.getAttribute('data-filter-topic');
        updateTopicTabs();
        renderFlashcards();
      }
    });
  }

  // Buscador en tiempo real
  const searchInput = document.getElementById('search-flashcards');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderFlashcards();
    });
  }
}

function updateTopicTabs() {
  document.querySelectorAll('[data-filter-topic]').forEach(btn => {
    const topic = btn.getAttribute('data-filter-topic');
    if (topic === state.selectedTopicFilter) {
      btn.className = 'px-4 py-2 rounded-lg font-headline-md text-body-sm font-bold bg-primary text-on-primary shadow-sm transition-all';
    } else {
      btn.className = 'px-4 py-2 rounded-lg font-body-md text-body-sm font-medium bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all';
    }
  });
}

function renderFlashcards() {
  const container = document.getElementById('flashcards-grid');
  const counterEl = document.getElementById('flashcards-count');
  if (!container) return;

  // Filtrado
  const filtered = flashcardsData.filter(card => {
    const matchesTopic = state.selectedTopicFilter === 'todos' || card.tema === state.selectedTopicFilter;
    if (!matchesTopic) return false;

    if (!state.searchQuery) return true;
    const query = state.searchQuery;
    return (
      card.titulo.toLowerCase().includes(query) ||
      card.subtitulo.toLowerCase().includes(query) ||
      card.anverso.concepto.toLowerCase().includes(query) ||
      card.anverso.destacado.toLowerCase().includes(query) ||
      card.reverso.mecanismo.toLowerCase().includes(query) ||
      card.reverso.tipParcial.toLowerCase().includes(query)
    );
  });

  if (counterEl) {
    counterEl.textContent = `${filtered.length} fichas encontradas`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center bg-surface-container-low rounded-xl p-8 border border-outline-variant/30">
        <span class="material-symbols-outlined text-[48px] text-outline mb-2">manage_search</span>
        <h4 class="font-headline-md text-headline-md text-on-surface font-bold">No se encontraron fichas</h4>
        <p class="font-body-md text-on-surface-variant mt-1 max-w-md mx-auto">
          Prueba con otra palabra clave como "Gram", "MacConkey", "violeta" o cambia el filtro de tema.
        </p>
        <button onclick="document.getElementById('search-flashcards').value=''; state.searchQuery=''; state.selectedTopicFilter='todos'; updateTopicTabs(); renderFlashcards();" class="mt-4 px-4 py-2 bg-primary text-on-primary rounded-lg text-body-sm font-semibold hover:bg-primary-container">
          Ver todas las fichas
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((card, idx) => {
    const badgeBg = card.badgeColor === 'primary' ? 'bg-primary-fixed text-on-primary-fixed-variant' :
                    card.badgeColor === 'secondary' ? 'bg-secondary-fixed text-on-secondary-fixed-variant' :
                    'bg-tertiary-fixed text-on-tertiary-fixed-variant';

    return `
      <div class="group h-[380px] [perspective:1000px] cursor-pointer" onclick="this.classList.toggle('flipped')">
        <div class="card-inner relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d]">
          
          <!-- ANVERSO DE LA FICHA -->
          <div class="absolute inset-0 w-full h-full bg-surface-container-lowest rounded-xl p-5 shadow-sm border border-outline-variant/30 [backface-visibility:hidden] flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div class="flex items-start justify-between gap-2 mb-3">
                <span class="px-2.5 py-0.5 rounded-full ${badgeBg} font-label-badge text-label-badge uppercase tracking-wider">
                  ${card.badge}
                </span>
                <span class="font-label-code text-label-code text-on-surface-variant flex items-center gap-1">
                  <span class="material-symbols-outlined text-[14px]">timer</span> ${card.tiempo}
                </span>
              </div>
              <span class="font-label-code text-label-code text-primary font-bold block uppercase tracking-wide">
                ${card.temaLabel}
              </span>
              <h4 class="font-headline-md text-[20px] text-on-surface font-bold leading-snug mt-1">
                ${card.titulo}
              </h4>
              <p class="font-body-sm text-on-surface-variant mt-1 text-[13px]">
                ${card.subtitulo}
              </p>
            </div>

            <!-- Concepto Central -->
            <div class="my-auto py-3 px-3.5 bg-surface-container-low rounded-lg border-l-4 border-primary">
              <span class="font-label-badge text-label-badge text-outline uppercase block mb-1">Concepto Clave</span>
              <p class="font-body-md text-on-surface text-[14px] leading-relaxed">
                ${card.anverso.concepto}
              </p>
              <div class="mt-2 pt-2 border-t border-outline-variant/20 flex items-center gap-1.5 text-primary font-semibold text-[13px]">
                <span class="material-symbols-outlined text-[16px]">biotech</span>
                <span>${card.anverso.destacado}</span>
              </div>
            </div>

            <!-- Pie de Anverso con pista para tocar -->
            <div class="pt-2 flex items-center justify-between text-on-surface-variant text-[12px] border-t border-outline-variant/20">
              <span class="flex items-center gap-1 text-primary font-medium">
                <span class="material-symbols-outlined text-[16px]">touch_app</span> Toca para voltear
              </span>
              <span class="font-label-code text-outline-variant">ID: ${card.id}</span>
            </div>
          </div>

          <!-- REVERSO DE LA FICHA (Explicación Bioquímica Profunda) -->
          <div class="absolute inset-0 w-full h-full bg-gradient-to-br from-primary via-primary-container to-surface-tint text-on-primary rounded-xl p-5 shadow-lg border border-primary-fixed/30 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between overflow-y-auto">
            <div>
              <div class="flex items-center justify-between pb-2 mb-2 border-b border-on-primary/20">
                <span class="font-label-badge text-label-badge uppercase tracking-wider text-secondary-fixed flex items-center gap-1">
                  <span class="material-symbols-outlined text-[16px]">verified</span> Fundamento Clínico
                </span>
                <span class="font-label-code text-label-code text-on-primary/80">${card.id}</span>
              </div>
              <h5 class="font-headline-md text-body-md font-bold text-on-primary mb-2">
                ${card.titulo}
              </h5>
              
              <div class="space-y-2.5 text-[13px] text-on-primary/95 leading-relaxed">
                <p>
                  <strong class="text-secondary-fixed font-semibold">Mecanismo:</strong> ${card.reverso.mecanismo}
                </p>
                <p>
                  <strong class="text-primary-fixed font-semibold">Relevancia en Lab:</strong> ${card.reverso.relevancia}
                </p>
              </div>
            </div>

            <!-- Perla de Examen -->
            <div class="mt-3 p-2.5 rounded-lg bg-surface-container-lowest/15 backdrop-blur-sm border border-on-primary/20 text-on-primary">
              <span class="font-headline-md text-label-badge uppercase text-secondary-fixed font-bold flex items-center gap-1 mb-0.5">
                <span class="material-symbols-outlined text-[15px]">tips_and_updates</span> Tip de Parcial:
              </span>
              <p class="font-body-sm text-on-primary text-[12px] leading-snug">
                ${card.reverso.tipParcial}
              </p>
            </div>

            <div class="pt-2 text-right">
              <span class="font-body-sm text-[11px] text-on-primary/70 flex items-center justify-end gap-1">
                <span class="material-symbols-outlined text-[14px]">undo</span> Toca para volver
              </span>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');
}

// --- VISTA 3: RETO EXPRÉS (10 PREGUNTAS) ---
function startNewQuiz() {
  // Limpiar temporizador previo si existe
  if (state.quiz.timerInterval) {
    clearInterval(state.quiz.timerInterval);
  }

  // Barajar y seleccionar 10 preguntas equilibradas entre los 4 temas
  const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
  // Tomar hasta 10 preguntas
  state.quiz.activeQuestions = shuffled.slice(0, 10);
  state.quiz.currentIndex = 0;
  state.quiz.answersLog = [];
  state.quiz.score = 0;
  state.quiz.isAnswered = false;
  state.quiz.elapsedSeconds = 0;
  state.quiz.startTime = Date.now();

  // Iniciar cronómetro de sesión
  state.quiz.timerInterval = setInterval(() => {
    state.quiz.elapsedSeconds++;
    const timerDisplay = document.getElementById('quiz-timer');
    if (timerDisplay) {
      const mins = Math.floor(state.quiz.elapsedSeconds / 60);
      const secs = state.quiz.elapsedSeconds % 60;
      timerDisplay.textContent = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
  }, 1000);

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const q = state.quiz.activeQuestions[state.quiz.currentIndex];
  if (!q) {
    navigateTo('mis-resultados-diagnostico');
    return;
  }

  state.quiz.isAnswered = false;

  // Actualizar indicadores de cabecera del reto
  const currentNumEl = document.getElementById('quiz-current-num');
  const progressPercentEl = document.getElementById('quiz-progress-bar');
  const totalQuestionsEl = document.getElementById('quiz-total-num');
  const scoreCounterEl = document.getElementById('quiz-current-score');
  
  const currentStep = state.quiz.currentIndex + 1;
  const total = state.quiz.activeQuestions.length;

  if (currentNumEl) currentNumEl.textContent = currentStep;
  if (totalQuestionsEl) totalQuestionsEl.textContent = total;
  if (progressPercentEl) progressPercentEl.style.width = `${(currentStep / total) * 100}%`;
  if (scoreCounterEl) scoreCounterEl.textContent = `${state.quiz.score} aciertos`;

  // Datos del caso
  const badgeEl = document.getElementById('quiz-badge');
  const topicLabelEl = document.getElementById('quiz-topic-label');
  const scenarioEl = document.getElementById('quiz-scenario');
  const questionPromptEl = document.getElementById('quiz-prompt');
  
  if (badgeEl) badgeEl.textContent = q.badge;
  if (topicLabelEl) topicLabelEl.textContent = q.temaLabel;
  if (scenarioEl) scenarioEl.textContent = q.enunciado;
  if (questionPromptEl) questionPromptEl.textContent = q.pregunta;

  // Renderizar las 4 opciones A, B, C, D
  const optionsContainer = document.getElementById('quiz-options-container');
  if (optionsContainer) {
    const letters = ['A', 'B', 'C', 'D'];
    optionsContainer.innerHTML = q.opciones.map((opt, idx) => `
      <button 
        type="button"
        onclick="window.handleSelectOption(${idx})" 
        id="quiz-opt-${idx}" 
        class="w-full text-left flex items-start gap-3 p-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest hover:border-primary hover:bg-surface-container-low transition-all active:scale-[0.99] group shadow-sm"
      >
        <span class="w-8 h-8 rounded-lg bg-surface-container group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center font-headline-md text-body-md font-bold text-on-surface-variant flex-shrink-0 transition-colors">
          ${letters[idx]}
        </span>
        <span class="font-body-md text-on-surface text-[14px] leading-relaxed pt-1 flex-1">
          ${opt}
        </span>
        <span id="quiz-icon-${idx}" class="material-symbols-outlined text-[20px] text-outline opacity-0 group-hover:opacity-100 transition-opacity mt-1">
          radio_button_unchecked
        </span>
      </button>
    `).join('');
  }

  // Ocultar panel de explicación hasta que responda
  const feedbackPanel = document.getElementById('quiz-feedback-panel');
  if (feedbackPanel) feedbackPanel.classList.add('hidden');

  // Ocultar botón de siguiente
  const nextBtnContainer = document.getElementById('quiz-next-btn-container');
  if (nextBtnContainer) nextBtnContainer.classList.add('hidden');
}

// Manejador de selección de respuesta
window.handleSelectOption = function(selectedIndex) {
  if (state.quiz.isAnswered) return;
  state.quiz.isAnswered = true;

  const q = state.quiz.activeQuestions[state.quiz.currentIndex];
  const isCorrect = (selectedIndex === q.correcta);

  if (isCorrect) {
    state.quiz.score++;
  }

  // Registrar respuesta en la sesión
  state.quiz.answersLog.push({
    question: q,
    selectedIndex,
    isCorrect,
    topic: q.tema
  });

  // Actualizar contador visual de aciertos
  const scoreCounterEl = document.getElementById('quiz-current-score');
  if (scoreCounterEl) scoreCounterEl.textContent = `${state.quiz.score} aciertos`;

  // Estilizar opciones (Verde para la correcta, Rojo si falló)
  for (let i = 0; i < q.opciones.length; i++) {
    const btn = document.getElementById(`quiz-opt-${i}`);
    const icon = document.getElementById(`quiz-icon-${i}`);
    if (!btn || !icon) continue;

    btn.disabled = true;
    btn.classList.remove('hover:border-primary', 'hover:bg-surface-container-low', 'active:scale-[0.99]');

    if (i === q.correcta) {
      // Opción CORRECTA (Siempre destacada en verde)
      btn.className = 'w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950 shadow-md transition-all';
      icon.className = 'material-symbols-outlined text-[24px] text-emerald-600 mt-0.5 opacity-100';
      icon.textContent = 'check_circle';
      const letterSpan = btn.querySelector('span');
      if (letterSpan) {
        letterSpan.className = 'w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-body-md flex-shrink-0';
      }
    } else if (i === selectedIndex && !isCorrect) {
      // Opción INCORRECTA seleccionada por el usuario (En rojo)
      btn.className = 'w-full text-left flex items-start gap-3 p-4 rounded-xl border-2 border-rose-500 bg-rose-50 text-rose-950 shadow-sm transition-all';
      icon.className = 'material-symbols-outlined text-[24px] text-rose-600 mt-0.5 opacity-100';
      icon.textContent = 'cancel';
      const letterSpan = btn.querySelector('span');
      if (letterSpan) {
        letterSpan.className = 'w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-body-md flex-shrink-0';
      }
    } else {
      // Opciones neutrales deshabilitadas
      btn.className = 'w-full text-left flex items-start gap-3 p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest opacity-50 cursor-not-allowed';
      icon.className = 'hidden';
    }
  }

  // Mostrar el panel de explicación inmediata
  const feedbackPanel = document.getElementById('quiz-feedback-panel');
  if (feedbackPanel) {
    feedbackPanel.classList.remove('hidden');

    const feedbackStatusBadge = document.getElementById('quiz-feedback-status');
    const feedbackTitle = document.getElementById('quiz-feedback-title');
    const feedbackExplanation = document.getElementById('quiz-feedback-explanation');
    const feedbackTip = document.getElementById('quiz-feedback-tip');

    if (isCorrect) {
      feedbackStatusBadge.className = 'px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-badge text-label-badge uppercase font-bold flex items-center gap-1';
      feedbackStatusBadge.innerHTML = '<span class="material-symbols-outlined text-[16px]">check_circle</span> ¡Respuesta Correcta!';
      feedbackTitle.textContent = 'Excelente razonamiento microbiológico';
      feedbackTitle.className = 'font-headline-md text-headline-md text-emerald-900 font-bold';
    } else {
      feedbackStatusBadge.className = 'px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-label-badge text-label-badge uppercase font-bold flex items-center gap-1';
      feedbackStatusBadge.innerHTML = '<span class="material-symbols-outlined text-[16px]">cancel</span> Ojo con este concepto';
      feedbackTitle.textContent = 'Análisis del error y justificación';
      feedbackTitle.className = 'font-headline-md text-headline-md text-rose-900 font-bold';
    }

    if (feedbackExplanation) feedbackExplanation.textContent = q.explicacion;
    if (feedbackTip) feedbackTip.textContent = q.tipParcial;

    // Desplazar suavemente hacia la explicación en celulares
    feedbackPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Mostrar botón de avanzar
  const nextBtnContainer = document.getElementById('quiz-next-btn-container');
  const nextBtnText = document.getElementById('quiz-next-btn-text');
  if (nextBtnContainer) {
    nextBtnContainer.classList.remove('hidden');
    const isLast = (state.quiz.currentIndex === state.quiz.activeQuestions.length - 1);
    if (nextBtnText) {
      nextBtnText.textContent = isLast ? 'Finalizar y Ver Diagnóstico de Vacíos' : `Avanzar a Pregunta ${state.quiz.currentIndex + 2} de 10`;
    }
  }
};

window.handleNextQuestion = function() {
  if (state.quiz.currentIndex < state.quiz.activeQuestions.length - 1) {
    state.quiz.currentIndex++;
    renderCurrentQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    // Reto finalizado
    if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
    navigateTo('mis-resultados-diagnostico');
  }
};

// --- VISTA 4: RESULTADOS Y DIAGNÓSTICO DE VACÍOS ---
function renderResultsView() {
  const total = state.quiz.activeQuestions.length || 10;
  const score = state.quiz.score;
  const percent = Math.round((score / total) * 100);

  // Detener temporizador
  if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);

  // Estadísticas generales
  const scoreBigEl = document.getElementById('results-score-big');
  const percentEl = document.getElementById('results-percent');
  const timeTotalEl = document.getElementById('results-time-total');
  const statusBannerEl = document.getElementById('results-status-banner');
  const statusHeadingEl = document.getElementById('results-status-heading');
  const statusDescEl = document.getElementById('results-status-desc');

  if (scoreBigEl) scoreBigEl.textContent = `${score} / ${total}`;
  if (percentEl) percentEl.textContent = `${percent}% de Acierto`;

  const mins = Math.floor(state.quiz.elapsedSeconds / 60);
  const secs = state.quiz.elapsedSeconds % 60;
  if (timeTotalEl) timeTotalEl.textContent = `${mins}m ${secs < 10 ? '0' : ''}${secs}s`;

  // Calibración diagnóstica según puntaje
  if (percent >= 80) {
    statusBannerEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-badge text-label-badge uppercase font-bold mb-3';
    statusBannerEl.innerHTML = '<span class="material-symbols-outlined text-[16px]">military_tech</span> Rendimiento Sobresaliente';
    statusHeadingEl.textContent = '¡Sólido dominio para el parcial, Laura!';
    statusDescEl.textContent = 'Tienes una base firme para el examen. Revisa los detalles mínimos para garantizar la máxima calificación.';
  } else if (percent >= 60) {
    statusBannerEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 font-label-badge text-label-badge uppercase font-bold mb-3';
    statusBannerEl.innerHTML = '<span class="material-symbols-outlined text-[16px]">warning</span> Umbral Aprobatorio Justo';
    statusHeadingEl.textContent = 'Aprobaste el simulacro, pero hay vacíos';
    statusDescEl.textContent = 'Pasaste el umbral mínimo (60%), pero tienes dudas en temas clave que el docente evaluará rigurosamente mañana.';
  } else {
    statusBannerEl.className = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 font-label-badge text-label-badge uppercase font-bold mb-3';
    statusBannerEl.innerHTML = '<span class="material-symbols-outlined text-[16px]">priority_high</span> Alerta Pre-Examen';
    statusHeadingEl.textContent = 'Riesgo crítico de vacíos conceptuales';
    statusDescEl.textContent = 'Tu puntaje está por debajo del umbral seguro. Es indispensable repasar las fichas sugeridas antes de dormir.';
  }

  // --- CÁLCULO DISCRIMINADO POR TEMA (SEMÁFORO DE VACÍOS) ---
  const topicsSummary = {
    morfologia: { label: 'Morfología Bacteriana', correct: 0, total: 0, icono: 'bubble_chart' },
    gram: { label: 'Tinción de Gram', correct: 0, total: 0, icono: 'colorize' },
    medios: { label: 'Medios de Cultivo', correct: 0, total: 0, icono: 'science' },
    bioseguridad: { label: 'Bioseguridad en el Lab', correct: 0, total: 0, icono: 'shield' }
  };

  state.quiz.answersLog.forEach(ans => {
    if (topicsSummary[ans.topic]) {
      topicsSummary[ans.topic].total++;
      if (ans.isCorrect) topicsSummary[ans.topic].correct++;
    }
  });

  const topicsContainer = document.getElementById('results-topics-breakdown');
  const failedTopics = [];

  if (topicsContainer) {
    topicsContainer.innerHTML = Object.keys(topicsSummary).map(key => {
      const t = topicsSummary[key];
      if (t.total === 0) return '';

      const tPercent = Math.round((t.correct / t.total) * 100);
      let statusColor = 'text-emerald-700 bg-emerald-50 border-emerald-200';
      let progressColor = 'bg-emerald-500';
      let statusText = 'Dominado';
      let statusBadge = 'bg-emerald-100 text-emerald-800';

      if (tPercent < 60) {
        statusColor = 'text-rose-700 bg-rose-50 border-rose-200';
        progressColor = 'bg-rose-500';
        statusText = 'Vacío Crítico';
        statusBadge = 'bg-rose-100 text-rose-800 font-bold animate-pulse';
        failedTopics.push({ key, label: t.label, score: `${t.correct}/${t.total}` });
      } else if (tPercent < 80) {
        statusColor = 'text-amber-700 bg-amber-50 border-amber-200';
        progressColor = 'bg-amber-500';
        statusText = 'Aceptable';
        statusBadge = 'bg-amber-100 text-amber-800';
      }

      return `
        <div class="p-4 rounded-xl border border-outline-variant/30 bg-surface-container-lowest shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-[20px]">${t.icono}</span>
              <span class="font-headline-md text-body-md font-bold text-on-surface">${t.label}</span>
            </div>
            <span class="px-2.5 py-0.5 rounded-full font-label-badge text-label-badge uppercase ${statusBadge}">
              ${statusText}
            </span>
          </div>

          <div class="my-2">
            <div class="flex justify-between items-baseline mb-1">
              <span class="font-body-sm text-on-surface-variant text-[12px]">Precisión de respuestas</span>
              <span class="font-label-code text-label-code font-bold text-on-surface">${t.correct} de ${t.total} (${tPercent}%)</span>
            </div>
            <div class="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
              <div class="h-full ${progressColor} rounded-full transition-all duration-700" style="width: ${tPercent}%;"></div>
            </div>
          </div>

          <div class="pt-2 border-t border-outline-variant/20 flex justify-end">
            <button 
              onclick="window.navigateTo('fichas-de-estudio', { topic: '${key}' })" 
              class="font-body-sm text-body-sm text-primary hover:text-primary-container font-semibold flex items-center gap-1"
            >
              Repasar fichas de este tema <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  // --- PRESCRIPCIÓN DE EMERGENCIA PRE-PARCIAL ---
  const prescriptionContainer = document.getElementById('results-prescription-card');
  if (prescriptionContainer) {
    if (failedTopics.length > 0) {
      prescriptionContainer.innerHTML = `
        <div class="p-5 rounded-xl bg-gradient-to-br from-tertiary-fixed via-surface-container-low to-surface-container-lowest border-2 border-tertiary/30 shadow-md">
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full bg-tertiary text-on-tertiary font-label-badge text-label-badge uppercase tracking-wider flex items-center gap-1 shadow-sm font-bold">
              <span class="material-symbols-outlined text-[16px]">medical_services</span> Prescripción Nocturna de Emergencia
            </span>
            <span class="font-label-code text-label-code text-tertiary font-bold flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">timer</span> 5 Minutos de Repaso
            </span>
          </div>

          <h3 class="font-headline-md text-headline-md font-bold text-on-surface mb-1">
            Prioridad alta antes de ir a dormir:
          </h3>
          <p class="font-body-md text-body-md text-on-surface-variant mb-4">
            Detectamos debilidad en <strong class="text-tertiary font-bold">${failedTopics.map(f => f.label).join(', ')}</strong>. No te duermas sin repasar las fichas directas de estos temas:
          </p>

          <div class="flex flex-wrap gap-2">
            ${failedTopics.map(f => `
              <button 
                onclick="window.navigateTo('fichas-de-estudio', { topic: '${f.key}' })"
                class="px-4 py-2.5 rounded-lg bg-tertiary text-on-tertiary font-headline-md text-body-sm font-bold hover:bg-tertiary-container shadow-sm flex items-center gap-2 transition-all active:scale-95"
              >
                <span>Repasar ${f.label}</span>
                <span class="material-symbols-outlined text-[16px]">open_in_new</span>
              </button>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      prescriptionContainer.innerHTML = `
        <div class="p-5 rounded-xl bg-emerald-50 border-2 border-emerald-300 shadow-sm text-emerald-950">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-emerald-600 text-[24px]">verified</span>
            <h3 class="font-headline-md text-headline-md font-bold">¡Diagnóstico Limpio! Sin vacíos críticos</h3>
          </div>
          <p class="font-body-md text-[14px] text-emerald-900 leading-relaxed">
            Demostraste un dominio homogéneo en los 4 temas evaluados. Tienes los conceptos claros para el examen de microbiología de mañana. ¡Descansa bien y confía en tu preparación!
          </p>
        </div>
      `;
    }
  }
}

// Exportar funciones a la ventana global para los botones onclick
window.navigateTo = navigateTo;
