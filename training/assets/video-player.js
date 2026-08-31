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
const heroEyebrow = document.getElementById("heroEyebrow");
const heroTitle = document.getElementById("heroTitle");
const heroCopy = document.getElementById("heroCopy");
const socialTitle = document.getElementById("socialTitle");
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
    heroCopy: "Mira la información principal, responde las preguntas de calificación y toma una decisión al final del entrenamiento.",
    socialTitle: "Síguenos en redes sociales",
    stepIntroLabel: "Paso 1 de 3",
    stepIntroTitle: "Mira el video inicial",
    stepQuestionsLabel: "Paso 2 de 3",
    stepQuestionsTitle: "Responde las preguntas de calificación",
    stepFinalLabel: "Paso 3 de 3",
    stepQualifiedTitle: "Calificado: mira la información final",
    stepFinalVideoTitle: "Mira el video final",
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
    qualifiedCopy: "Respondiste sí a todas las preguntas. Ahora mira la información final antes de tomar tu decisión.",
    watchNext: "Ver siguiente video",
    educationKicker: "Ruta educativa",
    notQualifiedTitle: "Quizás todavía no sea el momento correcto.",
    notQualifiedCopy: "No hay problema. Puedes repetir el video inicial y seguir aprendiendo primero.",
    replayIntro: "Repetir video inicial",
    finalKicker: "Decisión final",
    finalTitle: "¿Listo para convertirte en cliente o socio?",
    finalCopy: "Ya viste la información principal. Ahora puedes continuar con el próximo paso.",
    finalCta: "Convertirse en cliente o socio",
    restart: "Reiniciar",
    play: "Play",
    pause: "Pause",
    whatsappText: "Hola,%20ya%20vi%20la%20informacion%20en%20espanol%20y%20quiero%20mas%20informacion",
    registrationUrl: "#REGISTRO_COMPLETO_ES",
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
    heroCopy: "Watch the main information, answer the qualification questions, and make your decision at the end of the training.",
    socialTitle: "Follow us on social media",
    stepIntroLabel: "Step 1 of 3",
    stepIntroTitle: "Watch the intro video",
    stepQuestionsLabel: "Step 2 of 3",
    stepQuestionsTitle: "Answer the qualification questions",
    stepFinalLabel: "Step 3 of 3",
    stepQualifiedTitle: "Qualified: watch the final information",
    stepFinalVideoTitle: "Watch the final video",
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
    qualifiedCopy: "You answered yes to all qualification questions. Now watch the final information before making your decision.",
    watchNext: "Watch next video",
    educationKicker: "Educational path",
    notQualifiedTitle: "This may not be the right step yet.",
    notQualifiedCopy: "No problem. You can replay the intro video and keep learning first.",
    replayIntro: "Replay intro",
    finalKicker: "Final decision",
    finalTitle: "Ready to become a client or partner?",
    finalCopy: "You watched the main information. You can now continue to the next step.",
    finalCta: "Become a client or partner",
    restart: "Restart",
    play: "Play",
    pause: "Pause",
    whatsappText: "Hello,%20I%20watched%20the%20information%20in%20English%20and%20I%20want%20more%20information",
    registrationUrl: "#FULL_REGISTRATION_EN",
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
    heroCopy: "핵심 정보를 시청하고, 자격 확인 질문에 답한 뒤, 마지막 단계에서 결정을 내리세요.",
    socialTitle: "소셜 미디어에서 팔로우하세요",
    stepIntroLabel: "1단계 / 3단계",
    stepIntroTitle: "첫 번째 영상을 시청하세요",
    stepQuestionsLabel: "2단계 / 3단계",
    stepQuestionsTitle: "자격 확인 질문에 답하세요",
    stepFinalLabel: "3단계 / 3단계",
    stepQualifiedTitle: "자격 확인 완료: 마지막 정보를 시청하세요",
    stepFinalVideoTitle: "마지막 영상을 시청하세요",
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
    qualifiedCopy: "모든 질문에 예라고 답하셨습니다. 결정을 내리기 전에 마지막 정보를 시청하세요.",
    watchNext: "다음 영상 보기",
    educationKicker: "학습 경로",
    notQualifiedTitle: "아직은 적절한 시점이 아닐 수 있습니다.",
    notQualifiedCopy: "괜찮습니다. 첫 번째 영상을 다시 보고 먼저 더 배울 수 있습니다.",
    replayIntro: "첫 영상 다시 보기",
    finalKicker: "최종 결정",
    finalTitle: "고객 또는 파트너가 될 준비가 되셨나요?",
    finalCopy: "핵심 정보를 모두 시청했습니다. 이제 다음 단계로 진행할 수 있습니다.",
    finalCta: "고객 또는 파트너 되기",
    restart: "다시 시작",
    play: "Play",
    pause: "Pause",
    whatsappText: "안녕하세요,%20한국어%20정보를%20시청했고%20더%20알고%20싶습니다",
    registrationUrl: "#REGISTRATION_KO",
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
    heroCopy: "观看主要信息，回答资格问题，并在最后一步做出决定。",
    socialTitle: "在社交媒体上关注我们",
    stepIntroLabel: "第 1 步，共 3 步",
    stepIntroTitle: "观看介绍视频",
    stepQuestionsLabel: "第 2 步，共 3 步",
    stepQuestionsTitle: "回答资格问题",
    stepFinalLabel: "第 3 步，共 3 步",
    stepQualifiedTitle: "已符合条件：观看最终信息",
    stepFinalVideoTitle: "观看最终视频",
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
    qualifiedCopy: "你对所有资格问题都回答了“是”。在做决定前，请观看最终信息。",
    watchNext: "观看下一个视频",
    educationKicker: "学习路径",
    notQualifiedTitle: "现在可能还不是最合适的时机。",
    notQualifiedCopy: "没关系。你可以重新观看介绍视频，先继续了解。",
    replayIntro: "重新观看介绍视频",
    finalKicker: "最终决定",
    finalTitle: "准备成为客户或合作伙伴了吗？",
    finalCopy: "你已经看完主要信息。现在可以继续进入下一步。",
    finalCta: "成为客户或合作伙伴",
    restart: "重新开始",
    play: "Play",
    pause: "Pause",
    whatsappText: "你好，%20我已经观看了中文信息，%20想了解更多",
    registrationUrl: "#REGISTRATION_ZH",
    telegramUrl: "#TELEGRAM_ZH"
  }
};

let selectedLanguage = null;
let activeContent = null;
let stage = "language";
let currentQuestionIndex = 0;
let answers = [];
let lastAllowedTime = 0;
let allowProgrammaticSeek = false;

const SEEK_TOLERANCE_SECONDS = 1.25;
const WHATSAPP_PHONE = "19292254227";

player.removeAttribute("controls");
player.controls = false;

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => selectLanguage(button.dataset.language));
});

player.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

player.addEventListener("timeupdate", () => {
  if (!player.seeking) {
    lastAllowedTime = Math.max(lastAllowedTime, player.currentTime);
  }

  updatePlayPauseButton();
});

player.addEventListener("seeking", () => {
  if (allowProgrammaticSeek) return;

  const attemptedJump = Math.abs(player.currentTime - lastAllowedTime) > SEEK_TOLERANCE_SECONDS;
  if (attemptedJump) {
    player.currentTime = lastAllowedTime;
  }
});

player.addEventListener("play", updatePlayPauseButton);
player.addEventListener("pause", updatePlayPauseButton);
player.addEventListener("ended", () => {
  updatePlayPauseButton();

  if (stage === "intro") {
    startQualification();
    return;
  }

  if (stage === "final-video") {
    showFinalCallToAction();
  }
});

if (playPauseButton) {
  playPauseButton.addEventListener("click", togglePlayPause);
}

function selectLanguage(language) {
  selectedLanguage = language;
  activeContent = content[language];

  document.documentElement.lang = activeContent.htmlLang;

  heroEyebrow.textContent = activeContent.heroEyebrow;
  heroTitle.textContent = activeContent.heroTitle;
  heroCopy.textContent = activeContent.heroCopy;
  socialTitle.textContent = activeContent.socialTitle;

  languageGate.classList.add("is-hidden");
  heroSection.classList.remove("is-hidden");
  trainingCard.classList.remove("is-hidden");
  socialSection.classList.remove("is-hidden");
  hideContactLinks();

  stage = "intro";
  currentQuestionIndex = 0;
  answers = [];

  closeOverlay();
  setProgress(activeContent.stepIntroLabel, activeContent.stepIntroTitle, 22);
  loadProtectedVideo(activeContent.introVideo);
  updatePlayPauseButton();
}

function setProgress(label, title, percent) {
  stageLabel.textContent = label;
  stageTitle.textContent = title;
  progressBar.style.width = `${percent}%`;
}

function togglePlayPause() {
  if (stage === "language") return;

  if (player.paused || player.ended) {
    player.play();
    return;
  }

  player.pause();
}

function updatePlayPauseButton() {
  if (!playPauseButton || !activeContent) return;

  const label = player.paused || player.ended ? activeContent.play : activeContent.pause;
  playPauseButton.textContent = label;
  playPauseButton.setAttribute("aria-label", `${label} video`);
}

function loadProtectedVideo(source) {
  allowProgrammaticSeek = true;
  lastAllowedTime = 0;
  player.src = source;
  player.load();

  window.setTimeout(() => {
    allowProgrammaticSeek = false;
  }, 300);
}

function startQualification() {
  stage = "qualification";
  currentQuestionIndex = 0;
  answers = [];
  setProgress(activeContent.stepQuestionsLabel, activeContent.stepQuestionsTitle, 55);
  renderQuestion();
}

function renderQuestion() {
  const questionNumber = currentQuestionIndex + 1;
  const totalQuestions = activeContent.questions.length;
  const question = activeContent.questions[currentQuestionIndex];

  overlay.style.display = "flex";
  overlayContent.innerHTML = `
    <p class="question-kicker">${activeContent.questionKicker} ${questionNumber} ${activeContent.ofText} ${totalQuestions}</p>
    <h2>${question}</h2>
    <div class="question-progress" aria-hidden="true">
      <span style="width: ${(questionNumber / totalQuestions) * 100}%"></span>
    </div>
    <div class="overlay-actions">
      <button class="primary" onclick="answerQuestion(true)">${activeContent.yes}</button>
      <button class="secondary" onclick="answerQuestion(false)">${activeContent.no}</button>
    </div>
  `;
}

function answerQuestion(answer) {
  answers.push(answer);

  if (!answer) {
    showNotQualifiedPath();
    return;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= activeContent.questions.length) {
    showQualifiedPath();
    return;
  }

  renderQuestion();
}

function showQualifiedPath() {
  setProgress(activeContent.stepFinalLabel, activeContent.stepQualifiedTitle, 100);

  overlay.style.display = "flex";
  overlayContent.innerHTML = `
    <p class="question-kicker success">${activeContent.qualifiedKicker}</p>
    <h2>${activeContent.qualifiedTitle}</h2>
    <p class="overlay-copy">${activeContent.qualifiedCopy}</p>
    <div class="overlay-actions">
      <button class="primary" onclick="playQualifiedVideo()">${activeContent.watchNext}</button>
    </div>
  `;
}

function showNotQualifiedPath() {
  setProgress(activeContent.stepQuestionsLabel, activeContent.educationKicker, 55);

  overlay.style.display = "flex";
  overlayContent.innerHTML = `
    <p class="question-kicker warning">${activeContent.educationKicker}</p>
    <h2>${activeContent.notQualifiedTitle}</h2>
    <p class="overlay-copy">${activeContent.notQualifiedCopy}</p>
    <div class="overlay-actions">
      <button class="secondary" onclick="restartIntro()">${activeContent.replayIntro}</button>
    </div>
  `;
}

function playQualifiedVideo() {
  stage = "final-video";
  closeOverlay();
  setProgress(activeContent.stepFinalLabel, activeContent.stepFinalVideoTitle, 82);
  loadProtectedVideo(activeContent.finalVideo);
  player.play();
}

function restartIntro() {
  stage = "intro";
  closeOverlay();
  hideContactLinks();
  setProgress(activeContent.stepIntroLabel, activeContent.stepIntroTitle, 22);
  loadProtectedVideo(activeContent.introVideo);
  player.play();
}

function showFinalCallToAction() {
  stage = "final";
  setContactLinks();

  if (contactFloats) {
    contactFloats.classList.remove("is-hidden");
  }

  overlay.style.display = "flex";
  overlayContent.innerHTML = `
    <p class="question-kicker success">${activeContent.finalKicker}</p>
    <h2>${activeContent.finalTitle}</h2>
    <p class="overlay-copy">${activeContent.finalCopy}</p>
    <div class="overlay-actions">
      <button class="cta" onclick="goRegistration()">${activeContent.finalCta}</button>
      <button class="secondary" onclick="restartIntro()">${activeContent.restart}</button>
    </div>
  `;
}

function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${activeContent.whatsappText}`;
}

function hideContactLinks() {
  if (contactFloats) {
    contactFloats.classList.add("is-hidden");
  }
}

function setContactLinks() {
  if (!activeContent) return;

  if (whatsappFloat) {
    whatsappFloat.href = getWhatsAppUrl();
  }

  if (telegramFloat) {
    telegramFloat.href = activeContent.telegramUrl || "#";
  }
}

function goRegistration() {
  window.open(activeContent.registrationUrl, "_blank", "noopener,noreferrer");
}

function closeOverlay() {
  overlay.style.display = "none";
  overlayContent.innerHTML = "";
}

/* LANGUAGE_VIDEO_ROUTING_GUARD_BEGIN
   Purpose:
   - Keep selected language tied to its own intro/final video files.
   - Use demo fallback only when the local language video is not available yet.
*/
(function attachLanguageVideoRoutingGuard() {
  const video = document.querySelector("video");
  if (!video || typeof content === "undefined") return;

  let lastLanguage = sessionStorage.getItem("interactiveTrainingLanguage") || "es";
  let lastVideoRole = sessionStorage.getItem("interactiveTrainingVideoRole") || "intro";

  function getLanguageConfig(language) {
    return content[language] || content.es;
  }

  function applyLanguageVideo(language, role) {
    const cfg = getLanguageConfig(language);
    if (!cfg || !video) return;

    const src = role === "final" ? cfg.finalVideo : cfg.introVideo;
    if (!src) return;

    lastLanguage = language;
    lastVideoRole = role;
    sessionStorage.setItem("interactiveTrainingLanguage", language);
    sessionStorage.setItem("interactiveTrainingVideoRole", role);

    const currentSrc = video.getAttribute("src") || "";
    if (!currentSrc.endsWith(src)) {
      video.setAttribute("src", src);
      video.load();
    }
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.getAttribute("data-language") || "es";
      setTimeout(() => applyLanguageVideo(language, "intro"), 0);
    });
  });

  video.addEventListener("error", () => {
    const cfg = getLanguageConfig(lastLanguage);
    const fallback = lastVideoRole === "final" ? cfg.finalFallbackVideo : cfg.introFallbackVideo;
    const currentSrc = video.getAttribute("src") || "";

    if (fallback && !currentSrc.includes(fallback)) {
      video.setAttribute("src", fallback);
      video.load();
    }
  });

  window.interactiveTrainingVideoRouting = {
    setIntro(language) {
      applyLanguageVideo(language, "intro");
    },
    setFinal(language) {
      applyLanguageVideo(language, "final");
    },
    getCurrentLanguage() {
      return lastLanguage;
    }
  };
})();
/* LANGUAGE_VIDEO_ROUTING_GUARD_END */
