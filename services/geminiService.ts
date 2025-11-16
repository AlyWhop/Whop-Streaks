import { GoogleGenAI, Modality } from "@google/genai";

// -------------------------------------------------------------------------
// UNIVERSAL API KEY FALLBACK (AI Studio → Vite → Vercel)
// -------------------------------------------------------------------------
const API_KEY =
  (process.env.API_KEY as string | undefined) ||            // AI Studio Preview
  (import.meta.env.VITE_API_KEY as string | undefined);      // Vercel + Local Vite

if (!API_KEY) {
  console.warn("API_KEY is missing. Gemini features will use placeholders.");
}

// Create Gemini client only if API exists (prevents crash in browser)
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

// -------------------------------------------------------------------------
// GENERATE BADGE IMAGE
// -------------------------------------------------------------------------
export const generateBadgeImage = async (streak: number): Promise<string> => {
  if (!API_KEY || !ai) {
    return `https://picsum.photos/seed/${streak}/512`;
  }

  try {
    const prompt = `A futuristic, cosmic, glowing badge for a ${streak}-day achievement streak. Electric purple, neon pink and cyan colors on a dark background. Epic trophy design, digital art, cinematic lighting.`;

    const response = await ai.models.generateImages({
      model: "imagen-4.0-generate-001",
      prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "1:1",
      },
    });

    if (response?.generatedImages?.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    }

    throw new Error("No image returned");
  } catch (err) {
    console.error("Error generating badge image:", err);
    return `https://picsum.photos/seed/${streak}/512`;
  }
};

// -------------------------------------------------------------------------
// GENERATE AVATAR IMAGE
// -------------------------------------------------------------------------
export const generateAvatarImage = async (prompt: string): Promise<string> => {
  if (!API_KEY || !ai) {
    return `https://picsum.photos/seed/${prompt}/512`;
  }

  try {
    const fullPrompt = `A cool, futuristic profile picture avatar based on this description: "${prompt}". Digital art, cyberpunk style, vibrant neon colors, dark background, cinematic lighting, focused on the face.`;

    const response = await ai.models.generateImages({
      model: "imagen-4.0-generate-001",
      prompt: fullPrompt,
      config: {
        numberOfImages: 1,
        outputMimeType: "image/png",
        aspectRatio: "1:1",
      },
    });

    if (response?.generatedImages?.length > 0) {
      const base64ImageBytes = response.generatedImages[0].image.imageBytes;
      return `data:image/png;base64,${base64ImageBytes}`;
    }

    throw new Error("No image returned");
  } catch (err) {
    console.error("Error generating avatar image:", err);
    return `https://picsum.photos/seed/${prompt}/512`;
  }
};

// -------------------------------------------------------------------------
// Convert URL → Base64 Data URL
// -------------------------------------------------------------------------
const imageUrlToDataUrl = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

// -------------------------------------------------------------------------
// IMAGE EDITING
// -------------------------------------------------------------------------
export const editImage = async (imageUrl: string, prompt: string): Promise<string> => {
  if (!API_KEY || !ai) {
    return imageUrl;
  }

  let imageDataUrl = imageUrl;
  if (!imageUrl.startsWith("data:")) {
    imageDataUrl = await imageUrlToDataUrl(imageUrl);
  }

  const match = imageDataUrl.match(/^data:(image\/[a-z]+);base64,(.*)$/);

  if (!match) {
    throw new Error("Invalid base64 image format.");
  }

  const [, mimeType, data] = match;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          { inlineData: { mimeType, data } },
          { text: prompt },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const parts = response?.candidates?.[0]?.content?.parts || [];

    for (const part of parts) {
      if (part.inlineData) {
        const base64 = part.inlineData.data;
        return `data:${part.inlineData.mimeType};base64,${base64}`;
      }
    }

    throw new Error("No edited image returned");
  } catch (err) {
    console.error("Error editing image:", err);
    return imageUrl;
  }
};
