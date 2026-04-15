/* packages/lib/src/constants/authMessages.ts */

export const LOGIN_MESSAGES: readonly string[] = [
  "Your world is moving. Let’s move with it.",
  "Every return is a step forward.",
  "Good things grow when you show up.",
  "Your presence matters here.",
  "There’s momentum in the choices you make.",
  "Your next opportunity is already in motion.",
  "Small steps create powerful outcomes.",
  "Your network evolves when you do.",
  "Everything you build here moves you forward.",
  "Show up ready for what’s next.",
  "Your community is here for you.",
  "You are part of something growing.",
  "Every connection starts with a moment like this.",
  "Your path is unfolding. Take the next step.",
  "You’re here for a reason. Trust your pace.",
  "Lead with intention. Connect with purpose.",
  "Confidence looks good on you.",
  "Your network is active. So are your opportunities.",
] as const;

export const getDailyLoginMessage = (): string => {
  if (typeof window === "undefined") return LOGIN_MESSAGES[0];
  
  try {
    const today = new Date().toISOString().slice(0, 10);
    const stored = localStorage.getItem("unio_login_message");
    const parsed = stored ? JSON.parse(stored) : null;

    if (parsed?.date === today && parsed?.message) {
      return parsed.message;
    }

    const newMessage = LOGIN_MESSAGES[Math.floor(Math.random() * LOGIN_MESSAGES.length)];
    localStorage.setItem("unio_login_message", JSON.stringify({ date: today, message: newMessage }));

    return newMessage;
  } catch {
    return LOGIN_MESSAGES[0];
  }
};