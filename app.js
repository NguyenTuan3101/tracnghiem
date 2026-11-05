(() => {
  const BANK = typeof QUESTIONS !== "undefined" ? QUESTIONS : window.QUESTIONS;
  if (!BANK || !BANK.length) {
    alert("Không tải được ngân hàng câu hỏi (questions.js). Hãy tải lại trang.");
    return;
  }

  const setupPanel = document.getElementById("setupPanel");
  const quizPanel = document.getElementById("quizPanel");
  const resultPanel = document.getElementById("resultPanel");
  const setupForm = document.getElementById("setupForm");
  const randomOpts = document.getElementById("randomOpts");
  const rangeOpts = document.getElementById("rangeOpts");
  const topStats = document.getElementById("topStats");
  const scoreLabel = document.getElementById("scoreLabel");
  const progressLabel = document.getElementById("progressLabel");
  const questionId = document.getElementById("questionId");
  const questionText = document.getElementById("questionText");
  const questionImages = document.getElementById("questionImages");
  const optionsEl = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const meterFill = document.getElementById("meterFill");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnSkip = document.getElementById("btnSkip");
  const btnGrid = document.getElementById("btnGrid");
  const btnQuit = document.getElementById("btnQuit");
  const btnRestart = document.getElementById("btnRestart");
  const btnHome = document.getElementById("btnHome");
  const resultCard = document.getElementById("resultCard");
  const gridDialog = document.getElementById("gridDialog");
  const questionGrid = document.getElementById("questionGrid");

  const state = {
    deck: [],
    index: 0,
    answers: {},
    sourcePool: [],
    config: { qOrder: "asc", aOrder: "keep" },
  };

  function syncModeFields() {
    const mode = setupForm.mode.value;
    randomOpts.hidden = mode !== "random";
    rangeOpts.hidden = mode !== "range";
  }
  setupForm.addEventListener("change", syncModeFields);
  syncModeFields();

  setupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const mode = setupForm.mode.value;
    const qOrder = setupForm.qOrder.value;
    const aOrder = setupForm.aOrder.value;
    let pool = [];

    if (mode === "all") {
      pool = [...BANK];
    } else if (mode === "random") {
      const n = clamp(Number(document.getElementById("randomCount").value) || 50, 1, BANK.length);
      pool = shuffle([...BANK]).slice(0, n);
    } else {
      const from = clamp(Number(document.getElementById("rangeFrom").value) || 1, 1, 510);
      const to = clamp(Number(document.getElementById("rangeTo").value) || from, 1, 510);
      const lo = Math.min(from, to);
      const hi = Math.max(from, to);
      pool = BANK.filter((q) => q.id >= lo && q.id <= hi);
      if (!pool.length) {
        alert("Không có câu hỏi trong khoảng đã chọn.");
        return;
      }
    }

    state.config = { qOrder, aOrder };
    state.sourcePool = pool.map((q) => ({
      id: q.id,
      question: q.question,
      options: q.options,
      answer: q.answer,
      images: q.images || [],
    }));
    startQuiz(buildDeck(state.sourcePool, qOrder, aOrder));
  });

  btnPrev.addEventListener("click", () => goTo(state.index - 1));
  btnNext.addEventListener("click", () => {
    if (state.index >= state.deck.length - 1) showResult();
    else goTo(state.index + 1);
  });
  btnSkip.addEventListener("click", () => {
    if (state.index >= state.deck.length - 1) showResult();
    else goTo(state.index + 1);
  });
  btnQuit.addEventListener("click", showResult);
  btnRestart.addEventListener("click", () => {
    if (!state.sourcePool.length) return;
    const { qOrder, aOrder } = state.config;
    startQuiz(buildDeck(state.sourcePool, qOrder, aOrder));
  });
  btnHome.addEventListener("click", () => {
    resultPanel.hidden = true;
    quizPanel.hidden = true;
    setupPanel.hidden = false;
    topStats.hidden = true;
  });
  btnGrid.addEventListener("click", () => {
    renderGrid();
    gridDialog.showModal();
  });

  function buildDeck(pool, qOrder, aOrder) {
    let ordered = [...pool];
    if (qOrder === "shuffle") ordered = shuffle(ordered);
    else ordered.sort((a, b) => a.id - b.id);
    return ordered.map((q) => prepareQuestion(q, aOrder === "shuffle"));
  }

  function prepareQuestion(q, shuffleAnswers) {
    const baseOpts = (q.options || []).filter((o) => o && o.text);
    const orderedOpts = shuffleAnswers ? shuffle([...baseOpts]) : [...baseOpts];
    const letters = ["A", "B", "C", "D", "E", "F"].slice(0, orderedOpts.length);
    const displayOptions = orderedOpts.map((o, i) => ({
      key: letters[i],
      text: o.text,
      isCorrect: o.key === q.answer,
    }));
    const displayAnswer = (displayOptions.find((o) => o.isCorrect) || {}).key || q.answer;
    return {
      id: q.id,
      question: q.question,
      images: q.images || [],
      displayOptions,
      displayAnswer,
    };
  }

  function startQuiz(deck) {
    state.deck = deck;
    state.index = 0;
    state.answers = {};
    setupPanel.hidden = true;
    resultPanel.hidden = true;
    quizPanel.hidden = false;
    topStats.hidden = false;
    renderQuestion();
    updateStats();
  }

  function goTo(i) {
    if (i < 0 || i >= state.deck.length) return;
    state.index = i;
    renderQuestion();
    updateStats();
  }

  function renderQuestion() {
    const q = state.deck[state.index];
    questionId.textContent = `Câu ${q.id}`;
    questionText.textContent = q.question;
    optionsEl.innerHTML = "";
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
    renderImages(q);

    const answered = state.answers[q.id];
    q.displayOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option";
      btn.innerHTML = `<span class="key">${opt.key}</span><span>${escapeHtml(opt.text)}</span>`;
      if (answered) {
        btn.disabled = true;
        if (opt.key === answered.chosen && answered.correct) btn.classList.add("correct");
        else if (opt.key === answered.chosen) btn.classList.add("wrong");
        if (opt.isCorrect) btn.classList.add("reveal-correct", "correct");
      } else {
        btn.addEventListener("click", () => selectAnswer(q, opt.key));
      }
      optionsEl.appendChild(btn);
    });

    if (answered) showFeedback(answered.correct, q.displayAnswer);

    btnPrev.disabled = state.index === 0;
    btnNext.textContent = state.index === state.deck.length - 1 ? "Xem kết quả" : "Tiếp →";
    meterFill.style.width = `${((state.index + 1) / state.deck.length) * 100}%`;
  }

  function renderImages(q) {
    const paths = Array.isArray(q.images) ? q.images : [];
    questionImages.innerHTML = "";
    if (!paths.length) {
      questionImages.hidden = true;
      return;
    }
    questionImages.hidden = false;
    paths.forEach((src, i) => {
      const fig = document.createElement("figure");
      const img = document.createElement("img");
      img.alt = `Hình minh họa câu ${q.id}${paths.length > 1 ? ` (${i + 1})` : ""}`;
      img.decoding = "async";
      img.addEventListener("error", () => {
        fig.innerHTML = `<div class="img-loading">Không tải được hình. Thử tải lại trang.</div>`;
      });
      fig.appendChild(img);
      questionImages.appendChild(fig);
      img.src = src;
    });
  }

  function selectAnswer(q, chosen) {
    if (state.answers[q.id]) return;
    const isCorrect = chosen === q.displayAnswer;
    state.answers[q.id] = { chosen, correct: isCorrect };
    renderQuestion();
    updateStats();
  }

  function showFeedback(ok, answerKey) {
    feedback.hidden = false;
    if (ok) {
      feedback.className = "feedback ok";
      feedback.textContent = "Đúng rồi!";
    } else {
      feedback.className = "feedback bad";
      feedback.textContent = `Sai. Đáp án đúng là ${answerKey}.`;
    }
  }

  function updateStats() {
    const done = Object.keys(state.answers).length;
    const correct = Object.values(state.answers).filter((a) => a.correct).length;
    scoreLabel.textContent = `${correct} đúng / ${done} đã làm`;
    progressLabel.textContent = `${state.index + 1} / ${state.deck.length}`;
  }

  function showResult() {
    const total = state.deck.length;
    const done = Object.keys(state.answers).length;
    const correct = Object.values(state.answers).filter((a) => a.correct).length;
    const wrong = done - correct;
    const skipped = total - done;
    const pct = done ? Math.round((correct / done) * 100) : 0;

    quizPanel.hidden = true;
    resultPanel.hidden = false;
    resultCard.innerHTML = `
      <div class="big">${pct}%</div>
      <p><strong>${correct}</strong> câu đúng · <strong>${wrong}</strong> câu sai · <strong>${skipped}</strong> chưa làm</p>
      <p>Đã làm ${done}/${total} câu trong phiên này.</p>
    `;
  }

  function renderGrid() {
    questionGrid.innerHTML = "";
    state.deck.forEach((q, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = String(i + 1);
      b.title = `Câu ${q.id}`;
      if (i === state.index) b.classList.add("current");
      const a = state.answers[q.id];
      if (a) b.classList.add(a.correct ? "done-ok" : "done-bad");
      b.addEventListener("click", () => {
        gridDialog.close();
        goTo(i);
      });
      questionGrid.appendChild(b);
    });
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
})();
