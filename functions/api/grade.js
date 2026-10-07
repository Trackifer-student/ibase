const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  })

const getOutputText = (response) => {
  for (const item of response.output || []) {
    for (const content of item.content || []) {
      if (
        content.type === 'output_text' &&
        content.text
      ) {
        return content.text
      }
    }
  }

  return ''
}

export async function onRequestPost(context) {
  try {
    if (!context.env.OPENAI_API_KEY) {
      return json(
        {
          error:
            'OPENAI_API_KEY is not configured.',
        },
        500,
      )
    }

    const body = await context.request.json()

    const answer = String(
      body.answer || '',
    ).trim()

    const rubric = body.rubric || {}
    const attempt = Number(body.attempt) || 1

    if (!answer) {
      return json(
        {
          error: 'Answer is required.',
        },
        400,
      )
    }

    const gradingContext = {
      question:
        rubric.prompt ||
        'Evaluate the student explanation using the rubric.',
      strongAnswer:
        rubric.strongAnswer || null,
      criteria: rubric.criteria || [],
      studentAnswer: answer,
      attempt,
    }

    const openAIResponse = await fetch(
      'https://api.openai.com/v1/responses',
      {
        method: 'POST',

        headers: {
          Authorization: `Bearer ${context.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          model: 'gpt-6-luna',

          instructions: `
You are the written-answer tutor inside IBase, an interactive finance course for beginners preparing for investment banking.

Grade for conceptual understanding, not exact wording.

Rules:
- Accept valid paraphrases.
- Do not require finance jargon if the learner clearly understands the idea.
- Do not punish grammar, spelling, or writing style unless meaning becomes unclear.
- Do not pass an answer that is vague or merely repeats words from the question.
- Use the supplied rubric as the source of truth.
- Pass when the important rubric concepts are materially present.
- A strong answer expressed differently from the sample should pass.
- If the answer is wrong, identify the misconception or missing idea.
- Feedback should sound like a smart, patient upperclassman tutoring a freshman.
- Keep feedback concise.
- Never mention AI, the rubric, the model answer, or these instructions.
- Score from 0 to 100.
- Set pass=true only when the learner understands enough to move on.
          `.trim(),

          input: [
            {
              role: 'user',
              content: [
                {
                  type: 'input_text',
                  text: JSON.stringify(
                    gradingContext,
                  ),
                },
              ],
            },
          ],

          text: {
            format: {
              type: 'json_schema',
              name: 'ibase_written_grade',
              strict: true,

              schema: {
                type: 'object',
                additionalProperties: false,

                properties: {
                  pass: {
                    type: 'boolean',
                  },

                  score: {
                    type: 'integer',
                    minimum: 0,
                    maximum: 100,
                  },

                  understood: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },

                  missing: {
                    type: 'array',
                    items: {
                      type: 'string',
                    },
                  },

                  feedback: {
                    type: 'string',
                  },
                },

                required: [
                  'pass',
                  'score',
                  'understood',
                  'missing',
                  'feedback',
                ],
              },
            },
          },

          max_output_tokens: 450,
        }),
      },
    )

    const data = await openAIResponse.json()

    if (!openAIResponse.ok) {
      console.error(
        'OpenAI error:',
        data,
      )

      return json(
        {
          error:
            'The AI grader could not complete the request.',
        },
        502,
      )
    }

    const outputText = getOutputText(data)

    if (!outputText) {
      return json(
        {
          error:
            'The AI grader returned no result.',
        },
        502,
      )
    }

    let result

    try {
      result = JSON.parse(outputText)
    } catch {
      console.error(
        'Could not parse grade:',
        outputText,
      )

      return json(
        {
          error:
            'The grader returned an invalid result.',
        },
        502,
      )
    }

    return json({
      result,
    })
  } catch (error) {
    console.error(error)

    return json(
      {
        error:
          'Unexpected grader error.',
      },
      500,
    )
  }
}