import * as axios from 'axios';
import { AxiosInstance } from 'axios';
import { LoginPayload, AuthReturn, SignupPayload, AuthUser, CareerOption } from '@unio/types';

declare const client: axios.AxiosInstance;
declare const getJSON: <T>(url: string, params?: any) => Promise<T>;
declare const postJSON: <T>(url: string, body?: any) => Promise<T>;
declare const patchJSON: <T>(url: string, body?: any) => Promise<T>;
declare function setGlobalAuthToken(token: string | null): void;

declare const endpoints: {
    auth: {
        login: () => string;
        signup: () => string;
        logout: () => string;
        me: () => string;
        refresh: () => string;
        checkUsername: (username: string, firstName?: string, lastName?: string) => string;
    };
    meta: {
        careers: () => string;
        locations: (query: string) => string;
        universities: (query: string) => string;
        universityById: (id: string) => string;
    };
    networking: {
        stats: () => string;
        requests: () => string;
        accept: (requestId: string) => string;
        decline: (requestId: string) => string;
        boost: () => string;
        connections: () => string;
        removeConnection: (targetUserId: string) => string;
    };
    /**
     * 📡 DISCOVERY ENGINE (The Swipe Stack & Studio)
     */
    discovery: {
        stack: () => string;
        swipe: () => string;
        me: () => string;
        updateOrb: (orbId: string) => string;
        publish: () => string;
        search: () => string;
    };
    users: {
        base: string;
        byId: (slugOrUsername: string) => string;
        updateMe: () => string;
        search: () => string;
        block: (userId: string) => string;
        status: () => string;
        onboarding: {
            step: () => string;
            complete: () => string;
        };
    };
    communities: {
        list: () => string;
        search: () => string;
        categories: () => string;
        create: () => string;
        byId: (id: string | number) => string;
        update: (id: string | number) => string;
        join: (id: string | number) => string;
        leave: (id: string | number) => string;
        members: (id: string | number) => string;
        threads: (communityId: string | number) => string;
        threadDetail: (threadId: string | number) => string;
        vote: (threadId: string | number) => string;
    };
    inbox: {
        list: () => string;
        markRead: (id: string) => string;
        updatePreferences: () => string;
    };
    conversations: {
        byId: (id: string) => string;
        actions: (id: string) => string;
        create: () => string;
        messages: (id: string) => string;
        sharedContent: (id: string) => string;
        unsend: (messageId: string) => string;
        candidates: () => string;
    };
    feed: {
        base: () => string;
        posts: () => string;
        postById: (id: string) => string;
        metadata: () => string;
        profile: (userId: string) => string;
        drafts: {
            base: () => string;
            count: () => string;
            byId: (id: string) => string;
        };
        interactions: {
            like: (id: string) => string;
            likeComment: (commentId: string) => string;
            save: (id: string) => string;
            comment: (id: string) => string;
            commentById: (commentId: string) => string;
            reshare: (id: string) => string;
            pollVote: (id: string) => string;
        };
    };
    notifications: {
        base: () => string;
        markAllRead: () => string;
        markRead: (id: string) => string;
    };
    settings: {
        base: () => string;
        password: () => string;
        email: () => string;
        deleteAccount: () => string;
        privacy: () => string;
        notifications: () => string;
        theme: () => string;
        display: () => string;
    };
    uploads: {
        sign: () => string;
        image: () => string;
        file: () => string;
        voice: () => string;
    };
    analytics: {
        track: () => string;
        trending: (limit?: number) => string;
        rateLimit: () => string;
    };
    help: {
        layout: () => string;
        category: (id: string) => string;
        search: (query: string) => string;
    };
};

declare class AppError extends Error {
    status?: number;
    errorCode?: string;
    constructor(message: string, meta?: any);
}
declare function setupInterceptors(instance: AxiosInstance, onUnauthorized?: () => void): void;

declare const login: (payload: LoginPayload) => Promise<AuthReturn>;
declare const signup: (payload: SignupPayload) => Promise<AuthReturn>;
declare const refresh: () => Promise<AuthReturn>;
declare const logout: () => Promise<void>;
declare const getMe: () => Promise<{
    user: AuthUser;
}>;
/**
 * ✅ checkUsername
 * Checks availability and returns potential suggestions if taken.
 */
declare const checkUsername: (username: string, firstName?: string, lastName?: string) => Promise<{
    available: boolean;
    suggestions?: string[];
}>;
declare const authApi: {
    login: (payload: LoginPayload) => Promise<AuthReturn>;
    signup: (payload: SignupPayload) => Promise<AuthReturn>;
    refresh: () => Promise<AuthReturn>;
    logout: () => Promise<void>;
    getMe: () => Promise<{
        user: AuthUser;
    }>;
    checkUsername: (username: string, firstName?: string, lastName?: string) => Promise<{
        available: boolean;
        suggestions?: string[];
    }>;
};

/**
 * ✅ getCareers
 * Fetches a list of careers for onboarding and profile setup.
 * Supports optional query filtering.
 */
declare function getCareers(query?: string): Promise<CareerOption[]>;

export { AppError, authApi, checkUsername, client, endpoints, getCareers, getJSON, getMe, login, logout, patchJSON, postJSON, refresh, setGlobalAuthToken, setupInterceptors, signup };
