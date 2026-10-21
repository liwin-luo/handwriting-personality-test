export const CONSENT_KEY = "hpt.consent";
export const CONSENT_EVENT = "hpt-consent";

const copy = {
  en: {
    before: "This site stores quiz answers on this device so you can resume, and sends ",
    emphasis: "anonymous page and tool analytics",
    after: ". There are no ads or a profile.",
    privacy: "Privacy",
    accept: "Accept",
    reject: "Reject non-essential",
  },
  zh: {
    before: "本站把测验答案存在这台设备上，以便继续作答，并发送",
    emphasis: "匿名的页面浏览与工具使用统计",
    after: "。没有广告，也没有个性化追踪。",
    privacy: "隐私政策",
    accept: "接受",
    reject: "拒绝非必要的",
  },
  es: {
    before: "Este sitio guarda las respuestas en este dispositivo para que puedas seguir, y envía ",
    emphasis: "estadísticas anónimas de páginas y herramientas",
    after: ". No hay anuncios ni un perfil.",
    privacy: "Privacidad",
    accept: "Aceptar",
    reject: "Rechazar lo no esencial",
  },
  pt: {
    before: "Este site guarda as respostas neste dispositivo para você continuar, e envia ",
    emphasis: "estatísticas anônimas de páginas e ferramentas",
    after: ". Não há anúncios nem um perfil.",
    privacy: "Privacidade",
    accept: "Aceitar",
    reject: "Recusar o não essencial",
  },
  fr: {
    before: "Ce site enregistre les réponses sur cet appareil pour que vous puissiez reprendre, et envoie des ",
    emphasis: "statistiques anonymes de pages et d'outils",
    after: ". Pas de publicité, pas de profil.",
    privacy: "Confidentialité",
    accept: "Accepter",
    reject: "Refuser le non essentiel",
  },
  de: {
    before: "Diese Website speichert die Testantworten auf diesem Gerät und sendet ",
    emphasis: "anonyme Seiten- und Werkzeugstatistik",
    after: ". Keine Werbung und kein Profil.",
    privacy: "Datenschutz",
    accept: "Akzeptieren",
    reject: "Nicht notwendige ablehnen",
  },
  id: {
    before: "Situs ini menyimpan jawaban di perangkat ini agar Anda bisa melanjutkan, dan mengirim ",
    emphasis: "statistik anonim halaman serta alat",
    after: ". Tidak ada iklan atau profil.",
    privacy: "Privasi",
    accept: "Terima",
    reject: "Tolak yang tidak perlu",
  },
  vi: {
    before: "Trang này lưu câu trả lời trên thiết bị này để bạn làm tiếp, và gửi ",
    emphasis: "thống kê ẩn danh về lượt xem và công cụ",
    after: ". Không có quảng cáo hay hồ sơ.",
    privacy: "Quyền riêng tư",
    accept: "Chấp nhận",
    reject: "Từ chối phần không cần thiết",
  },
  it: {
    before: "Questo sito salva le risposte su questo dispositivo così puoi riprendere, e invia ",
    emphasis: "statistiche anonime di pagine e strumenti",
    after: ". Niente pubblicità e niente profilo.",
    privacy: "Privacy",
    accept: "Accetta",
    reject: "Rifiuta il non essenziale",
  },
  tr: {
    before: "Bu site test yanıtlarını bu cihazda saklar ve ",
    emphasis: "anonim sayfa ile araç istatistiği",
    after: " gönderir. Reklam yok, profil yok.",
    privacy: "Gizlilik",
    accept: "Kabul et",
    reject: "Gerekli olmayanları reddet",
  },
};

export function consentCopy(lang) {
  return copy[lang] ?? copy.en;
}

export function analyticsAllowed(choice) {
  return choice === "all";
}

export function readConsent() {
  if (typeof localStorage === "undefined") return null;
  try {
    const value = localStorage.getItem(CONSENT_KEY);
    return value === "all" || value === "essential" ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice) {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Private mode can block storage. The event still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: choice }));
}
