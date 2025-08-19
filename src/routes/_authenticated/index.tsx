import {AILendingPlatform} from "@/features/ai-lending/"
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/')({
  component: AILendingPlatform,
})
