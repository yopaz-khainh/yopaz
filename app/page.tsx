"use client";

import { useState } from "react";

export default function JapaneseTextToSpeech() {
  const [text, setText] = useState("こんにちは！私は日本語を勉強しています。お会いできてうれしいです！");

  const speak = () => {
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP"; 
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-4 max-w-md mx-auto space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="日本語のテキストを入力してください..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={speak}
      >
        読み上げる
      </button>
    </div>
  );
}