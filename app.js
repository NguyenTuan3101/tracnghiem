(() => {
  const BANK = typeof QUESTIONS !== "undefined" ? QUESTIONS : window.QUESTIONS;
  if (!BANK || !BANK.length) {
    alert("Không tải được ngân hàng câu hỏi (questions.js). Hãy tải lại trang hoặc mở đúng thư mục có file questions.js.");
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
  const streakChip = document.getElementById("streakChip");
  const questionId = document.getElementById("questionId");
  const questionText = document.getElementById("questionText");
  const questionImages = document.getElementById("questionImages");
  const optionsEl = document.getElementById("options");
  const feedback = document.getElementById("feedback");
  const meterFill = document.getElementById("meterFill");
  const quizBody = document.getElementById("quizBody");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnSkip = document.getElementById("btnSkip");
  const btnGrid = document.getElementById("btnGrid");
  const btnQuit = document.getElementById("btnQuit");
  const btnRestart = document.getElementById("btnRestart");
  const btnHome = document.getElementById("btnHome");
  const resultCard = document.getElementById("resultCard");
  const resultTitle = document.getElementById("resultTitle");
  const resultMascot = document.getElementById("resultMascot");
  const gridDialog = document.getElementById("gridDialog");
  const questionGrid = document.getElementById("questionGrid");
  const fxCanvas = document.getElementById("fxCanvas");
  const setupMascot = document.getElementById("setupMascot");
  const setupTitle = document.getElementById("setupTitle");
  const setupLead = document.getElementById("setupLead");
  const setupTip = document.getElementById("setupTip");
  const startBtn = document.getElementById("startBtn");
  const fx = fxCanvas.getContext("2d");

  const COPY = {
    setupMascots: ["🤣📚", "🤡🧠", "💀✨", "🐱‍👓", "🫠📖", "😈🌸", "🐸📝", "👁️👄👁️"],
    setupTitles: [
      "Cảnh báo: vào đây có thể cười sặc 🤣🚨",
      "Não đang tải… 99% là chuyện cười 🧠😂",
      "Ôn bài kiểu “vừa học vừa tấu hài” 🎭📖",
      "XLMT: Xử Lý… Môi Trường & Trắc nghiệm vui 💅🧪",
      "Ai cười trước là thắng (điểm tính sau) 🏆😹",
      "Đề thì nghiêm túc, lời thoại thì… không 😌🔥",
      "Sẵn sàng chưa? Não: “không” → mình: “vào” 😈👉",
    ],
    setupLeads: [
      "510 câu đang ngồi xếp hàng như xếp hàng trà sữa 🧋📚 Bạn chọn kiểu ôn, mình lo phần đúng/sai + chọc vui.",
      "Sai cũng được, miễn đừng chọn đáp án theo cảm tính kiểu “chữ A nhìn hợp mệnh” 🔮🤡",
      "Mỗi lần trả lời là một tập hài: não thắng / não ngã / não đứng hình 📺🫠",
      "Đừng sợ sai. Sợ nhất là ôn được 2 câu rồi… lướt điện thoại 45 phút 📱😭",
    ],
    setupTips: [
      "Mẹo siêu thật: đừng chọn C vì “C là chữ đẹp”. C cũng có thể là cái bẫy 🤡🪤",
      "Mẹo vàng: đói thì ăn đã. Não đói sẽ chọn đáp án như người đi chợ lúc 12 giờ đêm 🍜🧟",
      "Nếu đang chuỗi đúng cao: đừng khoe với bạn bên cạnh, họ đang sai câu 1 🔥🤫😂",
      "Xáo đáp án đi. Không xáo là thuộc vị trí hơn thuộc bài, thi về khóc với cột đèn 💡😭",
      "Ôn 20 câu rồi nghỉ. Não cũng cần “xả đáy” như bể lắng vậy đó 🧪🚽✨",
    ],
    startBtns: [
      "Vào phá đảo! 💥🚀",
      "Bắt đầu trước khi não bỏ chạy 🏃🧠",
      "Bấm vào là chấp nhận cười 😂→",
      "Mở chế độ tấu hài 🎭🔥",
      "Vào việc! Đề không chờ ai 😈📖",
      "Thả não xuống sân đấu 🥊✨",
    ],
    praise: [
      "ĐÚNG!!! Não bạn vừa tăng gấp đôi trí tuệ trong 0,2 giây 🧠⚡🤣",
      "Ăn không sứt mẻ! Giám thị nhìn cũng phải “ừ mây” 😏📝",
      "Trúng phóc luôn, đẹp như phim giờ vàng 🎬✨",
      "Chuẩn bài! Não: “ta là chính chủ đáp án” 👑😤",
      "Hay quá trời, kiểu này thi xong về mở tiệc trà sữa 🧋🥳",
      "Đỉnh của chóp! Đáp án bay vào như sóng mạng nhà hàng xóm… mà lần này bắt được 📶😂",
      "Ối giời ơi đúng rồi 😭👏 Não vừa gáy rất lớn trong đầu!",
      "Chọn hay! Thêm +999 uy tín học hành 🎖️🤣",
      "Sạch sẽ quá, sạch hơn cả nước sau xử lý luôn á 💧😎✨",
      "Não vừa né bẫy đề như né người yêu cũ ngoài đường 🪤➡️🏃💨💀",
      "Chuẩn luôn! Đáp án này mượt như bơ 🧈😂",
      "Trúng rồi! Mình muốn đứng dậy vỗ tay nhưng đang ngồi… nên vỗ bàn vậy 👏🪑🤣",
      "Quá dữ! Kiểu “biết rồi còn hỏi” nhưng hỏi vẫn đúng 😌📖",
      "Não đầy sóng, không còn 1 vạch yếu 📶💯",
      "Đúng chuẩn sách giáo khoa, nhưng bản hài 📕🤡✨",
      "Bạn vừa cứu kiến thức khỏi vực thẳm đoán bừa 🛟🎲😂",
      "Ối dồi ôi chọn chuẩn! Đáp án đẹp cũng phải đỏ mặt 💘🙈",
      "Đỉnh! Nếu có bảng thành tích thì bạn đang đứng đầu lớp 🏆😂",
      "Chuẩn chỉnh như COD đạt chuẩn xả thải… à nhầm, đạt chuẩn điểm cao 📋😎",
      "Trúng! Não vừa nói: “thấy chưa, tin tao đi” 🧠🗣️🔥",
      "Quá ổn áp, ổn hơn cả hệ thống xử lý khi vận hành đúng quy trình 🏭✨🤣",
      "Đúng rồi đó, đừng giả bộ bất ngờ nữa nha 🤭✅😂",
    ],
    comfort: [
      "Ái chà… sai rồi 😭 Nhưng sai mà biết {ans} thì vẫn là thắng dài hạn!",
      "Não vừa đứng hình… rồi tắt nguồn 🧠💥 Không sao, khởi động lại bằng đáp án {ans}",
      "Đề trêu bạn như tin nhắn xem rồi không trả lời 🤡📱 Đáp án thật: {ans}",
      "Trượt nhẹ như sút phạt lệch cột ⚽😭 Ghi nhớ: {ans}",
      "Chọn nhầm rồi, giống gọi trà sữa quên bỏ đường 🧋💀 → nhớ {ans}",
      "Ủa khoan… não đi nhà vệ sinh lúc chọn đáp án hả? 🚽😂 Đúng là {ans}",
      "Trượt vỏ chuối tri thức 🍌🤣 Ngã xong đứng dậy với {ans}",
      "Không sao, coi như học phí vui vẻ 💸📚 Vé xem đáp án: {ans}",
      "Đoán bừa trượt đẹp 🎲😭 Cập nhật ngay: chân ái = {ans}",
      "Sai 1 phát nhưng độ hài thì mười điểm 😂👉 Đáp án: {ans}",
      "Bình tĩnh, đây chưa phải kết thúc thế giới… chỉ là kết thúc câu này 🌍😅 → {ans}",
      "Não: “tôi cảm thấy đúng” Cảm giác: sai 😌💔 Đáp án: {ans}",
      "Úi da, đề vừa bóp mũi bạn một cái 🤏🤣 Học lại: {ans}",
      "Chọn hụt như với thang máy mà cửa đóng sầm 🚪😂 → nhớ {ans}",
      "Được rồi, não cần ghi chú mới: đáp án đúng = {ans} 🛠️🧠",
      "Sai cũng được, miễn đừng sai cùng một câu 3 lần… (đùa thôi, sai 3 lần cũng nhớ luôn) 😭📖 → {ans}",
      "Chuyện nhỏ: bạn chọn nhầm, đáp án {ans} đang đứng nhìn 👀💔😂",
      "Không khóc nha, khóc làm loãng kiến thức 😭💧 Học {ans} đi rồi cười tiếp!",
    ],
    streakLines: [
      "Liên hoàn x{n}!!! Não đang biến thành trùm cuối 🔥😈",
      "{n} câu liên hoàn, đề sắp xin thua 📖🏳️😂",
      "Chuỗi {n} 🔥 đừng vấp… vấp là tụi mình cười tiếp cũng được 🤡",
      "{n} phát ăn chắc, não mở hòa nhạc trong đầu 🎤🧠🎉",
      "Chuỗi {n} rồi, đáng sợ kiểu dễ thương 😤💕💀",
      "{n} đúng liền? Ai đó gọi xe cấp cứu cho cái đề với 🚑🤣",
    ],
    nextBtns: ["Câu tiếp nào 😂→", "Vào tiếp, đừng sợ 🚀", "Tiếp đi chờ chi 🤡→", "Qua câu mới nào 💥", "Thêm 1 tập hài 📺→"],
    finishBtns: ["Xem điểm cười cái đã 🏆😂", "Tổng kết mặn mặn 🧂", "Coi kết quả đi 👀💀", "Khép lại buổi diễn 🎭"],
    skipBtns: ["Bỏ qua như né bài tập 🏃", "Để sau (hoặc quên) 🫣", "Bỏ qua tạm đã 👋😂", "Câu này… rồi tính 📦"],
    prevBtns: ["← Lùi xíu đã", "← Quay lại cho chắc", "← Hoàn tác một nhịp"],
    gridBtns: ["Lưới câu loạn xạ 🗺️", "Nhảy cóc tri thức 🐸", "Danh sách nè 📋😂"],
    quitBtns: ["Xem điểm liền 🏁", "Dừng và cười với điểm 📊", "Tổng kết sớm 🎁🤣"],
    resultTitles: [
      "Hết phim! Não xin 1 ly trà sữa 🧠🧋😂",
      "Buổi ôn bài vừa hạ màn 🎭✨",
      "Bạn sống sót… về mặt tinh thần 🫡💀",
      "Xong rồi! Giờ nhìn điểm rồi tự chọc mình 😌🔥",
      "Kết thúc phiên, bắt đầu phiên cười 😹📊",
    ],
    resultMascots: ["🏆", "😹", "🤪", "🥳", "🫡", "🫠", "🤡", "💀", "🐸", "👁️👄👁️"],
    moodHigh: [
      "ĐỈNH THẬT SỰ 🏆🤣 Não bạn sạch hơn nước sau 3 cấp xử lý!",
      "Tỷ lệ này mà còn lo thì lo giúp mình luôn đi 😎📈😂",
      "Cao thủ xuất hiện! Thi về kể chuyện cười cả lớp được á 🎤✨",
      "Xuất sắc! Não đang gáy kiểu hát không cần nhạc 🧠🎶🔥",
    ],
    moodMid: [
      "Ổn áp kiểu “ăn được” 😌👍 Còn vài câu đang trêu bạn thôi 🤡",
      "Khá đó! Thêm 1 vòng nữa là não mượt như bơ lỡ để ngoài nắng… vẫn ăn được 🧈😂",
      "Đang lên guồng. Sai vài câu chỉ để tăng độ vui 🎭💕",
      "Không tệ! Kiểu điểm xinh, trò đùa xinh hơn 📊🤣",
    ],
    moodLow: [
      "Hôm nay não đi dã ngoại, quên mang đáp án theo 🧺😂 Mai mang theo rồi tính!",
      "Điểm chưa cao nhưng độ hài thì hạng nhất 💪🤡🔥",
      "Đây mới là tập mở đầu. Tập sau bạn sẽ trở lại như phim 🎬💥",
      "Đừng buồn: bạn đã mở trang ôn bài thay vì lướt chuyện cười… khoan, trang này cũng toàn chuyện cười 😭🩷",
    ],
    restartBtns: ["Ôn thêm để cười tiếp 🔁😂", "Phân đoạn báo thù bắt đầu 😤🔥", "Chơi lại phần này 🎮", "Vào tiếp nào 💥"],
    homeBtns: ["Về trang chọn 🏠", "Đổi cách ôn 🔧🤣", "Chọn lại đi 🌸"],
    emptyRange: [
      "Khoảng này trống như túi ví cuối tháng 💸😭 Đổi từ–đến nha!",
      "Không có câu nào hết 🫣 Não: “nghỉ tiếp được rồi” — chọn khoảng khác đi bạn ơi!",
    ],
  };

  const recent = {
    praise: [],
    comfort: [],
    streak: [],
    next: [],
    fx: [],
    mood: [],
    title: [],
  };

  const state = {
    deck: [],
    index: 0,
    answers: {},
    streak: 0,
    bestStreak: 0,
    sourcePool: [],
    config: { qOrder: "asc", aOrder: "keep" },
  };

  let particles = [];

  refreshSetupCopy();

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
      const n = clamp(Number(document.getElementById("randomCount").value) || 30, 1, BANK.length);
      pool = shuffle([...BANK]).slice(0, n);
    } else {
      const from = clamp(Number(document.getElementById("rangeFrom").value) || 1, 1, 510);
      const to = clamp(Number(document.getElementById("rangeTo").value) || from, 1, 510);
      const lo = Math.min(from, to);
      const hi = Math.max(from, to);
      pool = BANK.filter((q) => q.id >= lo && q.id <= hi);
      if (!pool.length) {
        alert(pickFresh(COPY.emptyRange, "title"));
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
    state.streak = 0;
    updateStats();
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
    refreshSetupCopy();
  });
  btnGrid.addEventListener("click", () => {
    renderGrid();
    gridDialog.showModal();
  });

  function refreshSetupCopy() {
    setupMascot.textContent = pick(COPY.setupMascots);
    setupTitle.textContent = pickFresh(COPY.setupTitles, "title");
    setupLead.textContent = pickFresh(COPY.setupLeads, "title");
    setupTip.textContent = pickFresh(COPY.setupTips, "title");
    startBtn.textContent = pick(COPY.startBtns);
  }

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
    state.streak = 0;
    state.bestStreak = 0;
    setupPanel.hidden = true;
    resultPanel.hidden = true;
    quizPanel.hidden = false;
    topStats.hidden = false;
    refreshNavCopy();
    renderQuestion(true);
    updateStats();
    playFx(pickFxStyle(true));
  }

  function goTo(i) {
    if (i < 0 || i >= state.deck.length) return;
    state.index = i;
    refreshNavCopy();
    renderQuestion(true);
    updateStats();
  }

  function refreshNavCopy() {
    const atEnd = state.index >= state.deck.length - 1;
    btnNext.textContent = atEnd ? pickFresh(COPY.finishBtns, "next") : pickFresh(COPY.nextBtns, "next");
    btnSkip.textContent = pick(COPY.skipBtns);
    btnPrev.textContent = pick(COPY.prevBtns);
    btnGrid.textContent = pick(COPY.gridBtns);
    btnQuit.textContent = pick(COPY.quitBtns);
  }

  function renderQuestion(animate) {
    const q = state.deck[state.index];
    questionId.textContent = `Câu ${q.id}`;
    questionText.textContent = q.question;
    optionsEl.innerHTML = "";
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "feedback";
    renderImages(q);

    if (animate) {
      const anim = pickFresh(["swap-in", "swap-up", "swap-soft"], "fx");
      quizBody.classList.remove("swap-in", "swap-up", "swap-soft");
      void quizBody.offsetWidth;
      quizBody.classList.add(anim);
    }

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

    if (answered) showFeedback(answered.correct, q.displayAnswer, answered._line);

    btnPrev.disabled = state.index === 0;
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
        fig.innerHTML = `<div class="img-loading">Hình chưa tải được, thử tải lại trang nha.</div>`;
      });
      fig.appendChild(img);
      questionImages.appendChild(fig);
      img.src = src;
    });
  }

  function selectAnswer(q, chosen) {
    if (state.answers[q.id]) return;
    const isCorrect = chosen === q.displayAnswer;
    let line = "";

    if (isCorrect) {
      state.streak += 1;
      state.bestStreak = Math.max(state.bestStreak, state.streak);
      line = pickFresh(COPY.praise, "praise");
      if (state.streak >= 3) {
        line += " · " + pickFresh(COPY.streakLines, "streak").replace("{n}", String(state.streak));
      }
      playFx(pickFxStyle(true));
    } else {
      state.streak = 0;
      line = pickFresh(COPY.comfort, "comfort").split("{ans}").join(q.displayAnswer);
      playFx(pickFxStyle(false));
    }

    state.answers[q.id] = { chosen, correct: isCorrect, _line: line };
    renderQuestion(false);
    updateStats();
  }

  function showFeedback(ok, answerKey, savedLine) {
    feedback.hidden = false;
    const tone = ok ? pick(["ok", "ok warm", "ok mint"]) : pick(["bad", "bad soft"]);
    feedback.className = `feedback ${tone}`;
    feedback.textContent = savedLine || (ok
      ? pickFresh(COPY.praise, "praise")
      : pickFresh(COPY.comfort, "comfort").split("{ans}").join(answerKey));
  }

  function updateStats() {
    const done = Object.keys(state.answers).length;
    const correct = Object.values(state.answers).filter((a) => a.correct).length;
    scoreLabel.textContent = `${correct} đúng / ${done}`;
    progressLabel.textContent = `${state.index + 1} / ${state.deck.length}`;
    streakChip.textContent = `🔥 ${state.streak}`;
  }

  function showResult() {
    const total = state.deck.length;
    const done = Object.keys(state.answers).length;
    const correct = Object.values(state.answers).filter((a) => a.correct).length;
    const wrong = done - correct;
    const skipped = total - done;
    const pct = done ? Math.round((correct / done) * 100) : 0;
    const moodPool = pct >= 85 ? COPY.moodHigh : pct >= 60 ? COPY.moodMid : COPY.moodLow;
    const mood = pickFresh(moodPool, "mood");

    quizPanel.hidden = true;
    resultPanel.hidden = false;
    resultTitle.textContent = pickFresh(COPY.resultTitles, "title");
    resultMascot.textContent = pick(COPY.resultMascots);
    btnRestart.textContent = pick(COPY.restartBtns);
    btnHome.textContent = pick(COPY.homeBtns);

    resultCard.innerHTML = `
      <div class="big">${pct}%</div>
      <p><strong>${correct}</strong> đúng · <strong>${wrong}</strong> sai · <strong>${skipped}</strong> chưa làm</p>
      <p>Chuỗi đúng dài nhất: <strong>${state.bestStreak}</strong></p>
      <p>Bạn đã làm ${done}/${total} câu trong phiên này.</p>
      <span class="mood">${mood}</span>
    `;
    if (pct >= 50) playFx(pickFxStyle(true), 40);
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

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  /** Tránh lặp câu gần đây trong cùng nhóm. */
  function pickFresh(list, key, remember = 4) {
    const used = recent[key] || [];
    const pool = list.filter((x) => !used.includes(x));
    const choice = pick(pool.length ? pool : list);
    used.push(choice);
    while (used.length > remember) used.shift();
    recent[key] = used;
    return choice;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function resizeFx() {
    fxCanvas.width = window.innerWidth * devicePixelRatio;
    fxCanvas.height = window.innerHeight * devicePixelRatio;
    fx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  window.addEventListener("resize", resizeFx);
  resizeFx();

  function pickFxStyle(positive) {
    const good = ["burst", "rain", "spark", "emoji"];
    const soft = ["softPulse", "ripple", "dust"];
    return pickFresh(positive ? good : soft, "fx", 3);
  }

  function playFx(style, n) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const colors = shuffle(["#f278a8", "#ff8fab", "#ffb6d5", "#ffd27a", "#ffc2b8", "#ff9ec4", "#e85a8c"]);
    const emojis = ["🌸", "😂", "🤪", "🥳", "😎", "🫠", "👏", "💯", "🎀", "🍓", "✨", "🧠"];
    const count = n || (18 + Math.floor(Math.random() * 22));

    if (style === "softPulse" || style === "ripple") {
      for (let i = 0; i < 10; i++) {
        particles.push({
          type: "ring",
          x: w * (0.35 + Math.random() * 0.3),
          y: h * (0.3 + Math.random() * 0.2),
          r: 4,
          vr: 1.2 + Math.random(),
          life: 28 + Math.random() * 12,
          color: colors[i % colors.length],
        });
      }
      return;
    }

    if (style === "dust") {
      for (let i = 0; i < count; i++) {
        particles.push({
          type: "dot",
          x: w * Math.random(),
          y: h * 0.55 + Math.random() * 40,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -1 - Math.random() * 1.5,
          g: 0.02,
          life: 40 + Math.random() * 20,
          size: 2 + Math.random() * 2,
          color: colors[i % colors.length],
          rot: 0,
          vr: 0,
        });
      }
      return;
    }

    if (style === "rain") {
      for (let i = 0; i < count; i++) {
        particles.push({
          type: "rect",
          x: Math.random() * w,
          y: -10 - Math.random() * 40,
          vx: (Math.random() - 0.5) * 1.5,
          vy: 3 + Math.random() * 4,
          g: 0.05,
          life: 55 + Math.random() * 25,
          size: 4 + Math.random() * 5,
          color: colors[i % colors.length],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.2,
        });
      }
      return;
    }

    if (style === "emoji") {
      for (let i = 0; i < Math.min(count, 16); i++) {
        particles.push({
          type: "emoji",
          text: emojis[i % emojis.length],
          x: w * 0.5 + (Math.random() - 0.5) * 120,
          y: h * 0.32,
          vx: (Math.random() - 0.5) * 5,
          vy: -2 - Math.random() * 4,
          g: 0.14,
          life: 55 + Math.random() * 20,
          size: 16 + Math.random() * 10,
          rot: (Math.random() - 0.5) * 0.5,
          vr: (Math.random() - 0.5) * 0.2,
        });
      }
      return;
    }

    // burst / spark default
    const cx = w * (0.4 + Math.random() * 0.2);
    const cy = h * (0.24 + Math.random() * 0.12);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (style === "spark" ? 3 : 2) + Math.random() * 5;
      particles.push({
        type: style === "spark" ? "spark" : "rect",
        x: cx,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        g: 0.12 + Math.random() * 0.08,
        life: 45 + Math.random() * 30,
        size: 3 + Math.random() * 5,
        color: colors[i % colors.length],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.35,
      });
    }
  }

  function tickFx() {
    fx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    particles = particles.filter((p) => p.life > 0);
    for (const p of particles) {
      p.life -= 1;
      fx.save();
      fx.globalAlpha = Math.max(p.life / 55, 0);

      if (p.type === "ring") {
        p.r += p.vr;
        fx.strokeStyle = p.color;
        fx.lineWidth = 2;
        fx.beginPath();
        fx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        fx.stroke();
      } else if (p.type === "emoji") {
        p.vy += p.g;
        p.x += p.vx;
        p.y += p.vy;
        fx.font = `${p.size}px serif`;
        fx.fillText(p.text, p.x, p.y);
      } else {
        p.vy += p.g || 0;
        p.x += p.vx || 0;
        p.y += p.vy || 0;
        p.rot = (p.rot || 0) + (p.vr || 0);
        fx.translate(p.x, p.y);
        fx.rotate(p.rot || 0);
        fx.fillStyle = p.color;
        if (p.type === "spark") {
          fx.fillRect(-p.size * 0.15, -p.size, p.size * 0.3, p.size * 2);
        } else if (p.type === "dot") {
          fx.beginPath();
          fx.arc(0, 0, p.size, 0, Math.PI * 2);
          fx.fill();
        } else {
          fx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }
      }
      fx.restore();
    }
    requestAnimationFrame(tickFx);
  }
  tickFx();
})();
