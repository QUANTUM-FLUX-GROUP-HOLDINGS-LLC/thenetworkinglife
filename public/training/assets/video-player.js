/* ==========================================================================
   The Networking Life — Funnel Logic (2026) Completo y Corregido
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const player = document.getElementById("player");
  const overlay = document.getElementById("overlay");
  const overlayContent = document.getElementById("overlayContent");
  const stageLabel = document.getElementById("stageLabel");
  const stageTitle = document.getElementById("stageTitle");
  const progressBar = document.getElementById("progressBar");
  const playPauseButton = document.getElementById("playPauseButton");
  
  const languageGate = document.getElementById("languageGate");
  const heroSection = document.getElementById("heroSection");
  const trainingCard = document.getElementById("trainingCard");
  const socialSection = document.getElementById("socialSection");
  const contactFloats = document.getElementById("contactFloats");
  const whatsappFloat = document.getElementById("whatsappFloat");
  const telegramFloat = document.getElementById("telegramFloat");

  const content = {
    es: {
      htmlLang: "es",
      introVideo: "assets/media/intro-es.mp4",
      finalVideo: "assets/media/final-es.mp4",
      introFallbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      finalFallbackVideo: "https://www.w3schools.com/html/movie.mp4",
      heroEyebrow: "Experiencia de Entrenamiento Interactivo",
      heroTitle: "Aprende, califica y toma acción.",
      heroCopy: "Mira la información del negocio, responde las preguntas de calificación y descubre cómo registrarte.",
      socialTitle: "Síguenos en redes sociales",
      stepIntroLabel: "Paso 1 de 3",
      stepIntroTitle: "Conoce la oportunidad de negocio",
      stepQuestionsLabel: "Paso 2 de 3",
      stepQuestionsTitle: "Responde las preguntas de calificación",
      stepFinalLabel: "Paso 3 de 3",
      stepQualifiedTitle: "Calificado: mira cómo registrarte",
      stepFinalVideoTitle: "Guía paso a paso para tu registro",
      questionKicker: "Pregunta",
      ofText: "de",
      questions: [
        "¿Estás abierto a aprender una nueva oportunidad de negocio o ingresos?",
        "¿Estás dispuesto a recomendar productos o servicios en los que crees?",
        "¿Puedes dedicar tiempo cada semana para aprender y tomar acción?",
        "¿Te sientes cómodo hablando con personas o invitándolas a conocer más?",
        "¿Quieres un camino flexible que pueda crecer con el tiempo?"
      ],
      yes: "Sí",
      no: "No",
      qualifiedKicker: "Calificado",
      qualifiedTitle: "Estás listo para el siguiente paso.",
      qualifiedCopy: "Respondiste sí a todas las preguntas. Ahora mira el video que explica cómo registrarte.",
      watchNext: "Ver video de registro",
      educationKicker: "Ruta educativa",
      notQualifiedTitle: "Quizás todavía no sea el momento correcto.",
      notQualifiedCopy: "No hay problema. Puedes repetir el video inicial y seguir aprendiendo primero.",
      replayIntro: "Repetir video inicial",
      finalKicker: "Decisión final",
      finalTitle: "¡Es hora de registrarte!",
      finalCopy: "Haz clic en el botón para ir a la página de registro. Si necesitas ayuda, contáctanos por WhatsApp o Telegram.",
      finalCta: "Ir a la página de registro",
      restart: "Reiniciar",
      play: "Play",
      pause: "Pause",
      whatsappText: "Hola,%20ya%20vi%20la%20informacion%20y%20quiero%20ayuda%20para%20registrarme",
      registrationUrl: "https://tupagina.com/registro",
      telegramUrl: "#TELEGRAM_ES"
    },
    en: {
      htmlLang: "en",
      introVideo: "assets/media/intro-en.mp4",
      finalVideo: "assets/media/final-en.mp4",
      introFallbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      finalFallbackVideo: "https://www.w3schools.com/html/movie.mp4",
      heroEyebrow: "Interactive Training Experience",
      heroTitle: "Learn, qualify, and take action.",
      heroCopy: "Watch the business info, answer the qualification questions, and learn how to register.",
      socialTitle: "Follow us on social media",
      stepIntroLabel: "Step 1 of 3",
      stepIntroTitle: "Discover the business opportunity",
      stepQuestionsLabel: "Step 2 of 3",
      stepQuestionsTitle: "Answer the qualification questions",
      stepFinalLabel: "Step 3 of 3",
      stepQualifiedTitle: "Qualified: watch how to register",
      stepFinalVideoTitle: "Step-by-step registration guide",
      questionKicker: "Question",
      ofText: "of",
      questions: [
        "Are you open to learning a new business or income opportunity?",
        "Are you willing to recommend products or services you believe in?",
        "Can you commit time each week to learn and take action?",
        "Are you comfortable talking with people or inviting them to learn more?",
        "Do you want a flexible business path that can grow over time?"
      ],
      yes: "Yes",
      no: "No",
      qualifiedKicker: "Qualified",
      qualifiedTitle: "You are ready for the next step.",
      qualifiedCopy: "You answered yes to all questions. Now watch the video on how to register.",
      watchNext: "Watch registration video",
      educationKicker: "Educational path",
      notQualifiedTitle: "This may not be the right step yet.",
      notQualifiedCopy: "No problem. You can replay the intro video and keep learning first.",
      replayIntro: "Replay intro",
      finalKicker: "Final decision",
      finalTitle: "Time to register!",
      finalCopy: "Click the button to go to the registration page. If you need help, contact us via WhatsApp or Telegram.",
      finalCta: "Go to registration page",
      restart: "Restart",
      play: "Play",
      pause: "Pause",
      whatsappText: "Hello,%20I%20watched%20the%20information%20and%20I%20need%20help%20registering",
      registrationUrl: "https://yourwebsite.com/register",
      telegramUrl: "#TELEGRAM_EN"
    },
    ko: {
      htmlLang: "ko",
      introVideo: "assets/media/intro-ko.mp4",
      finalVideo: "assets/media/final-ko.mp4",
      introFallbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      finalFallbackVideo: "https://www.w3schools.com/html/movie.mp4",
      heroEyebrow: "인터랙티브 트레이닝 경험",
      heroTitle: "배우고, 확인하고, 행동하세요.",
      heroCopy: "비즈니스 정보를 시청하고, 자격 질문에 답한 뒤 등록 방법을 확인하세요.",
      socialTitle: "소셜 미디어에서 팔로우하세요",
      stepIntroLabel: "1단계 / 3단계",
      stepIntroTitle: "비즈니스 기회 알아보기",
      stepQuestionsLabel: "2단계 / 3단계",
      stepQuestionsTitle: "자격 확인 질문에 답하세요",
      stepFinalLabel: "3단계 / 3단계",
      stepQualifiedTitle: "자격 확인 완료: 등록 방법 보기",
      stepFinalVideoTitle: "단계별 등록 가이드",
      questionKicker: "질문",
      ofText: "/",
      questions: [
        "새로운 비즈니스 또는 수입 기회를 배울 의향이 있으신가요?",
        "믿을 수 있는 제품이나 서비스를 추천할 의향이 있으신가요?",
        "매주 학습하고 실행할 시간을 투자할 수 있으신가요?",
        "사람들과 대화하거나 더 알아보도록 초대하는 것이 편하신가요?",
        "시간이 지날수록 성장할 수 있는 유연한 길을 원하시나요?"
      ],
      yes: "예",
      no: "아니요",
      qualifiedKicker: "자격 확인 완료",
      qualifiedTitle: "다음 단계로 갈 준비가 되었습니다.",
      qualifiedCopy: "모든 질문에 예라고 답하셨습니다. 등록 방법을 설명하는 영상을 시청하세요.",
      watchNext: "등록 영상 보기",
      educationKicker: "학습 경로",
      notQualifiedTitle: "아직은 적절한 시점이 아닐 수 있습니다.",
      notQualifiedCopy: "괜찮습니다. 첫 번째 영상을 다시 보고 먼저 더 배울 수 있습니다.",
      replayIntro: "첫 영상 다시 보기",
      finalKicker: "최종 결정",
      finalTitle: "등록할 시간입니다!",
      finalCopy: "등록 페이지로 이동하려면 버튼을 클릭하세요. 도움이 필요하시면 WhatsApp 또는 Telegram으로 문의하세요.",
      finalCta: "등록 페이지로 이동",
      restart: "다시 시작",
      play: "Play",
      pause: "Pause",
      whatsappText: "안녕하세요,%20정보를%20시청했고%20등록에%20도움이%20필요합니다",
      registrationUrl: "https://yourwebsite.com/register-ko",
      telegramUrl: "#TELEGRAM_KO"
    },
    zh: {
      htmlLang: "zh-CN",
      introVideo: "assets/media/intro-zh.mp4",
      finalVideo: "assets/media/final-zh.mp4",
      introFallbackVideo: "https://www.w3schools.com/html/mov_bbb.mp4",
      finalFallbackVideo: "https://www.w3schools.com/html/movie.mp4",
      heroEyebrow: "互动培训体验",
      heroTitle: "学习、确认资格并采取行动。",
      heroCopy: "观看业务信息，回答资格问题，并了解如何注册。",
      socialTitle: "在社交媒体上关注我们",
      stepIntroLabel: "第 1 步，共 3 步",
      stepIntroTitle: "了解商业机会",
      stepQuestionsLabel: "第 2 步，共 3 步",
      stepQuestionsTitle: "回答资格问题",
      stepFinalLabel: "第 3 步，共 3 步",
      stepQualifiedTitle: "已符合条件：观看如何注册",
      stepFinalVideoTitle: "分步注册指南",
      questionKicker: "问题",
      ofText: "/",
      questions: [
        "你是否愿意了解新的业务或收入机会？",
        "你是否愿意推荐自己认可的产品或服务？",
        "你是否每周都能投入时间学习并采取行动？",
        "你是否愿意与他人沟通或邀请他们了解更多？",
        "你是否希望拥有一条可以随时间成长的灵活路径？"
      ],
      yes: "是",
      no: "否",
      qualifiedKicker: "已符合条件",
      qualifiedTitle: "你已准备好进入下一步。",
      qualifiedCopy: "你对所有问题都回答了“是”。现在观看有关如何注册的视频。",
      watchNext: "观看注册视频",
      educationKicker: "学习路径",
      notQualifiedTitle: "现在可能还不是最合适的时机。",
      notQualifiedCopy: "没关系。你可以重新观看介绍视频，先继续了解。",
      replayIntro: "重新观看介绍视频",
      finalKicker: "最终决定",
      finalTitle: "是时候注册了！",
      finalCopy: "点击按钮前往注册页面。如果您需要帮助，请通过 WhatsApp 或 Telegram 联系我们。",
      finalCta: "前往注册页面",
      restart: "重新开始",
      play: "Play",
      pause: "Pause",
      whatsappText: "你好，%20我已经观看了信息，需要注册帮助",
      registrationUrl: "https://yourwebsite.com/register-zh",
      telegramUrl: "#TELEGRAM_ZH"
    }
  };

  let activeContent = null;
  let stage = "language";
  let currentQuestionIndex = 0;
  let currentVideoRole = "intro";
  const WHATSAPP_PHONE = "19292254227";

  player.removeAttribute("controls");
  
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => selectLanguage(button.dataset.language));
  });

  function selectLanguage(langCode) {
    activeContent = content[langCode];
    document.documentElement.lang = activeContent.htmlLang;
    
    document.getElementById("heroEyebrow").textContent = activeContent.heroEyebrow;
    document.getElementById("heroTitle").textContent = activeContent.heroTitle;
    document.getElementById("heroCopy").textContent = activeContent.heroCopy;
    document.getElementById("socialTitle").textContent = activeContent.socialTitle;

    languageGate.classList.add("is-hidden");
    heroSection.classList.remove("is-hidden");
    trainingCard.classList.remove("is-hidden");
    socialSection.classList.remove("is-hidden");
    
    // Ocultar botones al iniciar
    contactFloats.classList.add("is-hidden");
    contactFloats.style.display = "none"; 

    stage = "intro";
    currentQuestionIndex = 0;
    overlay.style.display = "none"; // FIX: Ocultar capa oscura al iniciar
    
    setProgress(activeContent.stepIntroLabel, activeContent.stepIntroTitle, 20);
    loadVideo(activeContent.introVideo, "intro", true);
  }

  function loadVideo(src, role, autoplay = true) {
    currentVideoRole = role;
    overlay.style.display = "none"; // FIX: Ocultar capa oscura al cargar video
    player.src = src;
    player.load();
    
    if (autoplay) {
      const playPromise = player.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Autoplay bloqueado. El usuario debe dar clic a Play.");
        });
      }
    }
    updatePlayPauseButton();
  }

  player.addEventListener("error", () => {
    if (!activeContent) return;
    const fallbackSrc = currentVideoRole === "final" ? activeContent.finalFallbackVideo : activeContent.introFallbackVideo;
    const currentSrc = player.src || "";

    if (fallbackSrc && !currentSrc.includes(fallbackSrc)) {
      player.src = fallbackSrc;
      player.load();
      player.play().catch(() => {}); 
    }
  });

  function setProgress(label, title, percent) {
    stageLabel.textContent = label;
    stageTitle.textContent = title;
    progressBar.style.width = `${percent}%`;
  }

    function updatePlayPauseButton() {
    if (!playPauseButton || !activeContent) return;
    
    const isPaused = player.paused || player.ended;
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");

    if (isPaused) {
      if (iconPlay) iconPlay.style.display = "block";
      if (iconPause) iconPause.style.display = "none";
      playPauseButton.setAttribute("aria-label", activeContent.play || "Play");
    } else {
      if (iconPlay) iconPlay.style.display = "none";
      if (iconPause) iconPause.style.display = "block";
      playPauseButton.setAttribute("aria-label", activeContent.pause || "Pause");
    }
  }

  playPauseButton.addEventListener("click", () => {
    if (player.paused) player.play(); else player.pause();
  });

  player.addEventListener("play", updatePlayPauseButton);
  player.addEventListener("pause", updatePlayPauseButton);
  
  player.addEventListener("ended", () => {
    updatePlayPauseButton();
    if (stage === "intro") {
      startQualification();
    } else if (stage === "final-video") {
      showFinalCTA();
    }
  });

  function startQualification() {
    stage = "qualification";
    currentQuestionIndex = 0;
    setProgress(activeContent.stepQuestionsLabel, activeContent.stepQuestionsTitle, 50);
    renderQuestion();
  }

  function renderQuestion() {
    const qNum = currentQuestionIndex + 1;
    const total = activeContent.questions.length;
    
    overlay.style.display = "flex";
    overlayContent.innerHTML = `
      <p class="eyebrow">${activeContent.questionKicker} ${qNum} ${activeContent.ofText} ${total}</p>
      <h2>${activeContent.questions[currentQuestionIndex]}</h2>
      <div class="overlay-actions">
        <button class="btn-primary" data-action="yes">${activeContent.yes}</button>
        <button class="btn-secondary" data-action="no">${activeContent.no}</button>
      </div>
    `;
  }

  overlay.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;
    
    if (btn.dataset.action === "yes") {
      answerQuestion(true);
    } else if (btn.dataset.action === "no") {
      answerQuestion(false);
    } else if (btn.dataset.action === "play-final") {
      playFinalVideo();
    } else if (btn.dataset.action === "restart") {
      restartFunnel();
    } else if (btn.dataset.action === "register") {
      window.open(activeContent.registrationUrl, "_blank");
    }
  });

  function answerQuestion(isYes) {
    if (!isYes) {
      showNotQualifiedPath();
      return;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex >= activeContent.questions.length) {
      showQualifiedPath();
    } else {
      renderQuestion();
    }
  }

  function showQualifiedPath() {
    setProgress(activeContent.stepFinalLabel, activeContent.stepQualifiedTitle, 80);
    overlay.style.display = "flex";
    overlayContent.innerHTML = `
      <p class="eyebrow" style="color:#25D366">${activeContent.qualifiedKicker}</p>
      <h2>${activeContent.qualifiedTitle}</h2>
      <p class="overlay-copy">${activeContent.qualifiedCopy}</p>
      <div class="overlay-actions">
        <button class="btn-primary" data-action="play-final">${activeContent.watchNext}</button>
      </div>
    `;
  }

  function showNotQualifiedPath() {
    overlay.style.display = "flex";
    overlayContent.innerHTML = `
      <p class="eyebrow" style="color:#FFD54A">${activeContent.educationKicker}</p>
      <h2>${activeContent.notQualifiedTitle}</h2>
      <p class="overlay-copy">${activeContent.notQualifiedCopy}</p>
      <div class="overlay-actions">
        <button class="btn-secondary" data-action="restart">${activeContent.replayIntro}</button>
      </div>
    `;
  }

  function playFinalVideo() {
    stage = "final-video";
    overlay.style.display = "none";
    setProgress(activeContent.stepFinalLabel, activeContent.stepFinalVideoTitle, 90);
    loadVideo(activeContent.finalVideo, "final", true); 
  }

      function restartFunnel() {
    stage = "intro";
    overlay.style.display = "none";
    contactFloats.classList.add("is-hidden"); // Ocultar botones
    setProgress(activeContent.stepIntroLabel, activeContent.stepIntroTitle, 20);
    loadVideo(activeContent.introVideo, "intro", true);
  }

          function showFinalCTA() {
    stage = "final";
    setProgress(activeContent.stepFinalLabel, activeContent.finalTitle, 100);
    
    whatsappFloat.href = `https://wa.me/${WHATSAPP_PHONE}?text=${activeContent.whatsappText}`;
    if(activeContent.telegramUrl) telegramFloat.href = activeContent.telegramUrl;
    
    // Forzar aparición de los botones
    contactFloats.classList.remove("is-hidden");
    
    overlay.style.display = "flex";
    overlayContent.innerHTML = `
      <p class="eyebrow" style="color:#25D366">${activeContent.finalKicker}</p>
      <h2>${activeContent.finalTitle}</h2>
      <p class="overlay-copy">${activeContent.finalCopy}</p>
      <div class="overlay-actions">
        <button class="btn-primary" data-action="register">${activeContent.finalCta}</button>
        <button class="btn-secondary" data-action="restart">${activeContent.restart}</button>
      </div>
    `;
  }
});
