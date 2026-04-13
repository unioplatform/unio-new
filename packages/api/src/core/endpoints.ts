// -----------------------------------------------------------------------------
// 📁 packages/api-client/src/core/endpoints.ts
// Unio — The Single Source of Truth for all API Routes
// -----------------------------------------------------------------------------

export const endpoints = {
  auth: {
    login: () => `/auth/login`,
    signup: () => `/auth/signup`,
    logout: () => `/auth/logout`,
    me: () => `/auth/me`,
    refresh: () => `/auth/refresh`,
    checkUsername: (username: string, firstName?: string, lastName?: string) => {
      const search = new URLSearchParams({ username });
      if (firstName) search.set("firstName", firstName);
      if (lastName) search.set("lastName", lastName);
      return `/auth/check-username?${search.toString()}`;
    },
  },
  meta: {
    careers: () => `/user/meta/careers`,
    locations: (query: string) => 
      `/locations/search?q=${encodeURIComponent(query)}`,
    universities: (query: string) => 
      `/user/meta/universities?query=${encodeURIComponent(query)}`,
    universityById: (id: string) => `/user/meta/universities/${id}`,
  },
  networking: {
    stats: () => `/networking/stats`,
    requests: () => `/networking/requests`,
    accept: (requestId: string) => `/networking/requests/${encodeURIComponent(requestId)}/accept`,
    decline: (requestId: string) => `/networking/requests/${encodeURIComponent(requestId)}/decline`,
    boost: () => `/networking/boost`,
    connections: () => `/profiles/connections`,
    removeConnection: (targetUserId: string) => `/profiles/connections/${encodeURIComponent(targetUserId)}`,
  },
  /**
   * 📡 DISCOVERY ENGINE (The Swipe Stack & Studio)
   */
  discovery: {
    stack: () => `/discovery/stack`,
    swipe: () => `/discovery/swipe`,
    me: () => `/discovery/me`,
    updateOrb: (orbId: string) => `/discovery/orbs/${encodeURIComponent(orbId)}`,
    publish: () => `/discovery/publish`,
    search: () => `/discovery/search`, // Media search for Personality slot
  },
  users: {
    base: "/profiles",
    byId: (slugOrUsername: string) => `/profiles/${encodeURIComponent(slugOrUsername)}`,
    updateMe: () => `/profiles/me`,
    search: () => `/profiles/search`,
    block: (userId: string) => `/profiles/${encodeURIComponent(userId)}/block`,
    status: () => `/user/status`,
    onboarding: {
      step: () => `/user/onboarding/step`,
      complete: () => `/user/onboarding/complete`,
    }
  },
  communities: {
    list: () => `/communities`,
    search: () => `/communities/search`,
    categories: () => `/communities/categories`,
    create: () => `/communities`,
    byId: (id: string | number) => `/communities/${id}`,
    update: (id: string | number) => `/communities/${id}`,
    join: (id: string | number) => `/communities/${id}/join`,
    leave: (id: string | number) => `/communities/${id}/leave`,
    members: (id: string | number) => `/communities/${id}/members`,
    threads: (communityId: string | number) => `/communities/${communityId}/threads`,
    threadDetail: (threadId: string | number) => `/communities/threads/${threadId}`,
    vote: (threadId: string | number) => `/communities/threads/${threadId}/vote`,
  },
  inbox: {
    list: () => `/messages/inbox`,
    markRead: (id: string) => `/messages/inbox/${encodeURIComponent(id)}/read`,
    updatePreferences: () => `/messages/inbox/preferences`,
  },
  conversations: {
    byId: (id: string) => `/messages/${encodeURIComponent(id)}`,
    actions: (id: string) => `/messages/${encodeURIComponent(id)}/actions`,
    create: () => `/messages`,
    messages: (id: string) => `/messages/${encodeURIComponent(id)}/messages`,
    sharedContent: (id: string) => `/messages/shared/${encodeURIComponent(id)}`,
    unsend: (messageId: string) => `/messages/unsend/${encodeURIComponent(messageId)}`,
    candidates: () => `/messages/discovery/candidates`,
  },
  feed: {
    base: () => `/feed`,
    posts: () => `/feed/posts`,
    postById: (id: string) => `/feed/posts/${id}`,
    metadata: () => `/feed/link-metadata`,
    profile: (userId: string) => `/feed/profile/${encodeURIComponent(userId)}`,
    drafts: {
      base: () => `/feed/drafts`,
      count: () => `/feed/drafts/count`,
      byId: (id: string) => `/feed/drafts/${id}`,
    },
    interactions: {
      like: (id: string) => `/feed/posts/${id}/like`,
      likeComment: (commentId: string) => `/feed/comments/${commentId}/like`,
      save: (id: string) => `/feed/posts/${id}/save`,
      comment: (id: string) => `/feed/posts/${id}/comments`,
      commentById: (commentId: string) => `/feed/comments/${commentId}`,
      reshare: (id: string) => `/feed/posts/${id}/reshare`,
      pollVote: (id: string) => `/feed/polls/${id}/vote`,
    },
  },
  notifications: {
    base: () => `/notifications`,
    markAllRead: () => `/notifications/mark-all-read`,
    markRead: (id: string) => `/notifications/${encodeURIComponent(id)}/read`,
  },
  settings: {
    base: () => `/settings`,
    password: () => `/settings/password`,
    email: () => `/settings/email`,
    deleteAccount: () => `/settings/delete-account`,
    privacy: () => `/settings/privacy`,
    notifications: () => `/settings/notifications`,
    theme: () => `/settings/theme`,
    display: () => `/settings/display`,
  },
  uploads: {
    sign: () => `/media/sign`,
    image: () => `/uploads/image`,
    file: () => `/uploads/file`,
    voice: () => `/uploads/voice`,
  },
  analytics: {
    track: () => `/analytics/events`,
    trending: (limit: number = 5) => `/analytics/trending?limit=${limit}`,
    rateLimit: () => `/analytics/rate-limit`,
  },
  help: {
    layout: () => `/help/layout`,
    category: (id: string) => `/help/categories/${encodeURIComponent(id)}`,
    search: (query: string) => `/help/search?q=${encodeURIComponent(query)}`,
  },
};