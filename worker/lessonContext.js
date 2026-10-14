import { tracks } from '../src/data/curriculum.js'
import { aiBankingModule } from '../src/data/modules/aiBanking.js'
import { concepts } from '../src/data/concepts.js'

export const questionTypes = new Set(['mcq', 'fill', 'number', 'written'])
const teachingTypes = new Set(['intro', 'teach', 'worked', 'concept', 'list', 'complete'])
const clean = text => String(text || '').replace(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => label || concepts[id]?.name || id)
// Explicitly allow teaching fields only. Never serialize answer keys, rubrics, or feedback.
const fields = ['title', 'body', 'note', 'paragraphs', 'callout', 'scenario', 'workedSteps', 'label', 'text', 'cards', 'items', 'takeaway', 'formula', 'description']
function teachingText(value) {
  if (typeof value === 'string') return clean(value)
  if (Array.isArray(value)) return value.map(teachingText).filter(Boolean).join('\n')
  if (value && typeof value === 'object') return fields.filter(key => key in value).map(key => teachingText(value[key])).filter(Boolean).join('\n')
  return ''
}
export const lessons = [...tracks.flatMap(track => track.modules), aiBankingModule].flatMap(module => module.lessons)
const index = new Map(lessons.map(lesson => [lesson.id, {
  lesson,
  text: lesson.steps.filter(step => teachingTypes.has(step.type)).map(teachingText).join('\n').slice(0, 5500),
  search: `${lesson.title} ${lesson.summary} ${(lesson.concepts || []).join(' ')}`.toLowerCase(),
}]))
export function lessonContext(lessonId, stepIndex, question) {
  const entry = index.get(lessonId)
  if (!entry || !Number.isInteger(stepIndex) || !entry.lesson.steps[stepIndex]) return null
  const step = entry.lesson.steps[stepIndex]
  const hintOnly = questionTypes.has(step.type)
  const words = [...new Set(question.toLowerCase().match(/[a-z]{4,}/g) || [])].filter(word => !['this', 'that', 'what', 'with', 'from', 'does', 'explain', 'please', 'about', 'give', 'example', 'lesson', 'another'].includes(word))
  const related = [...index.values()].filter(item => item !== entry)
    .map(item => ({ ...item, score: words.reduce((sum, word) => sum + (item.search.includes(word) ? 1 : 0), 0) }))
    .filter(item => item.score >= 2).sort((a, b) => b.score - a.score).slice(0, 2)
  const definitions = (entry.lesson.concepts || []).map(id => concepts[id]).filter(Boolean)
    .map(concept => `${concept.name}: ${concept.definition}`).join('\n').slice(0, 1000)
  return {
    hintOnly,
    text: `Current lesson: ${entry.lesson.title}\nCurrent step (${stepIndex + 1}): ${clean(step.title)}\n${hintOnly ? 'This is a practice question. Give a conceptual hint only, not the answer or completed calculation.' : teachingText(step).slice(0, 1800)}\nLesson reference:\n${entry.text}\nDefinitions:\n${definitions}\n${related.map(item => `Related lesson: ${item.lesson.title}\n${item.text.slice(0, 1000)}`).join('\n')}`,
    sources: [entry, ...related].map(item => ({ title: item.lesson.title, href: `/lesson/${item.lesson.id}` })),
  }
}
