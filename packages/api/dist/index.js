import axios from 'axios';
import { toast } from 'sonner';

// src/core/client.ts
var client = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});
var getJSON = (url, params) => client.get(url, { params }).then((res) => res.data);
var postJSON = (url, body) => client.post(url, body).then((res) => res.data);
var patchJSON = (url, body) => client.patch(url, body).then((res) => res.data);
function setGlobalAuthToken(token) {
  if (token) {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete client.defaults.headers.common["Authorization"];
  }
}

// src/core/endpoints.ts
var endpoints = {
  auth: {
    login: () => `/auth/login`,
    signup: () => `/auth/signup`,
    logout: () => `/auth/logout`,
    me: () => `/auth/me`,
    refresh: () => `/auth/refresh`,
    checkUsername: (username, firstName, lastName) => {
      const search = new URLSearchParams({ username });
      if (firstName) search.set("firstName", firstName);
      if (lastName) search.set("lastName", lastName);
      return `/auth/check-username?${search.toString()}`;
    }
  },
  meta: {
    careers: () => `/user/meta/careers`,
    locations: (query) => `/locations/search?q=${encodeURIComponent(query)}`,
    universities: (query) => `/user/meta/universities?query=${encodeURIComponent(query)}`,
    universityById: (id) => `/user/meta/universities/${id}`
  },
  networking: {
    stats: () => `/networking/stats`,
    requests: () => `/networking/requests`,
    accept: (requestId) => `/networking/requests/${encodeURIComponent(requestId)}/accept`,
    decline: (requestId) => `/networking/requests/${encodeURIComponent(requestId)}/decline`,
    boost: () => `/networking/boost`,
    connections: () => `/profiles/connections`,
    removeConnection: (targetUserId) => `/profiles/connections/${encodeURIComponent(targetUserId)}`
  },
  /**
   * 📡 DISCOVERY ENGINE (The Swipe Stack & Studio)
   */
  discovery: {
    stack: () => `/discovery/stack`,
    swipe: () => `/discovery/swipe`,
    me: () => `/discovery/me`,
    updateOrb: (orbId) => `/discovery/orbs/${encodeURIComponent(orbId)}`,
    publish: () => `/discovery/publish`,
    search: () => `/discovery/search`
    // Media search for Personality slot
  },
  users: {
    base: "/profiles",
    byId: (slugOrUsername) => `/profiles/${encodeURIComponent(slugOrUsername)}`,
    updateMe: () => `/profiles/me`,
    search: () => `/profiles/search`,
    block: (userId) => `/profiles/${encodeURIComponent(userId)}/block`,
    status: () => `/user/status`,
    onboarding: {
      step: () => `/user/onboarding/step`,
      complete: () => `/user/onboarding/complete`
    }
  },
  communities: {
    list: () => `/communities`,
    search: () => `/communities/search`,
    categories: () => `/communities/categories`,
    create: () => `/communities`,
    byId: (id) => `/communities/${id}`,
    update: (id) => `/communities/${id}`,
    join: (id) => `/communities/${id}/join`,
    leave: (id) => `/communities/${id}/leave`,
    members: (id) => `/communities/${id}/members`,
    threads: (communityId) => `/communities/${communityId}/threads`,
    threadDetail: (threadId) => `/communities/threads/${threadId}`,
    vote: (threadId) => `/communities/threads/${threadId}/vote`
  },
  inbox: {
    list: () => `/messages/inbox`,
    markRead: (id) => `/messages/inbox/${encodeURIComponent(id)}/read`,
    updatePreferences: () => `/messages/inbox/preferences`
  },
  conversations: {
    byId: (id) => `/messages/${encodeURIComponent(id)}`,
    actions: (id) => `/messages/${encodeURIComponent(id)}/actions`,
    create: () => `/messages`,
    messages: (id) => `/messages/${encodeURIComponent(id)}/messages`,
    sharedContent: (id) => `/messages/shared/${encodeURIComponent(id)}`,
    unsend: (messageId) => `/messages/unsend/${encodeURIComponent(messageId)}`,
    candidates: () => `/messages/discovery/candidates`
  },
  feed: {
    base: () => `/feed`,
    posts: () => `/feed/posts`,
    postById: (id) => `/feed/posts/${id}`,
    metadata: () => `/feed/link-metadata`,
    profile: (userId) => `/feed/profile/${encodeURIComponent(userId)}`,
    drafts: {
      base: () => `/feed/drafts`,
      count: () => `/feed/drafts/count`,
      byId: (id) => `/feed/drafts/${id}`
    },
    interactions: {
      like: (id) => `/feed/posts/${id}/like`,
      likeComment: (commentId) => `/feed/comments/${commentId}/like`,
      save: (id) => `/feed/posts/${id}/save`,
      comment: (id) => `/feed/posts/${id}/comments`,
      commentById: (commentId) => `/feed/comments/${commentId}`,
      reshare: (id) => `/feed/posts/${id}/reshare`,
      pollVote: (id) => `/feed/polls/${id}/vote`
    }
  },
  notifications: {
    base: () => `/notifications`,
    markAllRead: () => `/notifications/mark-all-read`,
    markRead: (id) => `/notifications/${encodeURIComponent(id)}/read`
  },
  settings: {
    base: () => `/settings`,
    password: () => `/settings/password`,
    email: () => `/settings/email`,
    deleteAccount: () => `/settings/delete-account`,
    privacy: () => `/settings/privacy`,
    notifications: () => `/settings/notifications`,
    theme: () => `/settings/theme`,
    display: () => `/settings/display`
  },
  uploads: {
    sign: () => `/media/sign`,
    image: () => `/uploads/image`,
    file: () => `/uploads/file`,
    voice: () => `/uploads/voice`
  },
  analytics: {
    track: () => `/analytics/events`,
    trending: (limit = 5) => `/analytics/trending?limit=${limit}`,
    rateLimit: () => `/analytics/rate-limit`
  },
  help: {
    layout: () => `/help/layout`,
    category: (id) => `/help/categories/${encodeURIComponent(id)}`,
    search: (query) => `/help/search?q=${encodeURIComponent(query)}`
  }
};
var AppError = class extends Error {
  status;
  errorCode;
  constructor(message, meta = {}) {
    super(message);
    this.name = "AppError";
    this.status = meta.status;
    this.errorCode = meta.errorCode;
  }
};
function setupInterceptors(instance, onUnauthorized) {
  instance.interceptors.response.use(
    (res) => res,
    (error) => {
      const status = error.response?.status;
      const data = error.response?.data;
      const appErr = new AppError(data?.message || "Something went wrong", {
        status,
        errorCode: data?.errorCode
      });
      const isRefreshPath = error.config?.url?.includes("/auth/refresh");
      if (status === 401 && !isRefreshPath && onUnauthorized) {
        onUnauthorized();
      }
      if (status && status >= 500) {
        toast.error("Unio Server Error. We're on it!");
      }
      return Promise.reject(appErr);
    }
  );
}

// src/service/auth.ts
var login = (payload) => postJSON(endpoints.auth.login(), payload);
var signup = (payload) => postJSON(endpoints.auth.signup(), payload);
var refresh = () => postJSON(endpoints.auth.refresh());
var logout = () => postJSON(endpoints.auth.logout());
var getMe = () => getJSON(endpoints.auth.me());
var checkUsername = (username, firstName, lastName) => getJSON(
  endpoints.auth.checkUsername(username, firstName, lastName)
);
var authApi = {
  login,
  signup,
  refresh,
  logout,
  getMe,
  checkUsername
};

// src/service/meta.ts
async function getCareers(query) {
  const response = await getJSON(
    endpoints.meta.careers(),
    query ? { query } : {}
  );
  return response.careers;
}

export { AppError, authApi, checkUsername, client, endpoints, getCareers, getJSON, getMe, login, logout, patchJSON, postJSON, refresh, setGlobalAuthToken, setupInterceptors, signup };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map