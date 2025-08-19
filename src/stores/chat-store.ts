/* eslint-disable @typescript-eslint/no-unused-vars */
import { create } from "zustand"
import { devtools } from "zustand/middleware"

export interface Message {
  id: string
  content: string
  senderId: string
  senderName: string
  timestamp: Date
  type: "text" | "file" | "image"
  fileUrl?: string
  fileName?: string
  seen: boolean
}

export interface Room {
  id: string
  name: string
  type: "private" | "open"
  hasPasskey: boolean
  createdAt: Date
  members: string[]
}

export interface User {
  id: string
  name: string
  avatar?: string
}

interface ChatState {
  // Current user
  currentUser: User | null

  // Rooms
  currentRoom: Room | null
  rooms: Room[]

  // Messages
  messages: Message[]

  // UI State
  isInRoom: boolean
  showRoomSelection: boolean

  // Actions
  setCurrentUser: (user: User) => void
  setCurrentRoom: (room: Room) => void
  addRoom: (room: Room) => void
  addMessage: (message: Message) => void
  markMessageAsSeen: (messageId: string) => void
  leaveRoom: () => void
  resetChat: () => void
  setShowRoomSelection: (show: boolean) => void
}

export const useChatStore = create<ChatState>()(
  devtools(
    (set, get) => ({
      // Initial state
      currentUser: null,
      currentRoom: null,
      rooms: [],
      messages: [],
      isInRoom: false,
      showRoomSelection: true,

      // Actions
      setCurrentUser: (user) => set({ currentUser: user }),

      setCurrentRoom: (room) =>
        set({
          currentRoom: room,
          isInRoom: true,
          showRoomSelection: false,
          messages: [], // Clear messages when switching rooms
        }),

      addRoom: (room) =>
        set((state) => ({
          rooms: [...state.rooms, room],
        })),

      addMessage: (message) =>
        set((state) => ({
          messages: [...state.messages, message],
        })),

      markMessageAsSeen: (messageId) =>
        set((state) => ({
          messages: state.messages.map((msg) => (msg.id === messageId ? { ...msg, seen: true } : msg)),
        })),

      leaveRoom: () =>
        set({
          currentRoom: null,
          isInRoom: false,
          showRoomSelection: true,
          messages: [],
        }),

      resetChat: () =>
        set({
          currentUser: null,
          currentRoom: null,
          rooms: [],
          messages: [],
          isInRoom: false,
          showRoomSelection: true,
        }),

      setShowRoomSelection: (show) => set({ showRoomSelection: show }),
    }),
    { name: "chat-store" },
  ),
)
