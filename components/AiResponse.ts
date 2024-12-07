import { OPENAI_API_KEY } from "@env";

export async function getAIResponse(
  postText: string,
  monsterDesc: string,
  commentText: string
): Promise<string | null> {
  if (!OPENAI_API_KEY) {
    console.error(
      "API key is missing. Set OPENAI_API_KEY in your environment variables."
    );
    return null;
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `You are a monster with this personality: ${monsterDesc}.
            The following is the original post for context: "${postText}"
            You will be given a user comment related to this post. Respond directly and in character as the monster, focusing primarily on the user's comment.`,
          },
          {
            role: "user",
            content: `User Comment: "${commentText}"
            Respond in character as the monster, addressing the comment directly.`,
          },
        ],
      }),
    });

    const data = await response.json();
    if (data.choices && data.choices[0]?.message?.content) {
      return data.choices[0].message.content;
    }

    return null;
  } catch (error) {
    console.error("Error generating AI response:", error);
    return null;
  }
}
